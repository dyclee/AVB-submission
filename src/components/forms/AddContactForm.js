import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { EmailForm } from './EmailForm';

export const AddContactForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emails, setEmails] = useState([]);

    const selected = useSelector(state => state.selectReducer)

    const updateFirstName = (e) => {
        setFirstName(e.target.value);
    }
    const updateLastName = (e) => {
        setLastName(e.target.value);
    }

    const cancel = (e) => {
        let inputs = document.getElementsByClassName("textInputs")
        for (const ele of inputs) {
            ele.value = ""
        }
        setFirstName("");
        setLastName("");
        setEmails([]);
    }

    const create = (e) => {

    }


    return (<>
        <div className="form">
            <div className="formContainer">
                <div className="inputNames">
                    <div className="inputItem">
                        <div>First Name:</div>
                        <input className="textInputs" type="text" name="firstName" onChange={updateFirstName} />
                    </div>
                    <div className="inputItem">
                        <div>Last Name:</div>
                        <input className="textInputs" type="text" name="lastName" onChange={updateLastName} />
                    </div>
                </div>

                <div className="inputEmails">
                    <div className="inputItem">
                        <div>Email</div>
                            <ul>
                                {emails.map((email, index) => {
                                    return (
                                        <li key={index}>
                                            <div className="email">
                                                {email}
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        <EmailForm emails={emails} setEmails={setEmails} />
                    </div>
                </div>
            </div>
            <div className="formButtons">
                <div className="leftSideButtons">
                    <button className="sideButton" disabled={true} >Delete</button>
                </div>
                <div className="rightSideButtons">
                    <button className="sideButton" onClick={cancel}>Cancel</button>
                    <button className="sideButton" onClick={create}>Create</button>
                </div>
            </div>

        </div>
    </>)
}
