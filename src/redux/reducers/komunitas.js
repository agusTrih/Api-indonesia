import { GET_DATA_COMMUNITY } from "../actions";

const initialState = [];

export default (state = initialState, actions) => {
    switch (actions.type) {
        case GET_DATA_COMMUNITY:
            return actions.data;
        default:
            return state;
    }
};
