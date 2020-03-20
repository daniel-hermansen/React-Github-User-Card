import React from 'react';

const UserCard = props => {
    return (
        <div className="card-container">
            <h1>{props.userData.name}</h1>
            <img size="small" className="pics" src={props.userData.avatar_url}/>
            <p>Username: <span>{props.userData.login}</span></p>
            <p>Location: <span>{props.userData.location}</span></p>
            <p>Biography: <span>{props.userData.bio}</span></p>
            <p>Followers: <span>{props.userData.followers}</span></p>
        </div>
    )
}

export default UserCard;