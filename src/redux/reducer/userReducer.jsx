import { ADDWIDHLIST, REMOVEWISHLIST } from '../type'

let initState = {
    list: JSON.parse(localStorage.getItem("wishlist")) || [],

}

export default function userReducer(state = initState, action) {
    switch (action.type) {
        case ADDWIDHLIST:
            let { list } = state

            let item = action.payload
            let index = list.findIndex((e) => e._id == action.payload._id)

            if (index === -1) {
                list.push(item)
            }

            localStorage.setItem("wishlist", JSON.stringify(list))
            return {
                ...state,
                list,
            }
        case REMOVEWISHLIST: {
            let { list } = state;

            let index = list.findIndex((e) => e._id == action.payload._id)
            if (index !== -1) {
                list.splice(index, 1)
            }
            localStorage.setItem("wishlist", JSON.stringify(list))

            return {
                list,
            }

        }

        default:
            return state;
    }
}