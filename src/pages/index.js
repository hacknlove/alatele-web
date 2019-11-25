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
    router && router.prefetch('/perfil/contacto')
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
              <strong>Regístrate en ALATELE</strong><br/>
              Es cómodo, gratis y sencillo.
            </li>
            <li>
              <strong>Completa tu perfil</strong><br/>
              Ningún campo es obligatorio, pero todos son importantes.
            </li>
            <li>
              <strong>Espera a que te llamen</strong><br/>
              Los responsables de casting buscan concursantes en nuestra base de datos.
            </li>
            <li>
              <strong>Pasa los procesos de selección</strong><br/>
              Tal vez te convoquen a un casting presencial, tal vez sea una llamada de teléfono.<br />
            </li>
            <li>
              <strong>Sé tú mismo, y...</strong><br />
               Mucha suerte.
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
