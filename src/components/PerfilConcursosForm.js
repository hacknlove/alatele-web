import React from 'react'
import useForm from 'react-hook-form'

export default function PerfilConcursosForm ({
  onCheckedChange,
  defaultValues = {},
  botonera
}) {
  const { register } = useForm({
    defaultValues
  })

  return (
    <div className="box is-narrow" >
      <form onSubmit={e => e.preventDefault()}>

        <div className="field">
          <input
            id="culturaGeneral"
            className="switch"
            name="culturaGeneral"
            type="checkbox"
            ref={register}
            onChange={onCheckedChange}
          />
          <label htmlFor="culturaGeneral" className="label">Cultura general</label>
        </div>

        <div className="field">
          <input
            id="cultura avanzada"
            className="switch"
            name="culturaAvanzada"
            type="checkbox"
            ref={register}
            onChange={onCheckedChange}
          />
          <label htmlFor="cultura avanzada" className="label">Cultura avanzada</label>
        </div>

        <div className="field">
          <input
            id="inteligencia"
            className="switch"
            name="inteligencia"
            type="checkbox"
            ref={register}
            onChange={onCheckedChange}
          />
          <label htmlFor="inteligencia" className="label">Inteligencia</label>
        </div>

        <div className="field">
          <input
            id="realitiesDeConvivencia"
            className="switch"
            name="realitiesConvivencia"
            type="checkbox"
            ref={register}
            onChange={onCheckedChange}
          />
          <label htmlFor="realitiesDeConvivencia" className="label">Realities de convivencia</label>
        </div>

        <div className="field">
          <input
            id="otrosRealities"
            className="switch"
            name="realitiesOtros"
            type="checkbox"
            ref={register}
            onChange={onCheckedChange}
          />
          <label htmlFor="otrosRealities" className="label">Otros realities</label>
        </div>

        <div className="field">
          <input
            id="talento"
            className="switch"
            name="talento"
            type="checkbox"
            ref={register}
            onChange={onCheckedChange}
          />
          <label htmlFor="talento" className="label">Talento</label>
        </div>

        <div className="field">
          <input
            id="humor"
            className="switch"
            name="humor"
            type="checkbox"
            ref={register}
            onChange={onCheckedChange}
          />
          <label htmlFor="humor" className="label">Humor</label>
        </div>

        <div className="field">
          <input
            id="destreza"
            className="switch"
            name="destreza"
            type="checkbox"
            ref={register}
            onChange={onCheckedChange}
          />
          <label htmlFor="destreza" className="label">Destreza</label>
        </div>

        {botonera}
      </form>
    </div>
  )
}
