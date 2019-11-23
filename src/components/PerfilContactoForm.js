import React from 'react'
import useForm from 'react-hook-form'

export default function PerfilContactoForm ({
  defaultValues = {},
  onDataChange,
  botonera
}) {
  const { register } = useForm({ defaultValues })

  return (
    <div className="box is-narrow" >
      <form onSubmit={e => e.preventDefault()}>

        <div className="field">
          <label className="label">Nombre</label>
          <div className="control has-icons-left">
            <input
              className="input"
              name="name"
              type="text"
              placeholder="Fulanito de tal"
              ref={register}
              onBlur={onDataChange}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-user"></i>
            </span>
          </div>
        </div>

        <div className="field">
          <label className="label">Teléfono (movil o fijo)</label>
          <div className="control has-icons-left">
            <input
              className="input"
              name="phone"
              type="phone"
              placeholder="6xx xxx xxx" ref={register}
              onBlur={onDataChange}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-phone"></i>
            </span>
          </div>
        </div>
        {botonera}
      </form>
    </div>
  )
}
