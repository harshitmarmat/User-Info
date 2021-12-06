import React from "react";
import UserList from "./UserList/UserList";
import './DisplayContainer.css'

const DisplayContainer = props =>{
    return(
        <div className="display_container">
            {props.userList.map((user)=> <UserList
                    emptyList = {props.emptyList}
                    name={user.name}
                    age = {user.age}
                    key = {user.id}
                />)}
            {}
        </div>
    )
}

export default DisplayContainer;