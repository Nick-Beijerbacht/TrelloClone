const ADD_CARD = "ADD_CARD";
const EDIT_CARD	= "EDIT_CARD";

const initialState = {
    cards: []
};

export default function boardReducer(state = initialState, action) {
    if (action.type === ADD_CARD) {
        return Object.assign({}, state, {
            cards: state.cards.concat(action.payload)
        });
    }
    else if (action.type === EDIT_CARD) {
        return Object.assign({}, state, {
            cards: state.cards.map(e => (e.id === action.payload.draggableId ? Object.assign({}, e, {"listId": action.payload.destination.droppableId}) : e))
        });
    }
    return state;
};

export function addCard(payload) {
    return { type: "ADD_CARD", payload }
};

export function editCard(payload) {
    return { type: "EDIT_CARD", payload }
};

