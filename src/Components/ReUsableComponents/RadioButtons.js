import React from 'react'

function RadioButtons(props) {
    const { wc, optionOne, optionTwo } = props;
    return (
        <span>
            <label className="purple-text">
                <input
                    value="optionOne"
                    onChange={wc}
                    className="with-gap"
                    name="selectedAnswer"
                    type="radio"
                />
                <span>
                    {optionOne}
                </span>
            </label>
            <br></br>
            <label className="purple-text">
                <input
                    value="optionTwo"
                    onChange={wc}
                    className="with-gap"
                    name="selectedAnswer"
                    type="radio"
                />
                <span>
                    {optionTwo}
                </span>
            </label>
        </span>
    )
}

export default RadioButtons;