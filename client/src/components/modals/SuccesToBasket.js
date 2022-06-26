import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import { BASKET_ROUTE, SHOP_ROUTE } from '../../utils/consts'

export const SuccesToBasket = ({show, onHide}) => {

  return (
    <Modal
        size="m"
        show={show}
        onHide={onHide}
        aria-labelledby="example-modal-sizes-title-sm"
    >
        <Modal.Header closeButton>Товар добавлен в корзину!</Modal.Header>
        <Modal.Body className='d-flex justify-content-center'>
          <Button className='m-2' variant={'secondary'}><NavLink className="text-white" to={BASKET_ROUTE}>В корзину</NavLink></Button>
          <Button className='m-2' variant={'secondary'}><NavLink className="text-white" to={SHOP_ROUTE}>Продолжить покупки</NavLink></Button>
        </Modal.Body>
    </Modal>
    )
  }
