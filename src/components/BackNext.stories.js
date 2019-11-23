import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, object } from '@storybook/addon-knobs'

import BackNext from './BackNext'

storiesOf('BackNext', module)
  .addDecorator(withKnobs)
  .add('default', () => <BackNext buttons={object('buttons', [
    {
      label: 'Atrás',
      url: '/atras'
    },
    {
      label: 'Adelante',
      url: '/Adelante'
    }
  ])} />)
