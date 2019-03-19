import Types from "../const/Types"

const initialState = {
    AllQuestions: [],
    AllQuestionsFlag: false,
    questionAddedMessage: false,
}

const QuestionsReducers = (state = initialState, action) => {
    switch (action.type) {
        case Types.allQuestions:
        return state = {
            ...state,
            AllQuestionsFlag: true,
            AllQuestions: action.allquestions,
        }
        case Types.addingQuestion:
        return state = {
            ...state,
            AllQuestions: [...state.AllQuestions, action.newquestion],
            questionAddedMessage: "Your question has been successfully submitted!"
        };
        case Types.removeMessage: 
        return state = {
            ...state,
            questionAddedMessage: false,
        }
        case Types.addingAnswer: 
        return state = {
            ...state,
        }
        default:
            return state;
    }
}

export default QuestionsReducers;