import React,{useState} from "react";

import './UserForm.css';

const UserForm = props =>{

    const [userName,setUserName] = useState('');
    const [userAge, setUserAge] = useState('');

    const nameHandler = (event) =>{
        setUserName(event.target.value);
    } 

    const ageHandler = (event) =>{
        setUserAge(event.target.value);
    }

    const formHandler = (event) => {
        event.preventDefault();
        const userInfo = {
            name : userName,
            age : userAge,
            id : Math.random()
        }
        props.information(userInfo);
    }

    return(
        <form onSubmit={formHandler} className="form-container">
            <label>Username</label>
            <input 
                type='text'
                onChange={nameHandler}
                />
            <label>Age(Years)</label>
            <input 
                type='number'
                onChange={ageHandler}
                />
            <button type='submit'>Add User</button>
        </form>
    )
}

export default UserForm;