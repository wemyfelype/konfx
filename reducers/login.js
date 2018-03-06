import { DO_LOGIN } from './../actions/login'


export default (state = [], action) => {

    switch (action.type) {
        case DO_LOGIN:
            return {...state, login:action.payload.data}
        default:
            return state;

    }

};
