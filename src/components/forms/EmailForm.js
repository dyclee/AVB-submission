import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { StaticRouter } from 'react-router';

export const EmailForm = ({emails, setEmails}) => {
    const [email, setEmail] = useState("");
    const [hideForm, setHideForm] = useState(true);

    const selected = useSelector(state => state.selectReducer);

    useEffect(() => {
        setHideForm(true);
    }, [selected])

    const hideEmailForm = (e) => {
        setHideForm(!hideForm);
    }

    const submit = (e) => {
        e.preventDefault();
        if (email.length === 0) {
            alert("You must enter a valid email address.")
            return;
        }
        let newArr = [...emails]
        newArr.push(email);
        document.getElementById("emailInput").value = ""
        setEmails(newArr);
        setEmail("")
    }

    const addEmail = (e) => {
        setEmail(e.target.value);
    }

    return (<>
            <div className="emailFormToggle" onClick={hideEmailForm}>
                <i className="fas fa-plus fa-lg"></i>
                <div className="addEmailText">
                    {hideForm ?
                        "Add Email"
                    :
                        "Hide"
                    }
                </div>
            </div>
        <form hidden={hideForm} onSubmit={submit}>
            <input className="textInputs" id="emailInput" type="email" name="email" onChange={addEmail}/>
            <input className="emailSubmitButton" type="submit" value="Submit" />
        </form>
    </>)
}
