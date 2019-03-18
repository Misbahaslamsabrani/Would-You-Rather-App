import Types from "../const/Types"

const initialState = {
    AllQuestions: [],
    AllQuestionsFlag: false,
}

const QuestionsReducers = (state = initialState, action) => {
    switch (action.type) {
        case Types.allQuestions:
        return state = {
            ...state,
            AllQuestionsFlag: true,
            AllQuestions: action.allquestions,
        }
        default:
            return state;
    }
}

export default QuestionsReducers;