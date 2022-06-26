import React from 'react'
import { Col, Card, Image, Button } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'
import { DEVICE_ROUTE } from '../utils/consts'

export const DeviceItem = ({device}) => {
    const history = useHistory()

  return (
    <Col md={3} className={"mt-3"} onClick={()=> history.push(DEVICE_ROUTE + '/' + device.id)}>
        <Card style={{width: 150, cursor: 'pointer'}} border={'light'}>
            <Image width={150} height={150} src={process.env.REACT_APP_API_URL + device.img}/>
            <div className='text-black-50 mt-1 d-flex justify-content-between align-items-center'>
                <div className='d-flex align-items-center'>
                    <div>{device.name}</div>
                </div>
            </div>
            <Button size='sm'>В корзину</Button>
        </Card>
    </Col>

  )
}
