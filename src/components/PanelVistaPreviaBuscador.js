import React from 'react'
import { differenceInYears } from 'date-fns'

function Item ({
  perfil: {
    face,
    name,
    presentation,
    birthday,
    id,
    ...perfil
  }
}) {
  return (
    <article className="media">
      <figure className="media-left is-hidden-mobile with-buttons">
        <p className="image is-64x64">
          <img src={face} />
        </p>
        <div className="field">
          <button className="button is-small is-fullwidth is-primary">
            <span className="icon is-small">
              <i className="fas fa-plus" />
            </span>
          </button>
        </div>
      </figure>
      <div className="media-content">
        <div className="content">
          <div>
            <a>
              <strong>{name} </strong>
            </a>
            {
              birthday && <small> - {differenceInYears(new Date(), new Date(birthday))} años</small>
            }
            <br />
            <div className="has-3-lines">
              {presentation}
            </div>
          </div>
        </div>
        <nav className="level is-mobile">
          <div className="level-left">
            {
              ['facebook', 'twitter', 'instagram', 'linkedin', 'youtube'].map(rrss => perfil[rrss] && (
                <a href={perfil[rrss]} target="_blank" rel="noopener noreferrer" className="level-item">
                  <span className="icon is-small"><i className={`fab fa-${rrss}`}></i></span>
                </a>
              ))
            }
          </div>
          <div className="level-left is-hidden-tablet">
            <button className="button is-small is-primary">
              <span className="icon is-small">
                <i className="fas fa-plus" />
              </span>
            </button>
          </div>
        </nav>
      </div>
    </article>
  )
}

function Spans ({ min, max }) {
  let n = min + Math.floor(Math.random() * (max - min))
  const spans = []
  while (n) {
    spans.push(<span key={`span${n}`}>{' '.repeat(Math.random() * 8 + 1)}</span>)
    spans.push(<wbr key={`wbr${n--}`} />)
  }
  return (
    <React.Fragment>
      {spans}
    </React.Fragment>
  )
}

function Dummy () {
  return (
    <article className="media is-dummy">
      <figure className="media-left is-hidden-mobile with-buttons">
        <p className="image is-64x64">
          <img src={Math.random() < 0.5 ? '/chico1.jpg' : '/chica1.jpg'} />
        </p>
        <div className="field">
          <button className="button is-small is-fullwidth">
            <span className="icon is-small">
              <i className="fas fa-plus" />
            </span>
          </button>
        </div>
      </figure>
      <div className="media-content">
        <div className="content">
          <div>
            <strong><Spans min={2} max={4} /></strong>
            <small> <Spans min={0} max={2} /></small>
            <br />
            <div className="has-3-lines">
              <Spans min={10} max={50} />
            </div>
          </div>
        </div>
        <nav className="level is-mobile">
          <div className="level-left">
            {
              ['facebook', 'twitter', 'instagram', 'linkedin', 'youtube'].map(rrss => Math.random() < 0.5 && (
                <a key={rrss} className="level-item">
                  <span className="icon is-small"><i className={`fab fa-${rrss}`}></i></span>
                </a>
              ))
            }
          </div>
          <div className="level-left is-hidden-tablet">
            <button className="button is-small">
              <span className="icon is-small">
                <i className="fas fa-plus" />
              </span>
            </button>
          </div>
        </nav>
      </div>
    </article>
  )
}

export default function vistaPrevia ({ perfil, botonera }) {
  return (
    <div className="box is-fullscreen-in-mobile">
      <hr/>
      <Dummy />
      <Item perfil={perfil} />
      <Dummy />
      <hr/>
      {botonera}
    </div>
  )
}
