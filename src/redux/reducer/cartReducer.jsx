import { ADD_CART, CLEARCART, DECREASE, INCREASE, QUANTITY, REMOVE } from '../type'

let initSate = {
    list: JSON.parse(localStorage.getItem("listcart")) || [],
    num: JSON.parse(localStorage.getItem("num")) || 0,
    amount: JSON.parse(localStorage.getItem("amount")) || 0,
}

export default function cartReducer(state = initSate, action) {
    switch (action.type) {

        case ADD_CART:
            let { list, num, amount } = state
            let cartNum = action.payload.cartNum || 1
            let item = action.payload;
            num = num + cartNum;
            amount += item.real_price * cartNum;
            let index = list.findIndex((e) => e._id === action.payload._id)

            if (index === -1) {
                item.cartNum = cartNum
                list.push(item)
                item.cart = amount
            }

            else {
                list[index].cartNum += cartNum
            }
            localStorage.setItem("listcart", JSON.stringify(list))
            localStorage.setItem("amount", JSON.stringify(amount))
            localStorage.setItem("num", JSON.stringify(num))
            return {
                ...state,
                list,
                num,
                amount,
            }
        case DECREASE: {
            let { list, num, amount } = state

            num -= 1

            let index = list.findIndex((e) => e._id === action.payload._id)
            amount -= list[index].real_price
            list[index].cartNum -= 1

            if (list[index].cartNum === 0) {
                list.splice(index, 1)

            }

            localStorage.setItem("listcart", JSON.stringify(list))
            localStorage.setItem("amount", JSON.stringify(amount))
            localStorage.setItem("num", JSON.stringify(num))
            return {
                ...state,
                list,
                num,
                amount,
            }
        }
        case INCREASE: {
            let { list, num, amount } = state
            num += 1
            amount += action.payload.real_price
            let index = list.findIndex((e) => e._id === action.payload._id)
            list[index].cartNum += 1

            localStorage.setItem("listcart", JSON.stringify(list))
            localStorage.setItem("amount", JSON.stringify(amount))
            localStorage.setItem("num", JSON.stringify(num))
            return {
                ...state,
                list,
                num,
                amount,
            }
        }
        case REMOVE: {
            let { list, num, amount } = state
            let index = list.findIndex((e) => e._id === action.payload._id)
            let temp = list[index].cartNum
            num -= list[index].cartNum
            list[index].cartNum -= list[index].cartNum
            amount -= list[index].real_price * temp
            if (list[index].cartNum === 0) {
                list.splice(index, 1)
            }
            localStorage.setItem("listcart", JSON.stringify(list))
            localStorage.setItem("amount", JSON.stringify(amount))
            localStorage.setItem("num", JSON.stringify(num))
            return {
                ...state,
                list,
                num,
                amount,
            }
        }
        case QUANTITY: {
            let { list, num, amount } = state
            let index = list.findIndex((e) => e._id === action.payload._id)
            num -= list[index].cartNum;
            amount -= list[index].cartNum * list[index].real_price;
            list[index].cartNum = action.payload.num;
            console.log(action.payload);
            console.log(state);
            num += action.payload.num;
            amount += list[index].cartNum * list[index].real_price;

            localStorage.setItem("listcart", JSON.stringify(list))
            localStorage.setItem("amount", JSON.stringify(amount))
            localStorage.setItem("num", JSON.stringify(num))
            return {
                ...state,
                list,
                num,
                amount,
            }
        }

        case CLEARCART: {
            let { list } = state;
            list.splice(0, 1)
        }
        default:
            return state;
    }

}