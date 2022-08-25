import { combineReducers } from "redux";
import navbarReducer from "./navbarReducer"
import cardReducer from "./cardReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
    navbarReducer,
    cardReducer,
    authReducer,
})

export default rootReducer;