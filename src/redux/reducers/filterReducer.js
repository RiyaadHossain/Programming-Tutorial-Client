import { FILTER_BY_TAG } from "../actionTypes/actionTypes";

const initialState = {
    tags: [],
    updateTime: ""
};

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case FILTER_BY_TAG:
            const included = state.tags.includes(action.payload)
            if (included) {
                return {
                    ...state,
                    tags: [...state.tags.filter(tag => tag !== action.payload)]
                }
            }
            return {
                ...state,
                tags: [...state.tags, action.payload]
            }

        default:
            return state
    }
}

export default filterReducer;