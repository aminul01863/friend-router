import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Friend.css'
const Friend = (props) => {
    const { name, email, id } = props.friend;

    const history = useHistory();
    const handelClick = (friendId) => {
        const url = `/friend/${friendId}`
        history.push(url)
    }
    return (
        <div className="friend-style">
            <h2>{name}</h2>
            <p>{email}</p>
            <p>id: <Link to={`/friend/${id}`}>friend{id}</Link></p>
            <button onClick={() => handelClick(id)}>Add me</button>
        </div>
    );
};

export default Friend;