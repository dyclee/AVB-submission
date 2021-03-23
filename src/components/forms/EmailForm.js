import React, { useState } from 'react';

export const EmailForm = ({emails, setEmails}) => {
    const [email, setEmail] = useState("");

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
        <form onSubmit={submit}>
            <input className="textInputs" id="emailInput" type="email" name="email" onChange={addEmail}/>
            <input type="submit" value="Add" />
        </form>
    </>)
}
