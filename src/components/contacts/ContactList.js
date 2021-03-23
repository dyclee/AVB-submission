import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { ContactListItem } from './ContactListItem';

export const ContactList = () => {
    const [formVisible, setFormVisible] = useState(true);

    const contacts = useSelector(state => state.contactReducer);

    let entries = Object.entries(contacts);
    if (entries.length === 0) {
        return (<>
        </>)
    }
    let sorted = entries.sort((a,b) => a[1].firstName.localeCompare(b[1].firstName))

    return (<>
        <div className="contactList">
            {sorted.map((entry) => (
                <ContactListItem key={entry[1].id} entry={entry} />
            ))}
        </div>
    </>)
}
