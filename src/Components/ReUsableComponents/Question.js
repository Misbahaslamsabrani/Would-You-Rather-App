import React from 'react';
import RadioButtons from './RadioButtons';

const Question = (props) => {
    const { question, postedBy, oc, bText, check, wc, we = false, } = props;
    return (
        <div className="row">
            <div className="col s12 m8 l6 offset-l3 offset-m2">
                <div className="card horizontal">
                    <div className="card-image">
                        <img src={postedBy.avatarURL} alt="userPic" />
                    </div>
                    <div className="card-stacked">
                        <div className="card-content">
                            <div className="card-title purple-text">{postedBy.name} Asks: </div>
                            <p className="grey-text darken-1">Would You Rather. . .</p>
                            {
                                check === "Home" && (<h6 className="truncate">
                                    {question.optionOne.text.slice(0, 7)}. . .
                            <i className="grey-text"> or  </i>
                                    {question.optionTwo.text.slice(0, 7)}. . .
                            </h6>
                                )}
                            {check === "AnswerQuestion" && (
                                <RadioButtons
                                    wc={wc}
                                    optionOne={question.optionOne.text}
                                    optionTwo={question.optionTwo.text}
                                />
                            )
                            }
                        </div>
                        <div className="card-action">
                            <button className="btn-small purple lighten-1"
                                disabled={we ? we() : we}
                                onClick={() => oc(question.id)}>{bText}</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Question;