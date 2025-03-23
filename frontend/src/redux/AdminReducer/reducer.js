
import * as Types from './actionTypes'

const inititalState = {
     loading: false,
     error:false,
     users: [],
     cars: [],
     booking:[]
}

export const reducer = (state = inititalState, { type, payload }) => {
     console.log("p",payload)
     switch (type) {
          case Types.ADMIN_LOADING:
               return { ...state, loading: true }
          case Types.ADMIN_ERROR:
               return { ...state, error: true }
          case Types.ADMIN_SUCCESS_USERS:
               return { ...state, loading: false, error: false, users: payload }
          case Types.ADMIN_SUCCESS_CARS:
               return { ...state, loading: false, error: false, cars: payload }
          case Types.ADMIN_SUCCESS_BOOKING:
               return { ...state, loading: false, error: false, booking: payload }
          case Types.ADMIN_UPDATE_CARS_SUCCESS:
               return { ...state, loading: false, error: false }
          case Types.ADMIN_DELETE_CARS_SUCCESS:
               return { ...state, loading: false, error: false }
          default:
               return state;
     }
}



