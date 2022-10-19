const inicialState = {
    Tests: [],
    InfoTests: [],
}

function rootReducer(state = inicialState, action) {
    switch (action.type) {
        case 'GET_ALL_TEST':
            return {
                ...state,
                Tests: action.payload,
            }
        case 'GET_TEST':
            return {
                ...state,
                InfoTests: action.payload,
            }
        default:
            return state
    }
}
export default rootReducer