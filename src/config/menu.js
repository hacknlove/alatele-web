export const items = [
  {
    label: 'Editar Perfil',
    menu: [
      {
        label: 'Contacto',
        url: '/perfil/contacto'
      },
      {
        label: 'Imagen',
        url: '/perfil/imagen'
      },
      {
        label: 'A Cerca De Ti',
        url: '/perfil/a-cerca-de-ti'
      },
      {
        label: 'Redes sociales',
        url: '/perfil/redes-sociales'
      },
      {
        label: 'Datos personales',
        url: '/perfil/segmentacion'
      },
      {
        label: 'Preferencias',
        url: '/perfil/preferencias'
      },
      {
        button: 'Ver',
        url: '/control/vista-previa-buscador'
      }
    ]
  },
  {
    label: 'Panel de control',
    menu: [
      {
        url: '/perfil/preferencias'
      },
      {
        label: 'Ver en buscador',
        url: '/control/vista-previa-buscador',
        icon: 'list'
      },
      {
        label: 'Ver en ficha',
        url: '/control/vista-previa-ficha',
        icon: 'address-card'
      },
      {
        button: 'Editar',
        url: '/perfil/contacto'
      },
      {
        label: 'salir',
        url: '/',
        icon: 'sign-out-alt'
      }
    ]
  }
]
