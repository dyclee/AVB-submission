import React from 'react';
import { useDispatch } from 'react-redux';

import { ContactList } from './ContactList';
import { select } from '../../store/actions/select';

export const ContactsContainer = () => {
    const dispatch = useDispatch();
    const addContact = (e) => {
        dispatch(select(null));
    }

    return (<>
        <div className="contactsContainer">
            <div className="contactsHeader">
                <h3 className="contactsTitle">Contacts</h3>
                <button className="addContact" onClick={addContact}>Add</button>
            </div>
            <ContactList />
        </div>
    </>)
}
