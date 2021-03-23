export const GET_CONTACTS = "GET CONTACTS";
export const CREATE = "CREATE";
export const UPDATE = "UPDATE";
export const REMOVE = "REMOVE";


export const getContacts = (contacts) => ({
    type: GET_CONTACTS,
    contacts
})
export const create = (contact) => ({
    type: CREATE,
    contact
})
export const update = (contact) => ({
    type: UPDATE,
    contact
})
export const remove = (contact) => ({
    type: REMOVE,
    contact
})
