import user from "../../service/user"
import { ADDWIDHLIST, REMOVEWISHLIST } from "../type"

export function addWidhlist(data) {
    return {
        type: ADDWIDHLIST,
        payload: data
    }
}
export function removeWishlist(data) {
    console.log(data);
    return {
        type: REMOVEWISHLIST,
        payload: data
    }

}