import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import '../../styles/style.sass'
import { withRedux } from '../../lib/redux'
import { toggleLateral, dataChange } from '../../store'
import Menu from '../../components/Menu'
import Nav from '../../components/Nav'
import { items } from '../../config/menu'

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

  useEffect(() => {
    dispatch({
      type: 'SETCOMPLETION',
      name: 'Contacto',
      value: Object.values(defaultValues).every(value => value)
    })
  }, Object.values(defaultValues))

  const onToggleLateral = toggleLateral(dispatch, lateralActive)
  const onDataChange = dataChange(dispatch)

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
            active="Contacto"
            lateralActive={lateralActive}
            onToggleLateral={onToggleLateral}
            completion={completion}
          />
          <section className="section column is-10">
            <h1 className="title is-5"> Datos de contacto </h1>
            <PerfilContactoForm
              defaultValues={defaultValues}
              onDataChange={onDataChange}
              botonera={<BackNext items={items[0].menu} active="Contacto" />}
            />
          </section>
        </section>
      </div>
    </React.Fragment>
  )
}

export default withRedux(PerfilContacto)
