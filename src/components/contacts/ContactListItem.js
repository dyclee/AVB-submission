import React from 'react';
import { useDispatch } from 'react-redux';

import { select } from '../../store/actions/select';

export const ContactListItem = ({entry, selected}) => {

    const dispatch = useDispatch();

    const selectContact = (contact) => {
        dispatch(select(contact));
    }
    if (selected === true) {
        return (
        <div className="contactListItem selected" onClick={() => selectContact(entry[1])}>
            {entry[1].firstName} {entry[1].lastName}
        </div>
        )
    }
    return (
        <div className="contactListItem" onClick={() => selectContact(entry[1])}>
            {entry[1].firstName} {entry[1].lastName}
        </div>
    )
}
