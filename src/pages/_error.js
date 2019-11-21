import React from 'react'

import Nav from '../components/Nav'
import '../styles/style.sass'
import Link from 'next/link'

export default function CustomError ({ statusCode }) {
  return (
    <React.Fragment>
      <Nav />
      <section className="section">
        <div className="container" >
          <div className="is-narrow">
            {
              statusCode === 404 ? (
                <>
                  <h1 className="title">404</h1>
                  <h2 className="subtitle">Página no encontrada</h2>
                  <Link href="/">
                    Ir a la portada
                  </Link>
                </>
              ) : (
                'Error indeterminado'
              )
            }
          </div>
        </div>
      </section>
    </React.Fragment>
  )
}

CustomError.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return { statusCode }
}
