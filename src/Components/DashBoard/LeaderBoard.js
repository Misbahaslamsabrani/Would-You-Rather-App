import React from 'react';
import { connect } from 'react-redux';
import ShowResult from '../ReUsableComponents/ShowResult';

const LeaderBoard = (props) => {
    const {SortedArray} = props;
    return (
        <div className="container">
            <div className="row">
                <div className='col s12 m10 l6 offset-l3 offset-m2'>
                    <ul className="collection with-header">
                        <li className="collection-header">
                            <h4 className="purple-text center">
                                Leader Board
                            </h4>
                        </li>
                        {SortedArray.map((v,i) => <li key={v.id} className="collection-item">
                        <ShowResult user={v} ranking={i+1}/>
                        </li>)}
                    </ul>
                </div>
            </div>
        </div>
    );
}
const mapSateToProps = (state) => {
    const SortedArray = state.auth.AllUsers.sort((a,b) => (Object.values(a.answers).length + a.questions.length) - (Object.values(b.answers).length + b.questions.length)).reverse();
    return {
        SortedArray,
    }
}
export default connect(mapSateToProps)(LeaderBoard);