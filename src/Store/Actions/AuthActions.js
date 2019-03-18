import Types from "../const/Types";
import {_getUsers} from "../../_DATA"
export const GET_USERS = () => {
    return dispatch => {
        _getUsers().then(users => dispatch({type: Types.allUsers, allusers: Object.values(users)}))
    }
}
export const SignInUser = (user) => {
    return {type: Types.signIn, cuser: user}
}
export const SignOutUser = () => {
    return {type: Types.logout}
}