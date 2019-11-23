import React, { useState } from 'react'
import useForm from 'react-hook-form'

import LoginForm from './LoginForm'

export default function RegisterForm ({ onRegister, onLogin, defaultValues, loading }) {
  const { register, handleSubmit, errors } = useForm({
    defaultValues,
    nativeValidation: false
  })

  const [loginActive, setloginActive] = useState(false)

  return (
    <div className={`box ${loading ? 'is-loading' : ''}`} id="register">
      <form onSubmit={handleSubmit(onRegister)}>
        <div className="field">
          <label className="label">Correo electrónico</label>
          <div className="control has-icons-left">
            <input className={`input ${errors.email && 'is-danger'}`} name="email" type="email" validate="false" placeholder="escribe@tu-correo.aquí" ref={register({
              required: 'Escribe tu email',
              pattern: {
                value: /.+@.+\..+/,
                message: 'Email no válido'
              }
            })}/>
            <span className="icon is-small is-left">
              <i className="fas fa-envelope"></i>
            </span>
          </div>
          {errors.email && (
            <p className="help is-danger">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="field">
          <label className="label">Contraseña</label>
          <div className="control has-icons-left">
            <input className={`input ${errors.password && 'is-danger'}`} name="password" type="text" placeholder=":c-0nt¶4ze~æ:" ref={register({
              required: 'Introduce una contraseña'
            })}/>
            <span className="icon is-small is-left">
              <i className="fas fa-key"></i>
            </span>
          </div>
          {errors.password && (
            <p className="help is-danger">
              {errors.password.message}
            </p>
          )}
        </div>

        <div className="field">
        </div>
        <div className="field">
          <div className="control">
            <input className="is-checkradio" id="terms" type="checkbox" name="terms" ref={register({
              required: true
            })} />
            <label htmlFor="terms">Acepto las condiciones legales y la política de privacidad</label>
          </div>
          {errors.terms && (
            <p className="help is-danger">
              Debes aceptar los términos y condiciones para poder continuar
            </p>
          )}
        </div>

        <div className="field">
          <div className="control">
            <button className="button is-primary">Crear perfil</button>
          </div>
        </div>
        <hr/>
        <div className="field">
          <label className="label">Ya tienes una cuenta</label>
          <div className="control">
            <button type="button" className="button is-link" onClick={() => setloginActive(true)}>Entrar</button>
          </div>
        </div>
      </form>
      <LoginForm
        active={loginActive}
        onCancel={() => setloginActive(false)}
        onLogin={onLogin}
      />
    </div>
  )
}
