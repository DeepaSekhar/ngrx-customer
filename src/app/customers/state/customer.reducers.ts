const initialState = {
    "customers": [
        {
            "name": "peter",
            "phone": "12345",
            "address": "123 high Road",
            "membership": "premium",
            "id": 1
        }

    ],
    loading: false,
    loaded: true
}
export function customerReducer(state = initialState, action) {
    switch (action.type) {
        case "LOAD_CUSTOMERS": {
            return {
                ...state,
                loading: true,
                loaded: false
            }
        }
        default: { return state }

    }

}