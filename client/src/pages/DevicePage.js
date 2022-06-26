import React, {useEffect, useState, useContext} from 'react';
import {Button, Card, Col, Container, Image, Row, Modal} from "react-bootstrap";
import bigStar from '../assets/bigStar.png'
import {NavLink, useParams} from 'react-router-dom'
import {fetchOneDevice} from "../http/deviceAPI";
import { Context } from '..';
import { Rating } from '../components/rating/Rating';
import { RequirementToAuth } from '../components/modals/RequirementToAuth';
import { SuccesToBasket } from '../components/modals/SuccesToBasket';

export const DevicePage = () => {
    const {user} = useContext(Context)
    const [device, setDevice] = useState({info: []})
    const {id} = useParams()
    const {basket} = useContext(Context)
    const[requirementToAuthVisible, setRequirementToAuthVisible] = useState(false)
    const[succesToBasket, setSuccesToBasket] = useState(false)

    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])

    const click = () => {
        if(user.isAuth == true) {
            basket.setDevice(device)
            setSuccesToBasket(true)
        }
        else if(user.isAuth == false) {
            setRequirementToAuthVisible(true)
        }
    }
    

    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                  <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img}/>
                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2>{device.name}</h2>
                        <div
                            className="d-flex align-items-center justify-content-center"
                            style={{background: `url(${bigStar}) no-repeat center center`, width:240, height: 240, backgroundSize: 'cover', fontSize:64}}
                        >
                            {device.rating}
                        </div>
                    </Row>
                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column align-items-center justify-content-around"
                        style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
                    >
                        <h3>От: {device.price} руб.</h3>
                        <Button variant={"outline-dark"} onClick={()=>click()}>Добавить в корзину</Button>

                    </Card>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h1>Характеристики</h1>
                {device.info.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title}: {info.description}
                    </Row>
                )}
                <Rating/>
            </Row>

            <SuccesToBasket show={succesToBasket}  onHide={() => setSuccesToBasket(false)} />
            <RequirementToAuth show={requirementToAuthVisible} onHide={() => setRequirementToAuthVisible(false)} />
        </Container>
    );
};


