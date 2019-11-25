import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, object } from '@storybook/addon-knobs'

import PanelVistaPreviaFicha from './PanelVistaPreviaFicha'

const actions = {
  onCancel: action('onCancel'),
  onLogin: action('onSubmit')
}

const perfil = {
  preferencias: {
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
    'Datos personales': 1,
    'A cerca de ti': 0.25,
    'Redes sociales': 1,
    Preferencias: 0.375
  },
  email: 'user@example.com',
  name: 'Fulanito de tal',
  phone: '612 345 678',
  video: 'https://www.youtube.com/embed/7FG7nTUYowQ',
  face: 'https://www.thispersondoesnotexist.com/image',
  birthday: '1979-09-21',
  state: 'Asturias',
  education: 'Postgrado',
  sector: 'ONGs, activismo y voluntariado',
  sex: 'Hombre',
  civilState: 'Soltero',
  presentation: `
  En un lugar de la Mancha, de cuyo nombre no quiero acordarme, no ha mucho tiempo que vivía un hidalgo de los de lanza en astillero, adarga antigua, rocín flaco y galgo corredor. Una olla de algo más vaca que carnero, salpicón las más noches, duelos y quebrantos los sábados, lantejas los viernes, algún palomino de añadidura los domingos, consumían las tres partes de su hacienda.

  El resto della concluían sayo de velarte, calzas de velludo para las fiestas, con sus pantuflos de lo mesmo, y los días de entresemana se honraba con su vellorí de lo más fino. Tenía en su casa una ama que pasaba de los cuarenta, y una sobrina que no llegaba a los veinte, y un mozo de campo y plaza, que así ensillaba el rocín como tomaba la podadera.

  Frisaba la edad de nuestro hidalgo con los cincuenta años; era de complexión recia, seco de carnes, enjuto de rostro, gran madrugador y amigo de la caza.

  Quieren decir que tenía el sobrenombre de Quijada, o Quesada, que en esto hay alguna diferencia en los autores que de este caso escriben; aunque por conjeturas verosímiles se deja entender que se llamaba Quijana.

  Pero esto importa poco a nuestro cuento: basta que en la narración dél no se salga un punto de la verdad.`,
  facebook: 'facebook',
  twitter: 'twitter',
  instagram: 'instagram',
  youtube: 'youtube',
  linkedin: 'linkedin'
}

storiesOf('PanelVistaPreviaFicha', module)
  .addDecorator(withKnobs)
  .addDecorator(story => (
    <section className="section">
      <div className="container">
        {story()}
      </div>
    </section>
  ))
  .add('default', () => (
    <PanelVistaPreviaFicha
      perfil={object('perfil', perfil)}
      {...actions}
    />
  ))
