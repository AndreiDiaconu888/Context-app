import createDataContext from './createDataContext';
import jsonServer from '../Api/jsonServer';

const blogReducer = (state, action) => {
    switch(action.type) {
        case 'getBlogPosts':
            return action.payload;
        case 'addBlogPost':
            return [...state, { 
                id: Math.floor(Math.random() * 99999),  
                title: action.payload.title,
                content: action.payload.content 
            }];
        case 'editBlogPost': 
            return state.map((blogpost) => {
                return blogpost.id === action.payload.id ?
                action.payload :
                blogpost;
                }
            );
        case 'deletePost':
            return state.filter((post) => post.id !== action.payload);
        default:
            return state;
    }
}

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
            //callback ? callback() : null ;
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

export const { Context, Provider } = createDataContext(
    blogReducer, 
    {addBlogPost, deletePost, editBlogPost, getBlogPosts}, 
    []
); 
