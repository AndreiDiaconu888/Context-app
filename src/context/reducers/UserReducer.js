export const userReducer = (state, action) => {
    switch(action.type){
        case 'getUsers':
            return action.payload;
        case 'deleteUser':
            return state.filter((user) => user.id !== action.payload.id);
        case 'updateUser':
            return state.map((user) => {
                return user.id === action.payload.id ? action.payload : user;
            });
        default:
            return state;
    }
};