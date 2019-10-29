import createDataContext from './createDataContext';

const blogReducer = (state, action) => {
    switch(action.type) {
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

const addBlogPost = (dispatch) => {
    return  (title, content, callback) => {
        //here can be handled apis calls like axios.post handling it with try and catch using async await

    //try {
        //return async  (title, content, callback) => {
            //await axios.post('/posting', title, content);
        dispatch({type: 'addBlogPost', payload: {title, content}});
        callback ? callback() : null ;
    //} catch (err) { --- error handling ---}
    }
}

const editBlogPost = (dispatch) => {
    return (id, title, content, callback) => {
        dispatch({type: 'editBlogPost', payload: {id, title, content}})
        callback ? callback() : null ;
    }
}

const deletePost = (dispatch) => {
    return (id) => {
        dispatch({ type: 'deletePost', payload: id});
    }
}

export const { Context, Provider } = createDataContext(
    blogReducer, 
    {addBlogPost, deletePost, editBlogPost}, 
    [{id: 1, title: "Blog post 1", content: "content 1"}]
); 
