import createDataContext from './createDataContext';
import jsonServer from '../Api/jsonServer';
import { blogReducer } from './reducers/BlogReducer';
import { userReducer } from './reducers/UserReducer';

const mainReducer = ({users, blogPosts}, action) => ({
    users: userReducer(users, action),
    blogPosts: blogReducer(blogPosts, action)
});

const getBlogPosts = (dispatch) => {
    return async () => {
        const response = await jsonServer.get('/blogPosts');
        dispatch({type: 'getBlogPosts', payload: response.data })
    };
};

const addBlogPost = (dispatch) => {
    return  async (title, content, callback) => {
        await jsonServer.post('/blogposts', {title, content});
        //no need to dispatch because we recalled getBlogPosts() in useEffect in IndexScreen when navigating back
        callback ? callback() : null ;

        //here can be handled apis calls like axios.post handling it with try and catch using async await
    //try {
        //return async  (title, content, callback) => {
            //await axios.post('/posting', title, content);
            // dispatch({type: 'addBlogPost', payload: {title, content}});
            // callback ? callback() : null ;
    //} catch (err) { --- error handling ---}
    }
}

const editBlogPost = (dispatch) => { 
    return async (id, title, content, callback) => {
        await jsonServer.put(`/blogposts/${id}`, {title, content})
        dispatch({type: 'editBlogPost', payload: {id, title, content}})
        callback ? callback() : null ;
    }
}

const deletePost = (dispatch) => {
    return async (id) => {
        await jsonServer.delete(`/blogposts/${id}`);
        dispatch({ type: 'deletePost', payload: id});
    }
}

const getUsers = (dispatch) => {
    return async () => {
        const users = await jsonServer.get('/users');
        dispatch({type: 'getUsers', payload: users.data});
    };
};

export const { Context, Provider } = createDataContext(
    mainReducer, 
    {addBlogPost, deletePost, editBlogPost, getBlogPosts, getUsers}, 
    {}
); 
