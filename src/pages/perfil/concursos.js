import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Head from 'next/head'

import '../../styles/style.sass'
import { withRedux } from '../../lib/redux'
import { toggleLateral, concursosChecked } from '../../store'
import Menu from '../../components/Menu'
import Nav from '../../components/Nav'
import { items } from '../../config/menu'
import useUpdateCompletion, { computePercent } from '../../lib/completion'
import PerfilConcursosForm from '../../components/PerfilConcursosForm'
import BackNext from '../../components/BackNext'

export function PerfilConcursos () {
  const dispatch = useDispatch()

  const {
    defaultValues,
    lateralActive,
    completion
  } = useSelector(({
    perfil: {
      concursos,
      completion
    },
    ux: {
      lateralActive
    }
  }) => ({
    defaultValues: concursos,
    completion,
    lateralActive
  }))

  useUpdateCompletion(dispatch, 'Concursos', defaultValues)

  const onToggleLateral = toggleLateral(dispatch, lateralActive)
  const onCheckedChange = concursosChecked(dispatch)
  const percent = `${(100 * computePercent(completion)).toFixed()}%`
  items[0].label = `Editar Perfil - ${percent}`
  return (
    <React.Fragment>
      <Head>
        <title>Editar perfil {percent} - Concursos </title>
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
            active="Concursos"
            lateralActive={lateralActive}
            onToggleLateral={onToggleLateral}
            completion={completion}
          />
          <section className="section column is-10">
            <h1 className="title is-5"> Concursos </h1>
            <PerfilConcursosForm
              defaultValues={defaultValues}
              onCheckedChange={onCheckedChange}
              botonera={<BackNext items={items} active="Concursos" />}
            />
          </section>
        </section>
      </div>
    </React.Fragment>
  )
}

export default withRedux(PerfilConcursos)
