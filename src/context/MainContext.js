
import { userReducer, getUsers } from './UserContext';
import { blogReducer, getBlogPosts, editBlogPost, addBlogPost, deletePost } from './BlogContext';
import createDataContext from './createDataContext';


const mainReducer = (state, action) => {
    return {
        users: userReducer,
        blogPosts: blogReducer
    }
}

export const { Context, Provider } = createDataContext(
    mainReducer,
    { getUsers, getBlogPosts, editBlogPost, addBlogPost, deletePost },
    {}
);