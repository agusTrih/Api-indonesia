import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataKelurahan } from "../../redux/actions";
import { Card, Button, CardTitle, CardText } from "reactstrap";
import Styled from "styled-components";

const FlexWrap = Styled.div`
display: flex;
flex-wrap: wrap;
`;
function Kelurahan() {
    const dispatch = useDispatch();
    const { id } = useParams();
    const data = useSelector((state) => state.kelurahan);
    console.log(data, "data kelurahan");
    useEffect(() => {
        dispatch(fetchDataKelurahan(id));
    }, [dispatch]);
    return (
        <div>
            <h1 style={{ textAlign: "center", padding: "20px 0" }}>
                Nama-nama Kelurahan di Indonesia
            </h1>
            <FlexWrap>
                {data.kelurahan !== undefined &&
                    data.kelurahan.map((item, index) => {
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

export default Kelurahan;
