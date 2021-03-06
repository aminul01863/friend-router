import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const FriendDitel = () => {
    const { friendId } = useParams()
    const [friend, setFriend] = useState([]);
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/users/${friendId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setFriend(data))
    }, [])
    return (
        <div>
            <h2>this is friend details: {friendId}</h2>
            <h3>Name: {friend.name}</h3>
            <p>Email:{friend.email}</p>
            <p>Phone:{friend.phone}</p>
            <p>Website:{friend.website}</p>
        </div>
    );
};

export default FriendDitel;