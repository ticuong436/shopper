import { VIEW } from "../type";

export function viewAction(data) {
    return {
        type: VIEW,
        payload: data
    }

}