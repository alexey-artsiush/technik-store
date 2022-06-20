import React from 'react'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'
import bigStar from '../assets/bigStar.png'

export const DevicePage = () => {
  const device =  {id: 1, name: "12 pro", price: 900, rating: 5, img: 'https://cdn21vek.by/img/galleries/6514/570/preview_b/iphone1264gbmjnm3_apple_608bde7c26aef.png'}
  const description = [
    {id:1, title: 'Оперативная память', description: '5 гб'},
    {id:2, title: 'Процессор', description: '5 гб'},
    {id:3, title: 'Видеокарта', description: '5 гб'},
    {id:4, title: 'Камера', description: '5 гб'},
    {id:5, title: 'Экран', description: '5 гб'},

  ]
  
  return (
    <Container className='mt-3'>
      <Row>
        <Col md={4}>
          <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img}/>
        </Col>
      
      <Col md={4}>
        <Row className='d-flex flex-column align-items-center'>
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
         className='d-flex flex-column align-items-center justify-content-around'
         style={{width: 300, height: 300, fontSize: 32, border: '5px solid lightgray'}}
         >
          <h3>от {device.price}$</h3>
          <Button variant={'outline-dark'}>Добавить в корзину</Button>
        </Card>
      </Col>

      </Row>
      <Row className='d-flex flex-column m-3'>
        <h1>Характеристики</h1>
        {description.map((info, index) =>
          <Row key = {info.id} style={{background: index % 2 ===0? 'lightgray' : 'transparent', padding: 10}}>
            {info.title}: {info.description}
          </Row>)}
      </Row>
    </Container>
  )
}