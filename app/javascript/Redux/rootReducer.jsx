import { combineReducers } from 'redux';
import shoppingReducer from "./Shop/reducer";




const rootReducer = combineReducers({
    shop: shoppingReducer,
});

export default rootReducer;