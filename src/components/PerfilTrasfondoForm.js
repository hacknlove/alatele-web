import React from 'react'
import useForm from 'react-hook-form'

export default function PerfilTrasfondoForm ({
  defaultValues = {},
  onDataChange,
  botonera
}) {
  const { register } = useForm({ defaultValues })

  return (
    <div className="box is-narrow" >
      <form onSubmit={e => e.preventDefault()}>
        <div className="field">
          <label className="label">Presentación</label>
          <textarea
            className="textarea"
            name="presentation"
            placeholder="Preséntate brevemente"
            onBlur={onDataChange}
            ref={register}
          />
        </div>

        <div className="field">
          <label className="label">Curiosidades</label>
          <textarea
            className="textarea"
            name="anecdote"
            placeholder="Centanos algo especial sobre ti, alguna anécdota, afición, habilidad, que te diferencie"
            ref={register}
            onBlur={onDataChange}
          />
        </div>

        <div className="field">
          <label className="label">Sueños</label>
          <textarea
            className="textarea"
            name="dreams"
            placeholder="¿cuáles son tus deseos? ¿qué harías con el premio?"
            ref={register}
            onBlur={onDataChange}
          />
        </div>

        <div className="field">
          <label className="label">Tema libre</label>
          <textarea
            className="textarea"
            name="free"
            placeholder="Utiliza este espacio como quieras"
            ref={register}
            onBlur={onDataChange}
          />
        </div>

        {botonera}
      </form>
    </div>
  )
}
