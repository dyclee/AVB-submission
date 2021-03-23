import React from 'react';
import { useDispatch } from 'react-redux';

import { select } from '../../store/actions/select';

export const ContactListItem = ({entry}) => {

    const dispatch = useDispatch();

    const selectContact = (contact) => {
        dispatch(select(contact));
    }

    return (
        <div className="contactListItem" onClick={() => selectContact(entry[1])}>
            {entry[1].firstName} {entry[1].lastName}
        </div>
    )
}
