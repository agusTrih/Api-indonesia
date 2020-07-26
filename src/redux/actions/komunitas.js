const GET_DATA_COMMUNITY = "GET_DATA_COMMUNITY";

const getDataCommunity = (data) => {
    return {
        type: GET_DATA_COMMUNITY,
        data,
    };
};

const fetchDataCommunity = () => async (dispatch) => {
    const url = `${process.env.BACKEND}/komunitas`;

    const options = {
        method: "GET",
        headers: {
            "content-type": "application/json",
        },
    };
    const response = await fetch(url, options);
    const result = await response.json();
    console.log(result);

    dispatch(getDataCommunity(result));
};

export { GET_DATA_COMMUNITY, getDataCommunity, fetchDataCommunity };
