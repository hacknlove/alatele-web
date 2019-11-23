import React from 'react'
import { storiesOf } from '@storybook/react'

import Home from './index'
import Productoras from './productoras'
import PerfilContacto from './perfil/contacto'
import PerfilSegmentation from './perfil/segmentacion'

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
