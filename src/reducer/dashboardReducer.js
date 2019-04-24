import { EMP_DATA  } from '../action/actionType';


const initialState = {
    employeData: null
    
    };
    
    
    
    export default function employeData (state = initialState, action){
        switch(action.type){
            case EMP_DATA:
                if ( action.payload && action.payload ) {
                    return {...state, employeData: action.payload}
                }
                return state;
              
            default:
                return state;
        }
        
    }