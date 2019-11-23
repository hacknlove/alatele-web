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
        label: 'Vista previa',
        url: '/panel/vista-previa',
        hidden: true
      }
    ]
  },
  {
    label: 'Panel de control',
    menu: [
      {
        label: 'Vista previa',
        url: '/panel/concursos',
        icon: 'address-card'
      },
      {
        label: 'Usuario',
        url: '/acciones',
        icon: 'user'
      }
    ]
  }
]
