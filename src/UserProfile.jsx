import React from 'react'

const UserProfile = (props) => {
    return (
        <div>
            <h2>Child Component</h2>
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
        </div>
    )
}

export default UserProfile