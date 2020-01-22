import React from 'react'
import { useHistory } from 'react-router-dom'


export const AboutPage: React.FC = () => {

    const history =useHistory();

    return (
        <React.Fragment>
            <h1>Info Page</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto sunt architecto nesciunt eum error, mollitia commodi vel in distinctio voluptas.</p>
            <button className="btn" onClick={() => history.push('/')}>Back</button>
        </React.Fragment>
    );
}