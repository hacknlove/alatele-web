import React from 'react'
import useForm from 'react-hook-form'

function noop () {}
export default function LoginForm ({ active, onLogin, onCancel, defaultValues, loading }) {
  const { register, handleSubmit, errors, setError } = useForm({
    defaultValues,
    nativeValidation: false
  })

  function onLocalSubmit (data) {
    onLogin(data, setError)
  }

  return (
    <div className={`modal ${active ? 'is-active' : ''}`}>
      <div className="modal-background" onClick={loading ? noop : onCancel}></div>
      <div className="modal-content">
        <div className={`box ${loading ? 'is-loading' : ''}`}>
          <h1 className="title">Entrar</h1>
          <form onSubmit={handleSubmit(onLocalSubmit)}>
            <div className="field">
              <label className="label">Correo electrónico</label>
              <div className="control has-icons-left">
                <input className={`input ${errors.email && 'is-danger'}`} name="email" type="email" noValidate placeholder="escribe@tu-correo.aquí" ref={register({
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

            <div className="field is-grouped">
              <div className="control">
                <button className="button is-primary">Aceptar</button>
              </div>
              <div className="control">
                <button type="button" className="button" onClick={onCancel}>Cancelar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
