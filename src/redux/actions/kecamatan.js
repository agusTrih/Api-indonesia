const GET_DATA_KECAMATAN = "GET_DATA_KECAMATAN";

const getDataKecamatan = (data) => {
    return {
        type: GET_DATA_KECAMATAN,
        data,
    };
};

const fetchDataKecamatan = (id) => async (dispatch) => {
    const url = `https://dev.farizdotid.com/api/daerahindonesia/kecamatan?id_kota=${id}`;

    const options = {
        method: "GET",
        headers: {
            "content-type": "application/json",
        },
    };
    const response = await fetch(url, options);
    const result = await response.json();

    dispatch(getDataKecamatan(result));
};

export { getDataKecamatan, GET_DATA_KECAMATAN, fetchDataKecamatan };
