<template>
  <div class="page">
    <form @submit.prevent="submit">
      <div class="form-loader" v-if="formStatus == 'loading'">
        <img src="@/assets/loader.svg" alt="">
      </div>
      <div v-if="formStatus == 'form'">
        <dl>
          <dt>name</dt>
          <dd><input v-model="name" type="text" @focusout="nameTaint=true"></dd>
          <dd class="error-msg" v-show="nameTaint && !nameValid">名前を正しく入力してください</dd>
        </dl>
        <dl>
          <dt>email</dt>
          <dd><input v-model="email" type="text" @focusout="emailTaint=true"></dd>
          <dd class="error-msg" v-show="emailTaint && !emailValid">メールアドレスを正しく入力してください</dd>
        </dl>
        <dl>
          <dt>message</dt>
          <dd><textarea v-model="message" rows="10" @focusout="messageTaint=true"></textarea></dd>
          <dd class="error-msg" v-show="messageTaint && !messageValid">メッセージを正しく入力してください</dd>
        </dl>
        <div class="button-wrap">
          <button :class="{disabled: !sendable}">send</button>
        </div>
      </div>
      <div class="form-done" v-if="formStatus=='done'">
        <div class="form-done-title">thank you!</div>
        <div class="form-done-message">ありがとうございました。<br>近日中に返信いたしますので、しばらくお待ちください。</div>
      </div>
    </form>
  </div>
</template>

<script>
import apiContacts from '@/api/contacts'

export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      name: '',
      nameTaint: false,
      email: '',
      emailTaint: false,
      message: '',
      messageTaint: false,
      formStatus: 'form',
    }
  },
  computed: {
    nameValid () {
      return this.name.length >= 2 && this.name.length <= 20
    },
    emailValid () {
      return this.email.match(/^[A-Za-z0-9]{1}[A-Za-z0-9_.-]*@{1}[A-Za-z0-9_.-]{1,}\.[A-Za-z0-9]{1,}$/)
    },
    messageValid () {
      return this.message.length >= 10 && this.message.length <= 3000
    },
    hasError () {
      return !this.nameValid || !this.emailValid || !this.messageValid
    },
    allTaint () {
      return this.nameTaint && this.emailTaint && this.messageTaint
    },
    sendable () {
      return !this.hasError
    },
    formParams() {
      return {
        name: this.name,
        email: this.email,
        message: this.message,
      }
    },
  },
  methods: {
    async submit() {
      try {
        this.formStatus = 'loading'
        await apiContacts.postContact(this.formParams)
        this.formStatus = 'done'
      } catch {
        alert('エラーが発生しました')
        this.formStatus = 'form'
      }
    },
  },
  head () {
    return {
      title: 'みのじろーに連絡 | Photographer minoJiro (みのじろー)',
    }
  },
}
</script>

<style scoped>
.page {
  max-width: 640px;
  margin: 0 auto;
}

dl {
  margin-bottom: 50px;
}
dt {
  margin: 0 0 10px;
  padding: 0;
}
dd {
  margin: 0;
  padding: 0;
}
.error-msg {
    font-size: 12px;
    font-family: sans-serif;
    margin-top: 5px;
    color: #c00;
}
.inner {
  max-width: 650px;
  margin: 0 auto;
}
input[type='text'], textarea {
  border: 1px solid #ccc;
  transition: background 0.8s ease;
  color: inherit;
  font-family: sans-serif;
  font-size: 16px;
  box-sizing: border-box;
  width: 100%;
  padding: 15px;
  outline: 0;
  background: #f8f8f8;
  border-radius: 0;
}
input[type='text']:focus, textarea:focus {
  background: #fff;
  transition-duration: 0s;
}
.button-wrap {
  text-align: center;
}
button {
  cursor: pointer;
  -webkit-appearance: none;
    border: 1px solid #ccc;
    margin-bottom: 100px;
    font-size: inherit;
    -webkit-font-smoothing: antialiased;
    font-size: 20px;
    font-family: inherit;
    text-transform: uppercase;
    padding: 15px 30px;
    letter-spacing: 0.05em;
}
button.disabled {
  pointer-events: none;
  opacity: 0.2;
}
.form-done {
  text-align: center;
  margin: 100px 0;
}
.form-done-title {
  font-size: 30px;
}
.form-done-message {
  font-family: sans-serif;
  margin-top: 20px;
}
.form-loader {
  text-align: center;
  padding: 100px 0;
}
</style>
