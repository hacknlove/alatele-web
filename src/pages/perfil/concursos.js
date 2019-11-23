import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import '../../styles/style.sass'
import { withRedux } from '../../lib/redux'
import { toggleLateral, concursosChecked } from '../../store'
import Menu from '../../components/Menu'
import Nav from '../../components/Nav'
import { items } from '../../config/menu'

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

  useEffect(() => {
    dispatch({
      type: 'SETCOMPLETION',
      name: 'Concursos',
      value: defaultValues && Object.values(defaultValues).some(value => value)
    })
  }, [defaultValues])

  const onToggleLateral = toggleLateral(dispatch, lateralActive)
  const onCheckedChange = concursosChecked(dispatch)

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
            <PerfilConcursosForm
              defaultValues={defaultValues}
              onCheckedChange={onCheckedChange}
              botonera={<BackNext items={items[0].menu} active="Concursos" />}
            />
          </section>
        </section>
      </div>
    </React.Fragment>
  )
}

export default withRedux(PerfilConcursos)
