import React from 'react'
import { storiesOf } from '@storybook/react'

import Home from './pages/index'
import Productoras from './pages/productoras'
import PerfilContacto from './pages/perfil/contacto'
import PerfilSegmentation from './pages/perfil/segmentacion'

storiesOf('Pages', module)
  .addDecorator(story => (
    <>
      {story()}
      <img id="fondo" src="/plato.jpg" />
    </>
  ))
  .add('Home', () => <Home />)
  .add('Productoras', () => <Productoras />)
  .add('PerfilContacto', () => <PerfilContacto />)
  .add('PerfilSegmentation', () => <PerfilSegmentation />)
