import useForm from 'react-hook-form'
import React from 'react'

export default function RegisterForm ({ onSubmit }) {
  const { register, handleSubmit, errors, setError } = useForm()

  function onLocalSubmit (data) {
    onSubmit(data, setError)
  }

  return (
    <div className="box is-narrow">
      <form onSubmit={handleSubmit(onLocalSubmit)}>
        <div className="field">
          <label className="label">Nosotros te escribimos</label>
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
          <label className="label">o te llamamos</label>
          <div className="control has-icons-left">
            <input className={`input ${errors.email && 'is-danger'}`} name="email" type="phone" placeholder="+34 xxx xxx xxx" ref={register({
              required: 'Introduce una contraseña'
            })}/>
            <span className="icon is-small is-left">
              <i className="fas fa-phone"></i>
            </span>
          </div>
          {errors.email && (
            <p className="help is-danger">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="field">
          <div className="control">
            <button className="button is-primary is-fullwidth">Estoy interesado</button>
          </div>
        </div>
      </form>
    </div>
  )
}
