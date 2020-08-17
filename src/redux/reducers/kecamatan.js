import { GET_DATA_KECAMATAN } from "../actions";

const initialState = [];

export default (state = initialState, actions) => {
    switch (actions.type) {
        case GET_DATA_KECAMATAN:
            return actions.data;
        default:
            return state;
    }
};
