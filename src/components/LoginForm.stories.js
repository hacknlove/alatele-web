import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import LoginForm from './LoginForm'

const actions = {
  onCancel: action('onCancel'),
  onLogin: action('onSubmit')
}

storiesOf('LoginForm', module)
  .add('hidden', () => <LoginForm {...actions} />)
  .add('visible', () => <LoginForm active {...actions} />)
  .add('emailSet', () => <LoginForm active defaultValues={{ email: 'user@example.com' }} {...actions} />)
  .add('loading', () => <LoginForm active loading {...actions} />)
