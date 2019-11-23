import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, object, text, number } from '@storybook/addon-knobs'

import { MenuComponent } from './Menu'

import { items } from '../config/menu'

storiesOf('Menu', module)
  .addDecorator(withKnobs)
  .add('default', () => <MenuComponent
    percent={number('percent', '5')}
    active={text('active', items[0].menu[0].label)}
    items={object('items', [...items])}
    onGoto={action('onGoto')}
    onPrefetch={action('onPrefetch')}
  />)
  .add('done', () => <MenuComponent
    percent={number('percent', '100')}
    active={text('active', items[0].menu[0].label)}
    items={object('items', [{
      ...items[0],
      menu: items[0].menu.map((link) => ({ ...link, done: true }))
    }, items[1]])}
    onGoto={action('onGoto')}
    onPrefetch={action('onPrefetch')}
  />)
