import React from 'react'
import useForm from 'react-hook-form'

export default function PerfilRedesSocialesForm ({
  onDataChange,
  defaultValues = {},
  botonera
}) {
  const { register } = useForm({ defaultValues })

  return (
    <div className="box is-narrow" >
      <form onSubmit={e => e.preventDefault()}>
        <div className="field">
          <label className="label">Facebook</label>
          <div className="control has-icons-left">
            <input
              className="input"
              name="facebook"
              type="text"
              placeholder="https://www.facebook.com/perfil"
              ref={register}
              onBlur={onDataChange}
            />
            <span className="icon is-small is-left">
              <i className="fab fa-facebook"></i>
            </span>
          </div>
        </div>

        <div className="field">
          <label className="label">Twitter</label>
          <div className="control has-icons-left">
            <input
              className="input"
              name="twitter"
              type="text"
              placeholder="https://twitter.com/perfil"
              ref={register}
              onBlur={onDataChange}
            />
            <span className="icon is-small is-left">
              <i className="fab fa-twitter"></i>
            </span>
          </div>
        </div>

        <div className="field">
          <label className="label">Instagram</label>
          <div className="control has-icons-left">
            <input
              className="input"
              name="instagram"
              type="text"
              placeholder="https://www.instagram.com/perfil/"
              ref={register}
              onBlur={onDataChange}
            />
            <span className="icon is-small is-left">
              <i className="fab fa-instagram"></i>
            </span>
          </div>
        </div>

        <div className="field">
          <label className="label">youtube</label>
          <div className="control has-icons-left">
            <input
              className="input"
              name="youtube"
              type="text"
              placeholder="https://www.youtube.com/user/perfil"
              ref={register}
              onBlur={onDataChange}
            />
            <span className="icon is-small is-left">
              <i className="fab fa-youtube"></i>
            </span>
          </div>
        </div>

        <div className="field">
          <label className="label">Linkedin</label>
          <div className="control has-icons-left">
            <input
              className="input"
              name="linkedin"
              type="text"
              placeholder="https://www.linkedin.com/in/perfil/"
              ref={register}
              onBlur={onDataChange}
            />
            <span className="icon is-small is-left">
              <i className="fab fa-linkedin"></i>
            </span>
          </div>
        </div>

        {botonera}
      </form>
    </div>
  )
}
