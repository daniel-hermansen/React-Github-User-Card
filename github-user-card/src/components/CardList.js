import React from 'react';

const CardList = (props) => {
    return (
        <div>
            <h1>Followers: </h1>
            {props.userFollowers.map(follower =>
                <div className="card-container" key={follower.id}>
                    <h2>{follower.login}</h2>
                    <img src={follower.avatar_url}/>
                    <p>Location: {follower.location}</p>
                </div>    
            )}
        </div>
    )
};

export default CardList;