import React from "react";
import Campaigns from "../Componets/Campaigns";
import { Col, Container, Row } from "react-bootstrap";

import Charts from "../Componets/Chart";



const DashBoard = () => {
    return (
        <>

           
            <div className="Dashboard-main-section">
                <Container>
                    <Row>
                        <Col lg={7}>
                            <Campaigns />
                        </Col>

                        <Col lg={5}>
                        <Charts/>
                        </Col>


                    </Row>
                </Container>
            </div>
        </>
    )
}

export default DashBoard;