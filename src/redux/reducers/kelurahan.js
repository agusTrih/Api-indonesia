import { GET_DATA_KELURAHAN } from "../actions";

const initialState = [];

export default (state = initialState, actions) => {
    switch (actions.type) {
        case GET_DATA_KELURAHAN:
            return actions.data;
        default:
            return state;
    }
};
