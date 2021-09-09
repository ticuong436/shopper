import ProductApi from "../../service/productApi"
import { SEARCH } from "../type"

export default function searchAction(keyword) {
    return async (dispatch) => {

        let res = await ProductApi.search(keyword)


        if (res.data) {
            dispatch({
                type: SEARCH,
                payload: res.data

            })
        }
    }
}
