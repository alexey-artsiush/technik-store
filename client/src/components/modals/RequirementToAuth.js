import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { NavLink } from 'react-router-dom';
import { LOGIN_ROUTE } from '../../utils/consts'

export const RequirementToAuth = ({show, onHide}) => {

  return (
    <Modal
        size="m"
        show={show}
        onHide={onHide}
        aria-labelledby="example-modal-sizes-title-sm"
    >
        <Modal.Header closeButton>Для оформления заказа необходимо авторизироваться!</Modal.Header>
        <Modal.Body className='d-flex justify-content-center'>
            <Button className='m-2' variant={'secondary'}><NavLink className="text-white" to={LOGIN_ROUTE}>Авторизироваться</NavLink></Button>
        </Modal.Body>
    </Modal>
  )
}
