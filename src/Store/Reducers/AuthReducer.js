import Types from "../const/Types"

const initialState = {
    currentUser: null,
    currentUserFlag: false,
    AllUsers: [],
    AllUsersFlag: false,
}

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.signIn:
            return state = {
                ...state,
                currentUserFlag: true,
                currentUser: action.cuser,
            }
        case Types.logout:
        return state = {
            ...state,
            currentUserFlag: false,
            currentUser: null,
        }
        case Types.allUsers:
        return state = {
            ...state,
            AllUsersFlag: true,
            AllUsers: action.allusers,
        }
        default:
            return state;
    }
}

export default AuthReducer;