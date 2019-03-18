import { combineReducers } from "redux"
import AuthReducer from "./AuthReducer";
import QuestionsReducers from "./QuestionsReducers";
const rootReducers = combineReducers({
    auth: AuthReducer,
    que: QuestionsReducers,

})
export default rootReducers;