import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchDataCommunity } from "../../redux/actions";
import { Link } from "react-router-dom";
import { Card, Button, CardTitle, CardText } from "reactstrap";
import Styled from "styled-components";

const FlexWrap = Styled.div`
display: flex;
flex-wrap: wrap;
`;
function Komunitas(props) {
    useEffect(() => {
        props.dispatch(fetchDataCommunity());
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            <h1 style={{ textAlign: "center", padding: "20px 0" }}>
                Nama-nama Provinsi di Indonesia
            </h1>
            <FlexWrap>
                {props.provinsi !== undefined &&
                    props.provinsi.map((item, index) => {
                        const nomor = index + 1;
                        return (
                            <Card
                                body
                                key={item.id}
                                style={{ width: "25%", height: "200px" }}
                            >
                                <CardTitle>
                                    <strong>
                                        {" "}
                                        No {nomor}: {item.nama}
                                    </strong>
                                </CardTitle>
                                <CardText>
                                    Untuk mengetahui detail tempatnya silahkan
                                    kunjungi langsung
                                </CardText>
                                <Link to={`kota/${item.id}`}>
                                    <Button>Go somewhere</Button>
                                </Link>
                            </Card>
                        );
                    })}
            </FlexWrap>
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
