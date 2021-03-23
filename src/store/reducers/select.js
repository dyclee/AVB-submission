import { SELECT } from '../actions/select';

export default function selectReducer(state = {}, action)  {
    const newState = {...state};
    switch(action.type) {
        case SELECT:
            return action.contact
        default:
            return null
    }
}
