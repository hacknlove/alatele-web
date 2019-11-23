import React from 'react'
import useForm from 'react-hook-form'

export default function PerfilImagenForm ({
  defaultValues = {},
  onDataChange,
  onLoadFile,
  botonera
}) {
  const { register } = useForm({
    defaultValues
  })
  return (
    <div className="box is-narrow" >
      <form onSubmit={e => e.preventDefault()}>
        <div className="field">
          <label className="label">Videopresentacion</label>
          <div className="control has-icons-left">
            <input
              className="input"
              name="video"
              type="text"
              placeholder="https://www.youtube.com/watch?v=..."
              ref={register}
              onBlur={onDataChange}
            />
            <span className="icon is-small is-left">
              <i className="fab fa-youtube"></i>
            </span>
          </div>
          <p className="help">
            Puedes publicarlo como <em>unlisted</em> para que no aparezca en los resultados de búsqueda de youtube.
          </p>
        </div>

        <div className="field">
          <label className="label">Cara</label>
          {
            defaultValues.face && (
              <figure className="image is-square">
                <img className="is-rounded" src={defaultValues.face}/>
              </figure>
            )
          }
          <div className="file">
            <label className="file-label">
              <input
                className="file-input"
                type="file"
                name="face"
                onChange={onLoadFile}
              />
              <span className="file-cta">
                <span className="file-icon">
                  <i className="fas fa-upload"></i>
                </span>
                <span className="file-label">
                  Choose a file…
                </span>
              </span>
            </label>
          </div>
        </div>

        <div className="field">
          <label className="label">Cuerpo</label>
          {
            defaultValues.body && (
              <figure className="image is-3by4">
                <img src={defaultValues.body}/>
              </figure>
            )
          }
          <div className="file">
            <label className="file-label">
              <input
                className="file-input"
                type="file"
                name="body"
                onChange={onLoadFile}
              />
              <span className="file-cta">
                <span className="file-icon">
                  <i className="fas fa-upload"></i>
                </span>
                <span className="file-label">
                  Choose a file…
                </span>
              </span>
            </label>
          </div>
        </div>

        {botonera}
      </form>
    </div>
  )
}
