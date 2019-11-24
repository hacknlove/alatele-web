import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import PerfilSegmentationForm from './PerfilSegmentationForm'

const actions = {
  onCancel: action('onCancel'),
  onLogin: action('onSubmit')
}

storiesOf('PerfilSegmentation', module)
  .add('default', () => <PerfilSegmentationForm {...actions} />)
