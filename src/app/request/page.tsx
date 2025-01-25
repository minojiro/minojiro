import { ContactClient } from './pageClient'

export default async function Contact() {
  return (
    <main className="max-w-2xl mx-auto">
      <div className="mb-8">
        <h2 className="font-bold text-2xl">お問い合わせ</h2>
        <p className="mt-4">
          撮影のご依頼・ご相談などは、
          <a
            href="https://www.instagram.com/_minojiro"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            インスタグラムのメッセージ
          </a>
          、または、下のフォームよりお願いします。
        </p>
      </div>
      <ContactClient />
    </main>
  )
}
