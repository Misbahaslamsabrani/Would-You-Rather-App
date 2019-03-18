import Types from "../const/Types"

const initialState = {
    currentUser: null,
    currentUserFlag: false,
}

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.signIn:
            return state = {
                ...state,
                currentUserFlag: true,
            }
        case Types.logout:
        return state = {
            ...state,
            currentUserFlag: false,
            currentUser: null,
        }
        default:
            return state;
    }
}

export default AuthReducer;