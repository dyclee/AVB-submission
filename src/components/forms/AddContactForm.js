import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { create } from '../../store/actions/contacts';
import { select } from '../../store/actions/select';
import { EmailForm } from './EmailForm';

export const AddContactForm = () => {
    const dispatch = useDispatch();

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emails, setEmails] = useState([]);

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

    const createContact = async (e) => {
        if (firstName.length === 0 || lastName.length === 0) {
            alert("Contact must have first and last names.")
            return;
        }
        const createObj = await fetch("https://avb-contacts-api.herokuapp.com/contacts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                firstName,
                lastName,
                emails
            })
        })
        if (createObj.ok) {
            const resObj = await createObj.json();
            dispatch(create(resObj));
            dispatch(select(resObj));
        }
        return;
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
                    <button className="sideButton" onClick={createContact}>Create</button>
                </div>
            </div>

        </div>
    </>)
}
