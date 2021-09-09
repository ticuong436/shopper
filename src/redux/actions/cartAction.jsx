import { ADD_CART, DECREASE, INCREASE, QUANTITY, REMOVE } from '../type'

export function cartAction(cart) {

    return {
        type: ADD_CART,
        payload: cart,
    }

}
export function Decrease(data) {
    return {
        type: DECREASE,
        payload: data
    }
}

export function Increase(data) {
    return {
        type: INCREASE,
        payload: data,
    }
}
export function Remove(data) {
    return {
        type: REMOVE,
        payload: data,
    }
}

export function Quantity(data) {
    return {
        type: QUANTITY,
        payload: data,
    }
}