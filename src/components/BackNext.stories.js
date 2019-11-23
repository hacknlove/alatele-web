import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, object, text } from '@storybook/addon-knobs'

import { items } from '../config/menu'
import BackNext, { BackNextComponent } from './BackNext'

storiesOf('BackNext', module)
  .addDecorator(withKnobs)
  .add('component', () => (
    <BackNextComponent
      prev={object('items', items[0].menu[1])}
      next={object('items', items[0].menu[3])}
      onPrefetch={action('onPrefetch')}
      onGoto={action('onGoto')}
      active
    />
  ))
  .add('connected', () => (
    <BackNext
      items={object('items', items[0].menu)}
      active={text('active', 'Imagen')}
    />
  ))
