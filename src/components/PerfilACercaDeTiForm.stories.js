import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import PerfilACercaDeTiForm from './PerfilACercaDeTiForm'

const actions = {
  onCancel: action('onCancel'),
  onLogin: action('onSubmit')
}

storiesOf('PerfilACercaDeTi', module)
  .add('default', () => <PerfilACercaDeTiForm {...actions} />)
