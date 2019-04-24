import { LOGIN_SUCESS , ERROR_MESSAGE} from './actionType';
import { login } from '../json/index'

export const sigIn = (data) =>dispatch=>{
    dispatch({
        type: LOGIN_SUCESS,
        payload: data
      })
   
    

}