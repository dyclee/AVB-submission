import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { ContactListItem } from './ContactListItem';

export const ContactList = () => {
    const [formVisible, setFormVisible] = useState(true);

    const contacts = useSelector(state => state.contactReducer);
    const selected = useSelector(state => state.selectReducer);

    let entries = Object.entries(contacts);
    if (entries.length === 0) {
        return (<>
        </>)
    }
    let sorted = entries.sort((a,b) => a[1].firstName.localeCompare(b[1].firstName))

    return (<>
        <div className="contactList">
            {sorted.map((entry) => {
                if (selected && selected.id === Number(entry[0])) {
                    return <ContactListItem key={entry[1].id} selected={true} entry={entry} />
                }
                return <ContactListItem key={entry[1].id} selected={false} entry={entry} />
            })}
        </div>
    </>)
}
