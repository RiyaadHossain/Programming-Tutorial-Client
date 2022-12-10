import { loaded } from "../actions/blogAction"

export const getBlogs = () => {
    return async (dispatch, getState) => {
        const res = await fetch('products.json')
        const data = await res.json()
        dispatch(loaded(data))
    }
}

export const addBlog = () => {

}