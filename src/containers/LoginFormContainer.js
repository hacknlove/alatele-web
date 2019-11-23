import React from 'react'

import LoginForm from '../components/LoginForm'

export default function LoginFormComponent ({ onLogin, onCancel, active }) {
  return <LoginForm active={active} onLogin={onLogin} onCancel={onCancel} />
}
