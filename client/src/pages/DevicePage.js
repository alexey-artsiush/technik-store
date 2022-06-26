import React, {useEffect, useState, useContext} from 'react';
import {Button, Card, Col, Container, Image, Row, Modal} from "react-bootstrap";
import bigStar from '../assets/bigStar.png'
import {NavLink, useParams} from 'react-router-dom'
import {fetchOneDevice} from "../http/deviceAPI";
import { Context } from '..';
import { SHOP_ROUTE, BASKET_ROUTE, LOGIN_ROUTE } from '../utils/consts';

export const DevicePage = () => {
    const {user} = useContext(Context)
    const [smShow, setSmShow] = useState(false);
    const [authShow, setAuthShow] = useState(false);
    const [device, setDevice] = useState({info: []})
    const {id} = useParams()
    const {basket} = useContext(Context)
    useEffect(() => {
        fetchOneDevice(id).then(data => setDevice(data))
    }, [])

    const click = () => {
        if(user.isAuth == true) {
            basket.setDevice(device)
            setSmShow(true)
        }
        else if(user.isAuth == false) {
            setAuthShow(true)
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
            </Row>

            <Modal
                size="m"
                show={smShow}
                onHide={() => setSmShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header closeButton>Товар добавлен в корзину!</Modal.Header>
                <Modal.Body className='d-flex justify-content-center'>
                    <Button className='m-2' variant={'secondary'}><NavLink className="text-white" to={BASKET_ROUTE}>В корзину</NavLink></Button>
                    <Button className='m-2' variant={'secondary'}><NavLink className="text-white" to={SHOP_ROUTE}>Продолжить покупки</NavLink></Button>
                </Modal.Body>
            </Modal>

            <Modal
                size="m"
                show={authShow}
                onHide={() => setAuthShow(false)}
                aria-labelledby="example-modal-sizes-title-sm"
            >
                <Modal.Header closeButton>Для оформления заказа необходимо авторизироваться!</Modal.Header>
                <Modal.Body className='d-flex justify-content-center'>
                    <Button className='m-2' variant={'secondary'}><NavLink className="text-white" to={LOGIN_ROUTE}>Авторизироваться</NavLink></Button>
                </Modal.Body>
            </Modal>

        </Container>

        
    );
};


