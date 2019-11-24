import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Head from 'next/head'

import '../../styles/style.sass'
import { withRedux } from '../../lib/redux'
import { toggleLateral, dataChange } from '../../store'
import useUpdateCompletion, { computePercent } from '../../lib/completion'

import Menu from '../../components/Menu'
import Nav from '../../components/Nav'
import { items } from '../../config/menu'

import PerfilImagenForm from '../../components/PerfilImagenForm'
import CropImage from '../../components/CropImage'
import BackNext from '../../components/BackNext'

export function PerfilImagen () {
  const dispatch = useDispatch()

  const {
    defaultValues,
    lateralActive,
    completion
  } = useSelector(({
    perfil: {
      face,
      body,
      video,
      completion
    },
    ux: {
      lateralActive
    }
  }) => ({
    defaultValues: {
      face,
      body,
      video
    },
    lateralActive,
    completion
  }))

  useUpdateCompletion(dispatch, 'Imagen', defaultValues)

  const onToggleLateral = toggleLateral(dispatch, lateralActive)
  const onDataChange = dataChange(dispatch)

  const [cropimage, setcropimage] = useState()

  function onLoadFile ({ target: { files, name } }) {
    const url = URL.createObjectURL(files[0])
    setcropimage({
      url,
      aspect: name === 'face' ? 1 : 3 / 4,
      cropShape: name === 'face' ? 'round' : 'rect',
      onCancel () {
        setcropimage(null)
        URL.revokeObjectURL(url)
      },
      onOk (croppedImage) {
        setcropimage(null)
        URL.revokeObjectURL(url)
        onDataChange({
          target: {
            name: name,
            value: croppedImage
          }
        })
      }
    })
  }

  const percent = `${(100 * computePercent(completion)).toFixed()}%`
  items[0].label = `Editar Perfil - ${percent}`
  return (
    <React.Fragment>
      <Head>
        <title>Editar perfil {percent} - Imagen </title>
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
            active={'Imagen'}
            lateralActive={lateralActive}
            onToggleLateral={onToggleLateral}
            completion={completion}
          />
          <section className="section column is-10">
            <h1 className="title is-5"> Imagen</h1>
            <PerfilImagenForm
              defaultValues={defaultValues}
              onDataChange={onDataChange}
              onLoadFile={onLoadFile}
              botonera={<BackNext items={items} active="Imagen" />}
            />
          </section>
        </section>
      </div>
      <CropImage {...cropimage}
      />
    </React.Fragment>
  )
}

export default withRedux(PerfilImagen)
