import { GET_DATA_KOTA } from "../actions";

const initialState = [];

export default (state = initialState, actions) => {
    switch (actions.type) {
        case GET_DATA_KOTA:
            return actions.data;
        default:
            return state;
    }
};
