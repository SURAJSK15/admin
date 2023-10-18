import React, { useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import img1 from "../Images/text.jpg";
import img2 from "../Images/media.jpg";
import { NavLink } from "react-router-dom";

const CreateAds = () => {
    const [navLinkValue, setNavLinkValue] = useState("createads");
    const checkboxRefs = {
        card1: useRef(null),
        card2: useRef(null),

    };

    const AdsSection = (card) => {

        const checkboxRef = checkboxRefs[card];


        if (card === "card1") {
            setNavLinkValue("textads");
        } else if (card === "card2") {
            setNavLinkValue("mediaads");
        }


        checkboxRef.current.checked = !checkboxRef.current.checked;


        Object.keys(checkboxRefs).forEach((key) => {
            if (key !== card) {
                checkboxRefs[key].current.checked = false;
            }
        });
    };

    return (
        <>

            <div className="main-section-ads">
                <Container>
                    <Row className="justify-content-center">
                        <Col md={4}>
                            {/* <NavLink to="/textads"> */}
                            <div className="main-card-ads" onClick={() => AdsSection('card1')}>
                                <div className="check-section">
                                    <input type="checkbox" ref={checkboxRefs.card1} />
                                </div>
                                <div className="ads-img">
                                    <img src={img2} className="img-fluid" alt="img1" />
                                </div>
                                <div className="ads-content">
                                    <p>Create</p>
                                    <h6>Text AD</h6>
                                </div>
                            </div>

                        </Col>

                        <Col md={4}>
                            {/* <NavLink to="/mediaads"> */}
                            <div className="main-card-ads" onClick={() => AdsSection('card2')}>
                                <div className="check-section">
                                    <input type="checkbox" ref={checkboxRefs.card2} />
                                </div>
                                <div className="ads-img">
                                    <img src={img1} className="img-fluid" alt="img1" />
                                </div>
                                <div className="ads-content">
                                    <p>Create</p>
                                    <h6>Media AD</h6>
                                </div>
                            </div>


                        </Col>
                    </Row>

                    <div className="add-submit-btn">
                        <NavLink className="main-btn" to={`/${navLinkValue}`}>Next</NavLink>
                    </div>
                </Container>
            </div>

        </>
    )
}

export default CreateAds;