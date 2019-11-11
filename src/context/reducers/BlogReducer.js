export const blogReducer = (state, action) => {
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