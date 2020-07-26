import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchDataKota } from "../../redux/actions/kota";
import { connect } from "react-redux";

function Kota(props) {
    const { id } = useParams();
    useEffect(() => {
        props.dispatch(fetchDataKota(id));

        // eslint-disable-next-line
    }, []);
    return (
        <div>
            {props.kota !== undefined &&
                props.kota.map((item) => {
                    return (
                        <div key={item.id}>
                            <h1>{item.nama}</h1>
                        </div>
                    );
                })}
        </div>
    );
}

const mapStateToProps = (state) => {
    console.log(state);
    return {
        kota: state.kota.kota_kabupaten,
    };
};

export default connect(mapStateToProps, null)(Kota);
