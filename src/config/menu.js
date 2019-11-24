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
        label: 'Segmentación',
        url: '/perfil/segmentacion'
      },
      {
        label: 'Trasfondo',
        url: '/perfil/trasfondo'
      },
      {
        label: 'Redes sociales',
        url: '/perfil/redes-sociales'
      },
      {
        label: 'Concursos',
        url: '/perfil/concursos'
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
        url: '/perfil/concursos'
      },
      {
        label: 'Ver en buscador',
        url: '/control/vista-previa-buscador',
        icon: 'address-card'
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
        label: 'Usuario',
        url: '/acciones',
        icon: 'user'
      }
    ]
  }
]
