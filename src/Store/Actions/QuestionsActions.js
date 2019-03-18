import Types from "../const/Types";
import {_getQuestions} from "../../_DATA"
export const GET_QUESTIONS = () => {
    return dispatch => {
        _getQuestions().then(questions => dispatch({type: Types.allQuestions, allquestions: questions}))
    }
}