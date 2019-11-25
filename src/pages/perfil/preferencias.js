import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Head from 'next/head'

import '../../styles/style.sass'
import { withRedux } from '../../lib/redux'
import { toggleLateral, preferenciasChecked } from '../../store'
import Menu from '../../components/Menu'
import Nav from '../../components/Nav'
import { items } from '../../config/menu'
import useUpdateCompletion, { computePercent } from '../../lib/completion'
import PerfilPreferenciasForm from '../../components/PerfilPreferenciasForm'
import BackNext from '../../components/BackNext'

export function PerfilPreferencias () {
  const dispatch = useDispatch()

  const {
    defaultValues,
    lateralActive,
    completion
  } = useSelector(({
    perfil: {
      preferencias,
      completion
    },
    ux: {
      lateralActive
    }
  }) => ({
    defaultValues: preferencias,
    completion,
    lateralActive
  }))

  useUpdateCompletion(dispatch, 'Preferencias', defaultValues)

  const onToggleLateral = toggleLateral(dispatch, lateralActive)
  const onCheckedChange = preferenciasChecked(dispatch)
  const percent = `${(100 * computePercent(completion)).toFixed()}%`
  items[0].label = `Editar Perfil - ${percent}`
  return (
    <React.Fragment>
      <Head>
        <title>Editar perfil {percent} - Preferencias </title>
      </Head>
      <Nav
        lateralActive={lateralActive}
        onToggleLateral={onToggleLateral}
        percent={percent}
      />
      <div className="container">
        <section className="has-lateral-menu">

          <Menu
            items={items}
            active="Preferencias"
            lateralActive={lateralActive}
            onToggleLateral={onToggleLateral}
            completion={completion}
          />
          <section className="section main">

            <h1 className="title is-5"> Preferencias </h1>
            <PerfilPreferenciasForm
              defaultValues={defaultValues}
              onCheckedChange={onCheckedChange}
              botonera={<BackNext items={items} active="Preferencias" />}
            />
          </section>
        </section>
      </div>
    </React.Fragment>
  )
}

export default withRedux(PerfilPreferencias)
