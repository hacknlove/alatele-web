import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'

import Nav from '../components/Nav'
import RegisterForm from '../components/RegisterForm'
import '../styles/style.sass'

import { items } from '../config/nav'
import { withRedux } from '../lib/redux'

export function Home () {
  const router = useRouter()
  const dispatch = useDispatch()

  useEffect(() => {
    router.prefetch('/perfil/contacto')
  }, [])

  function onRegister (data) {
    dispatch({
      type: 'SET',
      where: 'perfil',
      name: 'email',
      value: data.email
    })
    router.push('/perfil/contacto')
  }

  return (
    <React.Fragment>
      <Nav items={items} active={'portada'}/>
      <section className="section">
        <div className="container" >
          <h1 className="title is-1">
            ¿Quieres ir a la tele?
          </h1>
          <h2 className="title is-4">
            Únete a la primer plataforma de castings online
          </h2>
          <ol>
            <li>
              <strong>Crea un perfil en ALATELE:</strong><br/>
              Así las responsables del casting de tus concursos favoritos podrán encontrarte y seleccionarte.
            </li>
            <li>
              <strong>Cuéntanos tus gustos, anécdotas, deseos, sueños...</strong><br/>
              Despierta su curiosidad, hazles reír, emociónalas, haz que quieran conocerte.
            </li>
            <li>
              <strong>Completa tu perfil con fotos y videos:</strong><br/>
              No se trata de deslumbrar, sino de encajar y tener química, y para eso nada mejor que ser tú.
            </li>
            <li>
              <strong>Incluye enlaces a tus redes sociales:</strong><br/>
              Multiplicarás tus oportunidades de ser seleccionado.
            </li>
          </ol>
        </div>
      </section>
      <section className="section">
        <div className="container" >
          <RegisterForm onRegister={onRegister} onLogin={onRegister} />
        </div>
      </section>
    </React.Fragment>
  )
}

export default withRedux(Home)
