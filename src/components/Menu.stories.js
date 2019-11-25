import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, object, text } from '@storybook/addon-knobs'

import Menu, { MenuComponent } from './Menu'

import { items } from '../config/menu'

const completion = {
  Contacto: 0,
  Imagen: 0,
  'Datos personales': 0,
  'A cerca de ti': 0,
  'Redes sociales': 0,
  Preferencias: 0
}

storiesOf('Menu', module)
  .addDecorator(withKnobs)
  .add('component', () => (
    <MenuComponent
      percent={object('percent', {
        'Editar Perfil': 0.5
      })}
      completion={object('completion', completion)}
      active={text('active', items[0].menu[0].label)}
      items={object('items', [...items])}
      onGoto={action('onGoto')}
      onPrefetch={action('onPrefetch')}
    />
  ))
  .add('connected', () => (
    <Menu
      completion={object('completion', completion)}
      active={text('active', items[0].menu[0].label)}
      items={object('items', [...items])}
    />
  ))
