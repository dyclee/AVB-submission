import React, { useState } from 'react';

export const EmailForm = ({emails, setEmails}) => {
    const [email, setEmail] = useState("");
    const [hideForm, setHideForm] = useState(true);

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
                <div>
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
