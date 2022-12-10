import { addBlog, loaded } from "../actions/blogAction"

const URL = "https://programming-tutorial-server.vercel.app/"

export const getBlogsThunk = () => {
    return async (dispatch, getState) => {
        const res = await fetch('products.json')
        const data = await res.json()
        dispatch(loaded(data))
    }
}

export const addBlogThunk = () => {
    return async (dispatch, getState) => {
        const res = await fetch(URL)
        const data = await res.json()
        if (data) {
            dispatch(addBlog(data))
        }
    }
}