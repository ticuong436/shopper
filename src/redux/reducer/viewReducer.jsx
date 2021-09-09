import { VIEW } from "../type";
let initate = {
    list: []
}
export default function viewReducer(state = initate, action) {
    switch (action.type) {

        case VIEW:
            return {
                list: action.payload
            }
        default:
            return state;
    }
}