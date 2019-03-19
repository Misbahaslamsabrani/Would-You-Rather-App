import React from 'react';

const Question = (props) => {
    return (
        <div className="row">
            <div className="col s12 m8 l6 offset-l3 offset-m2">
                <div className="card horizontal">
                    <div className="card-image">
                        <img src="http://i.pravatar.cc/150?img=58" />
                    </div>
                    <div className="card-stacked">
                        <div className="card-content">
                            <div className="card-title purple-text">Sarah Edo Asks: </div>
                            <p className="grey-text darken-1">Would You Rather. . .</p>
                            <h6 className="truncate"></h6>
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