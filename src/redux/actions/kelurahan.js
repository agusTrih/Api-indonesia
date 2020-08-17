const GET_DATA_KELURAHAN = "GET_DATA_KELURAHAN";

const getDataKeelurahan = (data) => {
    return {
        type: GET_DATA_KELURAHAN,
        data,
    };
};

const fetchDataKelurahan = (id) => async (dispatch) => {
    const url = `https://dev.farizdotid.com/api/daerahindonesia/kelurahan?id_kecamatan=${id}`;

    const options = {
        method: "GET",
        headers: {
            "content-type": "application/json",
        },
    };
    const response = await fetch(url, options);
    const result = await response.json();

    dispatch(getDataKelurahan(result));
};

export { getDataKeelurahan, fetchDataKelurahan, GET_DATA_KELURAHAN };
