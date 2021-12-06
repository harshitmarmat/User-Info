import React from "react";
import './UserList.css'


const UserList = props => {
    return (
        <div className="users">
            <ul>
            {props.emptyList?
                <li>
                    {props.name} ({props.age})
                </li> : ''}
            </ul>
        </div>
    )
}

export default UserList;