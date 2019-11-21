import React, { useState } from 'react'
import { login } from '../API'
import Router from 'next/router'

import LoginForm from '../components/LoginForm'

export default function LoginFormComponent ({ onCancel, active }) {
  const [loading, setloading] = useState(undefined)

  function onLogin (data, setError) {
    login(data)
    setloading(true)
    setTimeout(() => {
      Router.push('/editar-perfil')
    }, 2000)
  }

  return <LoginForm loading={loading} active={active} onLogin={onLogin} onCancel={onCancel} />
}
