import * as api from '../api';

// Action Creators
export const getPosts = () => async (dispatch) => {
    try {
        const { data } = await api.fetchPosts();
        // console.log('fetch data ' + JSON.stringify(data))
        dispatch({ type: 'FETCH_ALL', payload: data });
    } catch (error) {
        console.log(error);
    }
}

export const createPost = (post) => async (dispatch) => {
    try {
        const { data } = await api.createPost({post});
        

        dispatch({ type: 'CREATE', payload: JSON.stringify(data) });
    } catch (error) {
        console.log(error)
    }
}