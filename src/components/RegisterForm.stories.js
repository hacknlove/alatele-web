import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import RegisterForm from './RegisterForm'

const actions = {
  onCancel: action('onCancel'),
  onSubmit: action('onSubmit')
}

storiesOf('RegisterForm', module)
  .addDecorator(story => (
    <section className="section">
      <div className="container">
        {story()}
      </div>
    </section>
  ))
  .add('default', () => <RegisterForm {...actions} />)
  .add('loading', () => <RegisterForm loading {...actions} />)
