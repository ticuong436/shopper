import reduxToolkit from "../../core/reduxToolkit"
import Auth from "../../service/auth"
import { ERROR, LOGIN, LOGOUT, REGISTER, UPDATE } from "../type"
let initState = {
    login: JSON.parse(localStorage.getItem('login')),
    loginError: '',
    statusRegister: '',
    update: JSON.parse(localStorage.getItem('token'))
}
export default function authReducer(state = initState, action) {
    switch (action.type) {
        case LOGIN:

            localStorage.setItem('login', JSON.stringify(action.payload))
            return {
                ...state,
                login: action.payload
            }

        case LOGOUT:
            localStorage.setItem('login', false)

            return {
                ...state,
                login: false
            }
        case ERROR:

            return {
                ...state,
                loginError: action.payload

            }
        case REGISTER:

            return {
                ...state,
                statusRegister: action.payload
            }
        case UPDATE:
            return {
                ...state,
                update: action.payload
            }
        default:
            return state;

    }
}

// let { action, TYPE, reducer } = reduxToolkit({
//     initialState: initState,
//     name: 'auth',

//     reducers: {
//         login: (state, action) => {
//             localStorage.setItem('login', JSON.stringify(action.payload))
//             return {
//                 ...state,
//                     : action.payload
//             }
//         },
//         logout: (state, action) => {
//             localStorage.setItem('login', false)
//             return {
//                 ...state,
//                 login: false
//             }
//         },
//         error: (state, action) => {
//             return {
//                 ...state,
//                 loginError: action.payload
//             }
//         },
//         register: (state, action) => {
//             return {
//                 ...state,
//                 statusRegister: action.payload
//             }
//         },
//         update: (state, actuon) => {
//             return {
//                 ...state,
//                 update: action.payload
//             }
//         }
//     }
// })
// export default reducer



// export const { error } = action
// export const AUTH_TYPE = TYPE

// export function loginAction(data) {
//     return async (dispath) => {
//         let res = await Auth.login(data)
//         if (res.data) {
//             dispath({
//                 type: LOGIN,
//                 // type: AUTH_TYPE.login,
//                 payload: res.data
//             })
//         } else if (res.error) {
//             dispath({
//                 type: ERROR,
//                 // type: AUTH_TYPE.error,
//                 payload: res.error
//             })

//         }
//     }
// }

// export function updateAction(data) {
//     return async (dispath) => {
//         let res = await Auth.update(data)
//         if (res.data) {
//             dispath({
//                 type: UPDATE,
//                 // type: AUTH_TYPE.update,
//                 payload: res.data
//             })
//         } else if (res.error) {
//             dispath({
//                 type: ERROR,
//                 // type: AUTH_TYPE.error,
//                 payload: res.data
//             })

//         }
//     }
// }



