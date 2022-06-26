import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite';
import { Context } from '..';
import { Button, Row, Col, Card, Image } from 'react-bootstrap';


export const Basket = observer (() => {
  const {basket} = useContext(Context)

  return (
    <div>
      {basket.basket.length > 0 ? 
      <div>
        <div className="d-flex justify-content-around">
          <h3>Товар</h3>
          <h3>Количество</h3>
          <h3>Стоимость</h3>
        </div>

        {basket.basket.map(device =>
        <Card key = {device.id}>
          <Row>
            <Col className='d-flex flex-column align-items-center' md ={2}>
              <Image  width={150} height={150} src={process.env.REACT_APP_API_URL + device.img}/> 
              <Button onClick={() => basket.removeDevice(device.id)} variant="light" className='pt-1 pb-1 pl-3 pr-5'>Удалить</Button>
            </Col>
            <Col md={3} className="fw-bold fs-2">{device.name} <br></br> {device.description}</Col>
            <Col md={4}> <input className='mt-4' type="number"/></Col>
            <Col md={3}>{device.price}$</Col>
          </Row>
        </Card>
      )}
        <Button className='mt-3 w-50 ' variant="success">Оформить заказ</Button>
      </div>
      :
      <p className='text-center mt-5'>Корзина пуста</p>
      }
    </div>
  )
})
