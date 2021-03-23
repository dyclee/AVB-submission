import React from 'react';
import { ContactList } from './ContactList';

export const ContactsContainer = () => {
    return (<>
        <div className="contactsContainer">
            <div className="contactsHeader">
                <h3 className="contactsTitle">Contacts</h3>
                <button className="addContact">Add</button>
            </div>
            <ContactList />
        </div>
    </>)
}
