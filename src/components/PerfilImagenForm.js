import React from 'react'
import useForm from 'react-hook-form'
import { debounce } from 'lodash'

const onVideoChangeDebounce = debounce((value, onDataChange, setError) => {
  setError('video')
  const id = value.match(/(^|=|\/)([0-9A-Za-z_-]{11})(\/|&|$|\?|#)/)
  if (!id) {
    return setError('video', 'badurl', 'La url no parece válida')
  }
  onDataChange({
    target: {
      name: 'video',
      value
    }
  })
}, 100)

export default function PerfilImagenForm ({
  defaultValues = {},
  onDataChange,
  onLoadFile,
  botonera
}) {
  const { register, setError, errors } = useForm({
    defaultValues
  })

  function onVideoChange (event) {
    onVideoChangeDebounce(event.target.value, onDataChange, setError)
  }

  return (
    <div className="box is-narrow" >
      <form onSubmit={e => e.preventDefault()}>
        <div className="field">
          <label className="label">Cara</label>
          {
            defaultValues.face && (
              <figure className="image is-square">
                <img src={defaultValues.face}/>
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
          <label className="label">Video Presentación</label>
          <div className="control has-icons-left">
            <input
              className="input"
              name="video"
              type="text"
              placeholder="https://www.youtube.com/watch?v=..."
              ref={register}
              onChange={onVideoChange}
            />
            <span className="icon is-small is-left">
              <i className="fab fa-youtube"></i>
            </span>
          </div>
          {
            errors.video
              ? (
                <p className="help is-danger">
                  {errors.video.message}
                </p>
              )
              : (
                <p className="help">
                  Puedes publicarlo como <em>unlisted</em> para que no aparezca en los resultados de búsqueda de youtube.
                </p>
              )
          }
        </div>

        {botonera}
      </form>
    </div>
  )
}
