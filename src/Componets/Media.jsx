import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { NavLink } from "react-router-dom";

import { useNavigate } from 'react-router-dom';

const MediaAds = () => {
const [Modal,SetModal] = useState(false);
const navigate = useNavigate(); 


const SubmitAds = () => {
    
    SetModal(true)
    setTimeout(() => {
       navigate('/createads');
        SetModal(false);
      }, 1000);
}

    return (
        <>
            <div className="submit-section" style={{ display: Modal ? 'flex' : 'none' }}>
                <div className="submit-modal">
                    <i class="fa-solid fa-circle-check"></i>
                    <p>Submitted</p>
                </div>

            </div>
            <div className="main-textAd-section">
                <Container>
                    <div className="main-text-form-card">
                        <h6> Create Text and Media</h6>
                        <Row>
                            <Col lg={6}>
                                <Row className="align-items-center">
                                    <Col lg={12}>

                                        <div className="text-add-form-style">
                                            <p> Heading 01</p>
                                            <input type="text" name="head1" className="form-control" placeholder="Add a heading that would make users interested" />
                                        </div>
                                    </Col>

                                    <Col lg={12}>

                                        <div className="text-add-form-style">
                                            <p> Heading 02</p>
                                            <input type="text" name="head2" className="form-control" placeholder="Add a heading that would make users interested" />
                                        </div>
                                    </Col>


                                </Row>

                            </Col>
                            <Col lg={6}>
                                <div className="text-add-form-style">
                                    <p> Description 01</p>
                                    <textarea rows={4} name="msg" className="form-control" placeholder="Add a heading that would make users interested" />
                                </div>
                            </Col>

                            <Col lg={4}>
                                <div className="text-add-form-style">
                                    <p> Landscape Marketing Image(1.9.1)</p>
                                    <input type="text" name="head2" className="form-control" />
                                </div>
                            </Col>
                            <Col lg={4}>
                                <div className="text-add-form-style">
                                    <p> Portrait Marketing Image(4:5)</p>
                                    <input type="text" name="head2" className="form-control" />
                                </div>
                            </Col>

                            <Col lg={4}>
                                <div className="text-add-form-style">
                                    <p> Square Marketing Image(1:1)</p>
                                    <input type="text" name="head2" className="form-control" />
                                </div>
                            </Col>
                            <Col lg={12}>
                                <div className="text-add-form-style">
                                    <p> Video URL</p>
                                    <input type="text" name="head1" className="form-control" />
                                </div>
                            </Col>
                            <Col lg={6}>
                                <div className="text-add-form-style">
                                    <p> Bussiness Name</p>
                                    <input type="text" name="head2" className="form-control" />
                                </div>
                            </Col>

                            <Col lg={6}>
                                <div className="text-add-form-style">
                                    <p> Button Label</p>
                                    <select class="form-select" aria-label="Default select example">
                                        <option selected> select menu</option>
                                        <option value="1">Gold</option>
                                        <option value="2">Sliver</option>
                                        <option value="3">Platinium</option>
                                    </select>
                                </div>
                            </Col>

                            <Col lg={12}>
                                <div className="text-add-form-style">
                                    <p> Website URL</p>
                                    <input type="text" name="head1" className="form-control" />
                                </div>
                            </Col>
                        </Row>

                        <div className="text-main-btn-section">
                            <NavLink to="/createads" className="main-btn back-btn">Back</NavLink>
                            <button to="" type="submit" className="main-btn" onClick={SubmitAds}>Submit</button>
                        </div>
                    </div>
                </Container>
            </div>

        </>
    )
}

export default MediaAds;