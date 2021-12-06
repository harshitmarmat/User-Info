import React from "react";
import './Error.css'
import Card from "../UI/Card";
const Error = props =>{
    return (
        <Card className="backdrop">
            <div className="modal">
                    <header>
                        <h2>Hello!!</h2>
                    </header>
                    <content>
                        <p>My name is khan</p>
                    </content>
                    <action>
                        <button>Okay</button>
                    </action>
            </div>
        </Card>
    )
}

export default Error;