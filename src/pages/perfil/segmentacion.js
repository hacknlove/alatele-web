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

import { segmentation } from '../../config/segmentation'
import PerfilSegmentationForm from '../../components/PerfilSegmentationForm'
import BackNext from '../../components/BackNext'

export function PerfilSegmentation () {
  const dispatch = useDispatch()

  const {
    defaultValues,
    lateralActive,
    completion
  } = useSelector(({
    perfil: {
      birthday,
      state,
      education,
      sector,
      sex,
      civilState,
      completion
    },
    ux: {
      lateralActive
    }
  }) => ({
    defaultValues: {
      birthday,
      state,
      education,
      sector,
      sex,
      civilState
    },
    lateralActive,
    completion
  }))

  useUpdateCompletion(dispatch, 'Segmentación', defaultValues)

  const onToggleLateral = toggleLateral(dispatch, lateralActive)
  const onDataChange = dataChange(dispatch)
  const percent = `${(100 * computePercent(completion)).toFixed()}%`
  items[0].label = `Editar Perfil - ${percent}`
  return (
    <React.Fragment>
      <Head>
        <title>Editar perfil {percent} - Segmentación </title>
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
            active={'Segmentación'}
            lateralActive={lateralActive}
            onToggleLateral={onToggleLateral}
            completion={completion}
          />
          <section className="section column is-10">
            <h1 className="title is-5"> Segmentación </h1>
            <PerfilSegmentationForm
              segmentation={segmentation}
              defaultValues={defaultValues}
              onDataChange={onDataChange}
              botonera={<BackNext items={items} active="Segmentación" />}
            />
          </section>
        </section>
      </div>
    </React.Fragment>
  )
}

export default withRedux(PerfilSegmentation)
