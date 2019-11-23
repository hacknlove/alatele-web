import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { PerfilImagenFormComponent } from './PerfilImagenForm'

const actions = {
  onCancel: action('onCancel'),
  onLogin: action('onSubmit')
}

storiesOf('PerfilImagen', module)
  .add('default', () => <PerfilImagenFormComponent {...actions} />)
