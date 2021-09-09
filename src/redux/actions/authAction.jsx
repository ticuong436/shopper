
import Auth from "../../service/auth"
import authReducer from "../reducer/authReducer"
import { ERROR, LOGIN, LOGOUT, UPDATE } from "../type"

export function loginAction(data) {
    return async (dispatch) => {
        let res = await Auth.login(data)
        console.log(res);
        if (res.data) {
            dispatch({
                type: LOGIN,
                payload: res.data
            })
        } else if (res.error) {
            dispatch({
                type: ERROR,
                payload: res.error
            })

        }
    }
}

export function updateAction(data) {
    return async (dispatch) => {
        let res = await Auth.update(data)
        if (res.data) {
            dispatch({
                type: UPDATE,
                payload: res.data
            })
        } else if (res.error) {
            dispatch({
                type: ERROR,
                payload: res.error
            })

        }

    }
}

export function logoutAction() {
    return {
        type: LOGOUT
    }
}