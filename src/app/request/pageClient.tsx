'use client'

import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

type FormData = {
  name: string
  email: string
  message: string
  accessKey: string
}
type Notification = {
  id: number
  message: string
  type: 'info' | 'error'
}

// API関連（フロントで配信するものなのでリポジトリに入れても良い）
const CONTACT_API_ACCESS_KEY = '63bd881c-e721-4b6e-acd8-d22a27fa644d'
const CONTACT_API_URL = 'https://api.staticforms.xyz/submit'

const getInitialFormData = (): FormData => ({
  name: '',
  email: '',
  message: '',
  accessKey: CONTACT_API_ACCESS_KEY,
})

class ValidateError extends Error {}

const Notifications = ({
  notifications,
}: { notifications: Notification[] }) => {
  if (notifications.length === 0) return null
  return (
    <div className="fixed top-0 left-0 right-0 p-2 grid gap-1 z-10">
      {notifications.map((notification) => {
        const bg = notification.type === 'error' ? 'bg-red-500' : 'bg-primary'
        const text = notification.type === 'error' ? 'text-white' : 'text-black'
        return (
          <div
            key={notification.id}
            className={`${bg} ${text} font-bold text-black px-2 py-4 text-center rounded`}
          >
            {notification.message}
          </div>
        )
      })}
    </div>
  )
}

export const ContactClient = () => {
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState<FormData>(getInitialFormData())
  const setFormDataPartial = (partial: Partial<FormData>) => {
    setFormData({
      ...formData,
      ...partial,
    })
  }
  const validate = () => {
    if (formData.name === '' || formData.name.length >= 30) {
      throw new ValidateError('お名前を30文字以内で入力してください')
    }
    if (formData.email === '') {
      throw new ValidateError('メールアドレスを入力してください')
    }
    if (formData.message === '' || formData.message.length > 1000) {
      throw new ValidateError('メッセージを1000文字以内で入力してください')
    }
  }
  const notify = (message: string, type: 'info' | 'error' = 'info') => {
    const NOTIFICATION_TIME = 5000
    const notification: Notification = {
      id: Math.max(0, ...notifications.map((o) => o.id)) + 1,
      message,
      type,
    }
    setNotifications([...notifications, notification])
    setTimeout(() => {
      setNotifications(notifications.filter((o) => o.id !== notification.id))
    }, NOTIFICATION_TIME)
  }
  const handleSubmit = async () => {
    setIsLoading(true)
    try {
      validate()
      const apiResponse = await fetch(CONTACT_API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })
      if (!apiResponse.ok) {
        throw new Error(apiResponse.statusText)
      }
      notify('送信しました', 'info')
      setFormData(getInitialFormData())
    } catch (error) {
      if (error instanceof ValidateError) {
        notify(error.message, 'error')
        return
      }
      notify('送信できませんでした', 'error')
      throw error
    } finally {
      setIsLoading(false)
    }
  }
  return (
    <form
      className="grid gap-4"
      onSubmit={(e) => {
        e.preventDefault()
        handleSubmit()
      }}
    >
      <Notifications notifications={notifications} />
      <label>
        <p className="font-bold">お名前・会社名</p>
        <input
          type="text"
          maxLength={30}
          name="name"
          className="mt-1 border border-line border-1 bg-primarybg w-full px-4 py-4 rounded text-lg"
          value={formData.name}
          onChange={(e) => setFormDataPartial({ name: e.target.value })}
          required
        />
      </label>
      <label>
        <p className="font-bold">メールアドレス</p>
        <input
          type="email"
          name="email"
          className="mt-1 border border-line border-1 bg-primarybg w-full px-4 py-4 rounded text-lg"
          value={formData.email}
          onChange={(e) => setFormDataPartial({ email: e.target.value })}
          required
        />
      </label>
      <label>
        <p className="font-bold">メッセージ</p>
        <textarea
          maxLength={1000}
          className="mt-1 border border-line border-1 bg-primarybg w-full px-4 py-4 rounded text-lg"
          value={formData.message}
          onChange={(e) => setFormDataPartial({ message: e.target.value })}
          rows={5}
          required
        />
      </label>
      <div className="pt-2 flex">
        {isLoading ? (
          <p className="bg-primarybg font-bold text-black px-16 py-2 rounded">
            <FontAwesomeIcon icon={faSpinner} spin={true} />
          </p>
        ) : (
          <button
            className="bg-primary font-bold text-black px-16 py-3 rounded"
            type="submit"
          >
            送信
          </button>
        )}
      </div>
    </form>
  )
}
