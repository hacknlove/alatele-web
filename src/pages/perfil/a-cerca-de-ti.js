import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Head from 'next/head'

import '../../styles/style.sass'
import { withRedux } from '../../lib/redux'
import { toggleLateral, dataChange } from '../../store'

import Menu from '../../components/Menu'
import Nav from '../../components/Nav'
import { items } from '../../config/menu'
import useUpdateCompletion, { computePercent } from '../../lib/completion'

import PerfilACercaDeTiForm from '../../components/PerfilACercaDeTiForm'
import BackNext from '../../components/BackNext'

export function PerfilACercaDeTi () {
  const dispatch = useDispatch()

  const {
    defaultValues,
    lateralActive,
    completion
  } = useSelector(({
    perfil: {
      presentation,
      completion
    },
    ux: {
      lateralActive
    }
  }) => ({
    defaultValues: {
      presentation
    },
    lateralActive,
    completion
  }))

  useUpdateCompletion(dispatch, 'A Cerca De Ti', defaultValues)

  const onToggleLateral = toggleLateral(dispatch, lateralActive)
  const onDataChange = dataChange(dispatch)

  const percent = `${(100 * computePercent(completion)).toFixed()}%`
  items[0].label = `Editar Perfil - ${percent}`
  return (
    <React.Fragment>
      <Head>
        <title>Editar perfil {percent} - A Cerca De Ti </title>
      </Head>
      <Nav
        lateralActive={lateralActive}
        onToggleLateral={onToggleLateral}
      />
      <div className="container">
        <section className="has-lateral-menu">

          <Menu
            items={items}
            active={'A Cerca De Ti'}
            lateralActive={lateralActive}
            onToggleLateral={onToggleLateral}
            completion={completion}
          />
          <section className="section main">

            <h1 className="title is-5"> A Cerca De Ti </h1>
            <PerfilACercaDeTiForm
              defaultValues={defaultValues}
              onDataChange={onDataChange}
              botonera={<BackNext items={items} active="A Cerca De Ti" />}
            />
          </section>
        </section>
      </div>
    </React.Fragment>
  )
}

export default withRedux(PerfilACercaDeTi)
