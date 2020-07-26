const GET_DATA_KOTA = "GET_DATA_KOTA";

const getDataKota = (data) => {
    return {
        type: GET_DATA_KOTA,
        data,
    };
};

const fetchDataKota = (id) => async (dispatch) => {
    console.log(id, "apa sih id nya");
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

    dispatch(getDataKota(result));
};

export { GET_DATA_KOTA, getDataKota, fetchDataKota };
