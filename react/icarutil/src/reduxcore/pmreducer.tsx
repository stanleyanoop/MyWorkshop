import {combineReducers} from 'redux';
import {LOGIN_ACTION} from './pmactions';

const initialState: any = {
    name: "",
    isLoggedIn: false,
    startDate: "",
    endDate: "",
    pmType:"",
    pmList: []

}

export const loginReducer = (state:any = initialState, action:any) => {
    switch(action.type){
        case LOGIN_ACTION:
            return Object.assign({}, state, {
                name : action.loginData.login,
                isLoggedIn : action.loginData.isLoggedIn
            });
        default:
            return state;
    }
}

const rootReducer  = combineReducers({
    loginReducer : loginReducer
});

export default rootReducer;
