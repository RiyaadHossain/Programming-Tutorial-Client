import { FILTER_BY_TAG } from "../actionTypes/actionTypes"

export const filterByTag = (tag) => {
    return async (dispatch, getState) => {
        dispatch({type: FILTER_BY_TAG, payload: tag})
    }
}