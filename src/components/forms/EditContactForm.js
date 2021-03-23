import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { remove, update } from '../../store/actions/contacts';
import { select } from '../../store/actions/select';
import { EmailForm } from './EmailForm';

export const EditContactForm = () => {
    const dispatch = useDispatch();

    const selected = useSelector(state => state.selectReducer);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [emails, setEmails] = useState([]);

    useEffect(() => {
        setFirstName(selected.firstName)
        setLastName(selected.lastName)
        setEmails(selected.emails)
    }, [selected])

    const updateFirstName = (e) => {
        setFirstName(e.target.value);
    }
    const updateLastName = (e) => {
        setLastName(e.target.value);
    }

    const removeEmail = (e) => {
        let idx = e.target.value;
        let newArr = [...emails]
        newArr.splice(idx, 1);
        setEmails(newArr);
    }

    const removeContact = async (e) => {
        const deleteRes = await fetch(`https://avb-contacts-api.herokuapp.com/contacts/${selected.id}`, {
            method: "DELETE"
        })
        if (deleteRes.status === 200) {
            dispatch(remove(selected));
            dispatch(select(null));
        } else {
            alert("Unable to delete contact.")
        }
    }

    const cancel = async (e) => {
        const resetSelected = await fetch (`https://avb-contacts-api.herokuapp.com/contacts/${selected.id}`)
        const resObj = await resetSelected.json();
        dispatch(select(resObj));
    }

    const updateContact = async (e) => {
        if (firstName.length === 0 || lastName.length === 0) {
            alert("Contact must have first and last names.")
            return
        }
        console.log(firstName, lastName, emails);
        const updateRes = await fetch(`https://avb-contacts-api.herokuapp.com/contacts/${selected.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify({
                firstName,
                lastName,
                emails
            })
        })
        if (updateRes.status === 200) {
            const resObj = await updateRes.json();
            dispatch(update(resObj));
            dispatch(select(resObj));
        } else {
            alert("Unable to update contact. Make sure email addresses are valid.")
        }
        return;
    }

    return (<>
        <div className="form">
            <div className="formContainer">
                <div className="inputNames">
                    <div className="inputItem">
                        <div>First Name:</div>
                        <input className="textInputs" type="text" name="firstName" onChange={updateFirstName} placeholder={selected.firstName}/>
                    </div>
                    <div className="inputItem">
                        <div>Last Name:</div>
                        <input className="textInputs" type="text" name="lastName" onChange={updateLastName} placeholder={selected.lastName}/>
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
                                            <button className="emailDeleteButton" value={index} onClick={removeEmail}>DELETE</button>
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
                    <button className="sideButton" onClick={removeContact}>Delete</button>
                </div>
                <div className="rightSideButtons">
                    <button className="sideButton" onClick={cancel}>Cancel</button>
                    <button className="sideButton" onClick={updateContact}>Save</button>
                </div>
            </div>

        </div>
    </>)
}
