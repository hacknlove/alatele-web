import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import { PerfilTrasfondoFormComponent } from './PerfilTrasfondoForm'

const actions = {
  onCancel: action('onCancel'),
  onLogin: action('onSubmit')
}

storiesOf('PerfilTrasfondo', module)
  .add('default', () => <PerfilTrasfondoFormComponent {...actions} />)
