import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchDataKota } from "../../redux/actions/kota";
import { connect } from "react-redux";
import { Card, Button, CardTitle, CardText } from "reactstrap";
import Styled from "styled-components";

const FlexWrap = Styled.div`
display: flex;
flex-wrap: wrap;
`;

function Kota(props) {
    const { id } = useParams();
    useEffect(() => {
        props.dispatch(fetchDataKota(id));

        // eslint-disable-next-line
    }, []);
    return (
        <div>
            <h1 style={{ textAlign: "center", padding: "20px" }}>
                Nama-nama Kabupaten/Kota
            </h1>
            <FlexWrap>
                {props.kota !== undefined &&
                    props.kota.map((item, index) => {
                        const nomor = index + 1;
                        return (
                            <Card
                                body
                                key={item.id}
                                style={{
                                    width: "25%",
                                    height: "200px",
                                    textAlign: "center",
                                }}
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
                                <Button>Go somewhere</Button>
                            </Card>
                        );
                    })}
            </FlexWrap>
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
