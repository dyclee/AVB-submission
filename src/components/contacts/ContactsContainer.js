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
                <div className="addContact" onClick={addContact}>
                    <i className="fas fa-plus-circle fa-2x"></i>
                </div>
            </div>
            <ContactList />
        </div>
    </>)
}
