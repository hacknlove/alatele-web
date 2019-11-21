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
              <strong>Contrata un plan personalizado:</strong><br/>
              Un gestor de cuentas definirá contigo un plan a tu medida.
            </li>
            <li>
              <strong>Comienza con una búsqueda simple (o avanzada)</strong><br/>
              El primer paso de la selección no puede ser más rápido, cómodo y sencillo.
            </li>
            <li>
              <strong>Explora los perfiles, selecciona, descarta y añade etiquetas:</strong><br/>
              Las etiquetas que tú añades son sólo para ti, y te ayudarán en futuras búsquedas.
            </li>
            <li>
              <strong>Imprime o exporta la selección:</strong><br/>
              Podrás continuar el proceso con las herramientas que ya conoces y usas.
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
