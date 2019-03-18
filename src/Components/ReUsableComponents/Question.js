import React from 'react';
import t from "../../images/s.png"
const Question = (props) => {
    return (
        <div className="row">
            <div className="col s12 m7 l6 offset-l3">
                <div className="card horizontal">
                    <div className="card-image">
                        <img src={t} />
                    </div>
                    <div className="card-stacked">
                        <div className="card-content">
                            <div className="card-title purple-text">Sarah Edo Asks: </div>
                            <p className="grey-text darken-1">Would You Rather. . .</p>
                            <p>question will appear here....</p>
                        </div>
                        <div className="card-action">
                            <button className="btn-small purple lighten-1">View Poll</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Question;