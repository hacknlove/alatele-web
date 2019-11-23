import React from 'react'
import useForm from 'react-hook-form'

export default function PerfilSegmentationForm ({
  defaultValues = {},
  onDataChange,
  segmentation,
  botonera
}) {
  const { register } = useForm({
    defaultValues
  })

  return (
    <div className="box is-narrow" >
      <form onSubmit={e => e.preventDefault()}>
        <div className="field">
          <label className="label">Fecha de nacimiento</label>
          <div className="control has-icons-left">
            <input
              className="input"
              name="birthday"
              type="date"
              placeholder="19xx" ref={register}
              onChange={onDataChange}
            />
            <span className="icon is-small is-left">
              <i className="fas fa-birthday-cake"></i>
            </span>
          </div>
        </div>
        <div className="field">
          <label className="label">Provincia</label>
          <div className="control has-icons-left">
            <div className="select">
              <select
                name="state"
                ref={register}
                onChange={onDataChange}
              >
                {
                  segmentation.state.map(state => <option key={state}>{state}</option>)
                }
              </select>
            </div>
            <span className="icon is-small is-left">
              <i className="fas fa-ring"></i>
            </span>
          </div>
        </div>
        <div className="field">
          <label className="label">Nivel de estudios</label>
          <div className="control has-icons-left">
            <div className="select">
              <select
                name="education"
                ref={register}
                onChange={onDataChange}
              >
                {
                  segmentation.education.map(state => <option key={state}>{state}</option>)
                }
              </select>
            </div>
            <span className="icon is-small is-left">
              <i className="fas fa-graduation-cap"></i>
            </span>
          </div>
        </div>
        <div className="field">
          <label className="label">Sector profesional</label>
          <div className="control has-icons-left">
            <div className="select">
              <select
                name="sector"
                ref={register}
                onChange={onDataChange}
              >
                {
                  segmentation.sector.map(state => <option key={state}>{state}</option>)
                }
              </select>
            </div>
            <span className="icon is-small is-left">
              <i className="fas fa-wrench"></i>
            </span>
          </div>
        </div>

        <div className="field">
          <label className="label">Sexo</label>
          <div className="control has-icons-left">
            <div className="select">
              <select
                name="sex"
                ref={register}
                onChange={onDataChange}
              >
                {
                  segmentation.sex.map(state => <option key={state}>{state}</option>)
                }
              </select>
            </div>
            <span className="icon is-small is-left">
              <i className="fas fa-transgender-alt"></i>
            </span>
          </div>
        </div>

        <div className="field">
          <label className="label">Estado civil</label>
          <div className="control has-icons-left">
            <div className="select">
              <select
                name="civilState"
                ref={register}
                onChange={onDataChange}
              >
                {
                  segmentation.civilState.map(state => <option key={state}>{state}</option>)
                }
              </select>
            </div>
            <span className="icon is-small is-left">
              <i className="fas fa-ring"></i>
            </span>
          </div>
        </div>
        {botonera}
      </form>
    </div>
  )
}
