import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import '../../styles/style.sass'
import { withRedux } from '../../lib/redux'
import { toggleLateral } from '../../store'
import Menu from '../../components/Menu'
import Nav from '../../components/Nav'
import { items } from '../../config/menu'

import PanelVistaPreviaBuscador from '../../components/PanelVistaPreviaBuscador'
import BackNext from '../../components/BackNext'

export function PerfilConcursos () {
  const dispatch = useDispatch()

  const {
    perfil,
    lateralActive
  } = useSelector(({
    perfil,
    ux: {
      lateralActive
    }
  }) => ({
    perfil,
    lateralActive
  }))

  const onToggleLateral = toggleLateral(dispatch, lateralActive)

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
            active="Ver en buscador"
            lateralActive={lateralActive}
            onToggleLateral={onToggleLateral}
            completion={perfil.completion}
          />
          <section className="section column is-10">
            <h1 className="title is-5"> Ver en buscador </h1>
            <PanelVistaPreviaBuscador
              perfil={perfil}
              botonera={<BackNext items={items} active="Ver en buscador" />}
            />
          </section>
        </section>
      </div>
    </React.Fragment>
  )
}

export default withRedux(PerfilConcursos)
