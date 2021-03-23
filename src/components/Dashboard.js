import React from "react";
import { useSelector } from 'react-redux';

import { ContactsContainer } from './contacts/ContactsContainer';
import { AddContactForm } from './forms/AddContactForm';
import { EditContactForm } from './forms/EditContactForm';
export const Dashboard = () => {
    const selected = useSelector(state => state.selectReducer);

    return (
        <div className="dashboard">
            <ContactsContainer />
            {selected ?
                <EditContactForm selected={selected} />
                :
                <AddContactForm />
            }
        </div>
    )
}
