export default function reduxToolkit({ initialState, reducers = {}, name }) {
    let action = {}
    let TYPE = {}

    for (let i in reducers) {
        let type = `${name}/${i}`

        action[i] = (data) => {
            return {
                type,
                payload: data
            }
        }
        TYPE[i] = type
    }
    function reducer(state = initialState, action) {
        let type = action.type.split('/')[1]

        if (type in reducer) {
            return reducer[type](state, action)
        }
        return state;
    }
    return {
        action,
        reducer,
        TYPE
    }
}