import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, object } from '@storybook/addon-knobs'

import PanelVistaPreviaBuscador from './PanelVistaPreviaBuscador'

const actions = {
  onCancel: action('onCancel'),
  onLogin: action('onSubmit')
}

const perfil = {
  concursos: {
    culturaGeneral: true,
    culturaAvanzada: true,
    inteligencia: false,
    realitiesConvivencia: false,
    realitiesOtros: false,
    talento: false,
    humor: true,
    destreza: false
  },
  completion: {
    Contacto: 1,
    Imagen: 0.3333333333333333,
    Segmentación: 1,
    Trasfondo: 0.25,
    'Redes sociales': 1,
    Concursos: 0.375
  },
  email: 'user@example.com',
  name: 'Fulanito de tal',
  phone: '612 345 678',
  video: 'https://youtu.be/UkMFNx3WRbM',
  face: 'https://www.thispersondoesnotexist.com/image',
  birthday: '1979-09-21',
  state: 'Asturias',
  education: 'Postgrado',
  sector: 'ONGs, activismo y voluntariado',
  sex: 'Hombre',
  civilState: 'Soltero',
  presentation: 'Lore ipsum tralaricus vindicatus, consectetur adipiscing elit. Proin ornare magna eros, eu pellentesque tortor vestibulum ut. Maecenas non massa sem. Etiam finibus odio quis feugiat facilisis.',
  facebook: 'facebook',
  twitter: 'twitter',
  instagram: 'instagram',
  youtube: 'youtube',
  linkedin: 'linkedin'
}

storiesOf('PanelVistaPreviaBuscador', module)
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <section className="section">
      <div className="container">
        {story()}
      </div>
    </section>
  ))
  .add('default', () => (
    <PanelVistaPreviaBuscador
      perfil={object('perfil', perfil)}
      {...actions}
    />
  ))
