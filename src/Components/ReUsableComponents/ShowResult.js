import React from 'react';
const ShowResult = (props) => {
    const { user, ranking } = props;
    const totalAnswers = Object.values(user.answers).length;
    const totalQuestions = user.questions.length;
    const Score = totalAnswers + totalQuestions;
    return (
        <div className="card">
            <div className="card-image waves-effect waves-block waves-light">
                <img className="activator userPic center" src={user.avatarURL} alt={user.name} />
            </div>
            <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                    <span className='btn-small btn-floating rigth purple white-text'>
                        {ranking}
                    </span> &nbsp;
                <b className="purple-text">{user.name}</b>
                    <i className="material-icons right">more_vert</i>
                </span>
            </div>
            <div className="card-reveal">
                <span className="card-title grey-text text-darken-4">
                    <b className="purple-text">{user.name}</b>
                    <i className="material-icons right">close</i></span>
                <table>
                    <tbody>
                        <tr>
                            <th>Answered Questions</th>
                            <td className="purple-text">{totalAnswers}</td>
                        </tr>
                        <tr>
                            <th>Created Questions</th>
                            <td className="purple-text">{totalQuestions}</td>
                        </tr>

                        <tr>
                            <th><h5>Score</h5></th>
                            <td className="purple-text"><h5>{Score}</h5></td>
                        </tr>

                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default ShowResult;