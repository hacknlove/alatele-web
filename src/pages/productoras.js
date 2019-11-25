import React from 'react'
import Nav from '../components/Nav'
import ProductoraForm from '../components/ProductoraForm'
import '../styles/style.sass'

import { items } from '../config/nav'

export default function Home () {
  return (
    <React.Fragment>
      <Nav items={items} active="productoras"/>
      <section className="section">
        <div className="container" >
          <h1 className="title is-1">
            Selección de concursantes
          </h1>
          <h2 className="title is-4">
            Descubre candidatos en la primer plataforma de castings online
          </h2>
          <ol>
            <li>
              <strong>Crea búsquedas filtradas</strong><br/>
              Tendrás una interfaz limpia cómoda y rápida para trabajar eficazmente.
            </li>
            <li>
              <strong>Pre-selecciona candidatos</strong><br/>
               Crea y gestiona listas de candidatos pre-seleccionados
            </li>
            <li>
              <strong>Exporta tus listas de candidatos pre-seleccionados</strong><br/>
              Continua tu proceso de selección y casting con tus herramientas habituales
            </li>
          </ol>
        </div>
      </section>
      <section className="section">
        <div className="container" >
          <ProductoraForm/>
        </div>
      </section>
    </React.Fragment>
  )
}
