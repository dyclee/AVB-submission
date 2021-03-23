import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { EmailForm } from './EmailForm';

export const EditContactForm = () => {
    const selected = useSelector(state => state.selectReducer);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emails, setEmails] = useState([]);

    useEffect(() => {
        setEmails(selected.emails)
    }, [selected])
    const updateFirstName = (e) => {
        setFirstName(e.target.value);
    }
    const updateLastName = (e) => {
        setLastName(e.target.value);
    }

    const remove = (e) => {

    }

    const cancel = (e) => {

    }

    const update = (e) => {

    }

    return (<>
        <div className="form">
            <div className="formContainer">
                <div className="inputNames">
                    <div className="inputItem">
                        <div>First Name:</div>
                        <input className="textInputs" type="text" name="firstName" onChange={updateFirstName} value={selected.firstName}/>
                    </div>
                    <div className="inputItem">
                        <div>Last Name:</div>
                        <input className="textInputs" type="text" name="lastName" onChange={updateFirstName} value={selected.lastName}/>
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
                    <button className="sideButton" onClick={remove}>Delete</button>
                </div>
                <div className="rightSideButtons">
                    <button className="sideButton" onClick={cancel}>Cancel</button>
                    <button className="sideButton" onClick={update}>Save</button>
                </div>
            </div>

        </div>
    </>)
}
