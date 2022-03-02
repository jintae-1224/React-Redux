import { SHOW_ALL, SHOW_COMPLETE } from "../actions";

const initialsState = 'ALL';

export default function filter(previousState = initialsState, action){
    if (action.type === SHOW_COMPLETE){
        return "COMPLETE"
    }

    if (action.type === SHOW_ALL){
        return "ALL"
    }

    return previousState;
}
