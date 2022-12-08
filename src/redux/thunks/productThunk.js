import { loaded } from "../actions/productAction"

export const getTutorials = () => {
    return async (dispatch, getState) => {
        const res = await fetch('products.json')
        const data = await res.json()
        dispatch(loaded(data))
    }
}