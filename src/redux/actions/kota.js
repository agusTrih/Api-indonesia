const { getDataCommunity } = require("./komunitas");

const GET_DATA_KOTA = "GET_DATA_KOTA";

const getDataKota = (data) => {
    return {
        type: GET_DATA_KOTA,
        data,
    };
};

const fetchDataKota = (id) => async (dispatch) => {
    const url = `https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${id}`;
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
