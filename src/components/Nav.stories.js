import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, object, text } from "@storybook/addon-knobs";

import { NavComponent } from './Nav'

const items = [
  {
    id: 'HOLA',
    label: 'Hola',
    url: '/hola'
  },
  {
    id: 'MUNDO',
    label: 'mundo',
    url: '/mundo'
  }
]

storiesOf('Nav', module)
  .addDecorator(withKnobs)
  .add('default', () => <NavComponent
    items={object('items', [...items])}
    active={text('active', 'HOLA')}
    onGoto={action('onGoto')}
    onPrefetch={action('onPrefetch')}
  />)
