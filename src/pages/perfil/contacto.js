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

import PerfilContactoForm from '../../components/PerfilContactoForm'
import BackNext from '../../components/BackNext'

export function PerfilContacto () {
  const dispatch = useDispatch()

  const {
    defaultValues,
    lateralActive,
    completion
  } = useSelector(({
    perfil: {
      email,
      name,
      phone,
      completion
    },
    ux: {
      lateralActive
    }
  }) => ({
    defaultValues: {
      email,
      name,
      phone
    },
    lateralActive,
    completion
  }))

  useUpdateCompletion(dispatch, 'Contacto', defaultValues)

  const onToggleLateral = toggleLateral(dispatch, lateralActive)
  const onDataChange = dataChange(dispatch)
  const percent = `${(100 * computePercent(completion)).toFixed()}%`
  items[0].label = `Editar Perfil - ${percent}`
  return (
    <React.Fragment>
      <Head>
        <title>Editar perfil {percent} - Contacto </title>
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
            active="Contacto"
            lateralActive={lateralActive}
            onToggleLateral={onToggleLateral}
            completion={completion}
          />
          <section className="section main">

            <h1 className="title is-5"> Datos de contacto </h1>
            <PerfilContactoForm
              defaultValues={defaultValues}
              onDataChange={onDataChange}
              botonera={<BackNext items={items} active="Contacto" />}
            />
          </section>
        </section>
      </div>
    </React.Fragment>
  )
}

export default withRedux(PerfilContacto)
