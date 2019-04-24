import { EMP_DATA} from './actionType';
import { user } from '../json/index'

export const userData = () =>dispatch=>{
    dispatch({
        type: EMP_DATA,
        payload: user
      })

}