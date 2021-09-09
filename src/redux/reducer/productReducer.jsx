import productApi from "../../service/productApi";
import { PRODUCT, CATEGORIES, LOADING } from '../type'
import reduxToolkit from "../../core/reduxToolkit"

let initState = {
    product: JSON.parse(localStorage.getItem('product')).data || [],
    categories: JSON.parse(localStorage.getItem('categories')) || [],
    paginate: null,
    loading: true,
    loadingCategories: true,
}

export default function productReducer(state = initState, action) {
    switch (action.type) {

        case PRODUCT:
            localStorage.setItem('product', JSON.stringify(action.payload))
            return {
                ...state,
                product: action.payload.data,
                paginate: action.payload.paginate,
                loading: false
            }

        case CATEGORIES:
            localStorage.setItem('categories', JSON.stringify(action.payload))
            return {
                ...state,
                categories: action.payload,
                loadingCategories: false
            }


        default:
            return state;
    }

}










// export function getProdct() {
//     return (dispatch) => {
//         productApi.catalog()
//             .then(res => {
//                 dispatch(action.catalog(res))

//             })
//     }
// }

// let { action, TYPE, reducer } = reduxToolkit({
//     initialState: initState,
//     name: 'product',

//     reducers: {
//         catalog: (state, action) => {

//             return {
//                 ...state,
//                 product: action.payload.data
//             }
//         },
//     }
// })
// export default reducer
// export const PRODUCTS = TYPE
// export const productAction = action