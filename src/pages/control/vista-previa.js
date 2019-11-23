import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import '../../styles/style.sass'
import { withRedux } from '../../lib/redux'
import { toggleLateral } from '../../store'
import Menu from '../../components/Menu'
import Nav from '../../components/Nav'
import { items } from '../../config/menu'

import PanelVistaPrevia from '../../components/PanelVistaPrevia'

export function PerfilConcursos () {
  const { perfil } = useSelector(({ perfil }) => ({ perfil }))


  return (
    <React.Fragment>
      <Nav
        lateralActive={lateralActive}
        onToggleLateral={onToggleLateral}
      />
      <div className="container">
        <section className="columns">
          <Menu
            items={items}
            active="Concursos"
            lateralActive={lateralActive}
            onToggleLateral={onToggleLateral}
            completion={completion}
          />
          <section className="section column is-10">
            <h1 className="title is-5"> Concursos </h1>
            <PanelVistaPrevia perfil={perfil} />
          </section>
        </section>
      </div>
    </React.Fragment>
  )
}

export default withRedux(PerfilConcursos)
