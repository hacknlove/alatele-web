import React from 'react'
import useForm from 'react-hook-form'

export default function PerfilACercaDeTiForm ({
  defaultValues = {},
  onDataChange,
  botonera
}) {
  const { register } = useForm({ defaultValues })

  return (
    <div className="box is-narrow" >
      <form onSubmit={e => e.preventDefault()}>
        <div className="field">
          <label className="label">Rompe el hielo</label>
          <textarea
            style={{ resize: 'none' }}
            className="textarea"
            name="presentation"
            placeholder="Presentate a ti mismo y rompe el hielo"
            onBlur={onDataChange}
            ref={register}
            rows={10}
          />
          <p className="help">
            Escribe aquello que consideres importante sobre tí, puedes incluir anécdotas, deseos, planes, hobbies, todo lo que te apetezca compartir.
          </p>
        </div>
        {botonera}
      </form>
    </div>
  )
}
