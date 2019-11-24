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

import PerfilRedesSocialesForm from '../../components/PerfilRedesSocialesForm'
import BackNext from '../../components/BackNext'

export function PerfilRedesSociales () {
  const dispatch = useDispatch()

  const {
    defaultValues,
    lateralActive,
    completion
  } = useSelector(({
    perfil: {
      twitter,
      facebook,
      instagram,
      youtube,
      linkedin,
      completion
    },
    ux: {
      lateralActive
    }
  }) => ({
    defaultValues: {
      twitter,
      facebook,
      instagram,
      youtube,
      linkedin
    },
    lateralActive,
    completion
  }))

  useUpdateCompletion(dispatch, 'Redes sociales', defaultValues)

  const onToggleLateral = toggleLateral(dispatch, lateralActive)
  const onDataChange = dataChange(dispatch)
  const percent = `${(100 * computePercent(completion)).toFixed()}%`
  items[0].label = `Editar Perfil - ${percent}`
  return (
    <React.Fragment>
      <Head>
        <title>Editar perfil {percent} - Redes Sociales </title>
      </Head>
      <Nav
        lateralActive={lateralActive}
        onToggleLateral={onToggleLateral}
        percent={percent}
      />
      <div className="container">
        <section className="columns">
          <Menu
            items={items}
            active="Redes sociales"
            lateralActive={lateralActive}
            onToggleLateral={onToggleLateral}
            completion={completion}
          />
          <section className="section column is-10">
            <h1 className="title is-5"> Redes sociales </h1>
            <PerfilRedesSocialesForm
              defaultValues={defaultValues}
              onDataChange={onDataChange}
              botonera={<BackNext items={items} active="Redes sociales" />}
            />
          </section>
        </section>
      </div>
    </React.Fragment>
  )
}

export default withRedux(PerfilRedesSociales)
