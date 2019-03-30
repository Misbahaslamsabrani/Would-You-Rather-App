import Types from "../const/Types";
import { _getQuestions, _saveQuestion, _saveQuestionAnswer } from "../../_DATA";

export const GET_QUESTIONS = () => {
    return dispatch => {
        _getQuestions().then(questions => dispatch({ type: Types.allQuestions, allquestions: Object.values(questions) }))
    }
}

export const Add_NEW_QUESTION = (question) => {
    console.log(question)
    return dispatch => {
            _saveQuestion(question).then(data => dispatch({type: Types.addingQuestion, newquestion: data}))
    }
}
export const Remove_Message = () => {
    return {type: Types.removeMessage}
}

export const ADD_ANSWER = (authedUser, qid, answer) => {
    return dispatch => {
        _saveQuestionAnswer({authedUser, qid, answer}).then(data => 
        dispatch({type: Types.addingAnswer}))
    }
}