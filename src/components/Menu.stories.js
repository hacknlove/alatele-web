import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, object, text } from "@storybook/addon-knobs";

import { MenuComponent } from './Menu'

import { items } from '../config/menu'

storiesOf('Menu', module)
  .addDecorator(withKnobs)
  .add('default', () => <MenuComponent
    items={object('items', [...items])}
    active={text('active', items[0].menu[0].label)}
    onGoto={action('onGoto')}
    onPrefetch={action('onPrefetch')}
  />)
