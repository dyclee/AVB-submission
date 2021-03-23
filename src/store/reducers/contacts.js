import { GET_CONTACTS, CREATE, UPDATE, REMOVE } from '../actions/contacts';

export default function contactReducer(state = {}, action)  {
    const newState = {...state};
    switch(action.type) {
        case GET_CONTACTS:
            action.contacts.map((contact) => {
                newState[contact.id] = contact
            })
            return newState
        case CREATE:
            newState[action.contact.id] = action.contact
            return newState
        case UPDATE:
            newState[action.contact.id] = action.contact
            return newState
        case REMOVE:
            delete newState[action.contact.id]
            return newState
        default:
            return state
    }
}
