import { combineReducers } from 'redux';
import loginReducer from './loginReducer'
import employeData from './dashboardReducer';

const rootReducer = combineReducers({
    login:loginReducer,
    employeData:employeData,
});
export default rootReducer;