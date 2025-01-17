import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

const initialState = {
  ux: {

  },
  perfil: {
    preferencias: {
      culturaGeneral: false,
      culturaAvanzada: false,
      inteligencia: false,
      realitiesConvivencia: false,
      realitiesOtros: false,
      talento: false,
      humor: false,
      destreza: false
    },
    completion: {
      Contacto: 0,
      Imagen: 0,
      'Datos personales': 0,
      'A Cerca De Ti': 0,
      'Redes sociales': 0,
      Preferencias: 0
    }
  }
}

function reducer (state = initialState, action) {
  switch (action.type) {
    case 'SET':
      return {
        ...state,
        [action.where]: {
          ...state[action.where],
          [action.name]: action.value
        }
      }
    case 'SETSOME':
      return {
        ...state,
        [action.where]: {
          ...state[action.where],
          ...action.data
        }
      }
    case 'SETCONCURSO':
      return {
        ...state,
        perfil: {
          ...state.perfil,
          preferencias: {
            ...state.perfil.preferencias,
            [action.name]: action.checked
          }
        }
      }
    case 'SETCOMPLETION':
      return {
        ...state,
        perfil: {
          ...state.perfil,
          completion: {
            ...state.perfil.completion,
            [action.name]: action.value
          }
        }

      }
    default:
      return state
  }
}

export function initializeStore (preloadedState = initialState) {
  return createStore(
    reducer,
    preloadedState,
    composeWithDevTools(applyMiddleware())
  )
}

export function toggleLateral (dispatch, lateralActive) {
  return () => dispatch({
    type: 'SET',
    where: 'ux',
    name: 'lateralActive',
    value: !lateralActive
  })
}

export function dataChange (dispatch, where = 'perfil') {
  return ({
    target: {
      name,
      value
    }
  }) => dispatch({
    type: 'SET',
    where,
    name,
    value
  })
}

export function preferenciasChecked (dispatch) {
  return ({
    target: {
      name,
      checked
    }
  }) => dispatch({
    type: 'SETCONCURSO',
    name,
    checked
  })
}
