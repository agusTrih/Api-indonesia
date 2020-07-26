import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchDataCommunity } from "../../redux/actions";

function Komunitas(props) {
    useEffect(() => {
        props.dispatch(fetchDataCommunity());
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            {props.provinsi !== undefined &&
                props.provinsi.map((item) => {
                    return (
                        <div>
                            <h1>{item.nama}</h1>
                        </div>
                    );
                })}
        </div>
    );
}

const mapStateToProps = (state) => {
    console.log(state.komunitas);
    return {
        provinsi: state.komunitas.provinsi,
    };
};
export default connect(mapStateToProps)(Komunitas);
