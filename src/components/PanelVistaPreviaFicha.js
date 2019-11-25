import React from 'react'
import { differenceInYears } from 'date-fns'

export default function vistaPrevia ({
  perfil: {
    face,
    name,
    phone,
    email,
    video,
    preferencias,
    presentation,
    birthday,
    facebook,
    twitter,
    instagram,
    linkedin,
    youtube,
    ...perfil
  },
  botonera
}) {
  const socialNetworks = {
    facebook,
    twitter,
    instagram,
    linkedin,
    youtube
  }

  const videoId = video && video.match(/(^|=|\/)([0-9A-Za-z_-]{11})(\/|&|$|\?|#)/)

  return (
    <div className="box is-fullscreen-in-mobile">
      <div className="profile-header">
        <div className="contact">
          {
            email && <div><span className="icon"><i className="fas fa-envelope"></i></span> {email}</div>
          }
          {
            phone && <div><span className="icon"><i className="fas fa-phone"></i></span> {phone}</div>
          }
        </div>
        <div className="socialNetworks">
          {
            Object.keys(socialNetworks).map(rs => socialNetworks[rs] && (
              <a href={perfil[rs]} target="_blank" rel="noopener noreferrer">
                <span className="icon is-small"><i className={`fab fa-${rs}`}></i></span>
              </a>
            ))
          }
        </div>
      </div>
      <div className="profile-basic">
        <img className="profile-image is-rounded" src={face} />
        <div>
          <h1 className="title">{name}</h1>
          {
            presentation && (
              <article className="message">
                <div className="message-body is-space-formated">
                  {presentation}
                </div>
              </article>
            )
          }
        </div>
      </div>
      <div className="field is-grouped is-grouped-multiline">
        {
          birthday && (
            <div className="control">
              <span className="tags has-addons">
                <span className="tag is-dark">Años</span>
                <span className="tag is-info">{differenceInYears(new Date(), new Date(birthday))}</span>
              </span>
            </div>
          )
        }
        {
          Object.keys(preferencias).map(key => preferencias[key] && (
            <div className="control">
              <span key={key} className="tags has-addons">
                <span className="tag is-dark">Preferencia</span>
                <span className="tag is-info">{key}</span>
              </span>
            </div>
          ))
        }
        {
          Object.keys(perfil).map(key => typeof perfil[key] === 'string' && (
            <div className="control">
              <span key={key} className="tags has-addons">
                <span className="tag is-dark">{key}</span>
                <span className="tag is-info">{perfil[key]}</span>
              </span>
            </div>
          ))
        }
      </div>
      {
        videoId && (
          <div className="video image is-16by9">
            <iframe
              src={`https://www.youtube.com/embed/${videoId[2]}`}
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen />
          </div>
        )
      }

    </div>
  )
}
