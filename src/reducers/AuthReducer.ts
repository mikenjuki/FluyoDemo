import { LOGIN_SUCCESS } from '../constants/actions';


const INITIAL_STATE: IAuthState = {
    token: '',
};

const AuthReducer = (state = INITIAL_STATE, action: ReduxAction): IAuthState => {
    const { payload, type } = action;
    switch (type) {
    case LOGIN_SUCCESS: {
        return {
            ...state,
            token: payload,
        };
    }
    default:
        return state;
    }
};

export default AuthReducer;
