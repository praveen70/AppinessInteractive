import { LOGIN_SUCESS  } from '../action/actionType';


const initialState = {
    login: null
    
    };
    
    
    
    export default function loginReducer (state = initialState, action){
        switch(action.type){
            case LOGIN_SUCESS:
                if ( action.payload && action.payload.data ) {
                    return {...state, login: action.payload.data }
                }
                return state;
              
            default:
                return state;
        }
        
    }