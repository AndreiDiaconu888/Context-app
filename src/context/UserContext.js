import jsonServer from "../Api/jsonServer";
import createDataContext from "./createDataContext";

export const userReducer = (state, action) => {
    switch(action.type){
        case 'getUsers':
            return action.payload;
        case 'deleteUser':
            return state.filter((user) => user.id !== action.payload.id);
        case 'updateUser':
            return state.map((user) => {
                return user.id === action.payload.id ? action.payload : user;
            })
        default:
            return state;
    }
}


const getUsers = (dispatch) => {
    return async () => {
        const users = await jsonServer.get('/users');
        dispatch({type: 'getUsers', payload: users.data});
    };
};

export const { UserContext, UserProvider } = createDataContext(
    userReducer,
    { getUsers },
    []
);