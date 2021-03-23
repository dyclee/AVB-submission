import React, { useState, useEffect} from 'react';
import { NavLink } from 'react-router-dom';

export const ContactList = () => {
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
        (async () => {
            const res = await fetch(`https://avb-contacts-api.herokuapp.com/contacts/paginated`)
            const obj = await res.json();
            if (obj.contacts.length) {
                setContacts(obj.contacts);
            }
        })()
    },[])
    if (contacts.length === 0) {
        return null;
    }
    return (<>
        <div className="contactList">
            {contacts.map((contact) => (<>
                <NavLink key={contact.id} to={`/contacts/${contact.id}`}>
                    <div className="contactListItem">
                        {contact.firstName} {contact.lastName}
                    </div>
                </NavLink>
            </>))}
        </div>
    </>)
}
