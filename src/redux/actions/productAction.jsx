import ProductApi from "../../service/productApi"
import { PRODUCT, CATEGORIES, LOADING } from "../type"

export function productAction(queryString) {
    return async (dispatch) => {

        let res = await ProductApi.catalog(queryString)

        if (res) {
            dispatch({
                type: PRODUCT,
                payload: res

            })
        }

    }
}
export function getcategories(data) {
    return async (dispatch) => {
        let res = await ProductApi.categories(data)

        if (res) {
            dispatch({
                type: CATEGORIES,
                payload: res
            })
        }
    }
}






