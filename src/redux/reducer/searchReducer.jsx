import { SEARCH } from "../type"

let initState = {
    list: [],
    key: ''
}

export default function searchReducer(state = initState, action) {

    switch (action.type) {

        case SEARCH:
            let { list } = state
            list = action.payload
            console.log(list);
            return {
                list,
            }

        default:
            return state;
    }

}