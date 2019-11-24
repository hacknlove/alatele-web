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

import PerfilTrasfondoForm from '../../components/PerfilTrasfondoForm'
import BackNext from '../../components/BackNext'

export function PerfilTrasfondo () {
  const dispatch = useDispatch()

  const {
    defaultValues,
    lateralActive,
    completion
  } = useSelector(({
    perfil: {
      presentation,
      anecdote,
      dreams,
      free,
      completion
    },
    ux: {
      lateralActive
    }
  }) => ({
    defaultValues: {
      presentation,
      anecdote,
      dreams,
      free
    },
    lateralActive,
    completion
  }))

  useUpdateCompletion(dispatch, 'Trasfondo', defaultValues)

  const onToggleLateral = toggleLateral(dispatch, lateralActive)
  const onDataChange = dataChange(dispatch)

  const percent = `${(100 * computePercent(completion)).toFixed()}%`
  items[0].label = `Editar Perfil - ${percent}`
  return (
    <React.Fragment>
      <Head>
        <title>Editar perfil {percent} - Trasfondo </title>
      </Head>
      <Nav
        lateralActive={lateralActive}
        onToggleLateral={onToggleLateral}
      />
      <div className="container">
        <section className="columns">
          <Menu
            items={items}
            active={'Trasfondo'}
            lateralActive={lateralActive}
            onToggleLateral={onToggleLateral}
            completion={completion}
          />
          <section className="section column is-10">
            <h1 className="title is-5"> Trasfondo </h1>
            <PerfilTrasfondoForm
              defaultValues={defaultValues}
              onDataChange={onDataChange}
              botonera={<BackNext items={items} active="Trasfondo" />}
            />
          </section>
        </section>
      </div>
    </React.Fragment>
  )
}

export default withRedux(PerfilTrasfondo)
