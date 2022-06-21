import React, { useState } from 'react'
import { Form, Modal, Button } from 'react-bootstrap'
import { createBrand, createType } from '../../http/deviceAPI'


export const CreateBrand = ({show, onHide}) => {
  const [value, setValue] = useState('')
  const addBrand = () => {
    createBrand({name: value}).then(data => {
      setValue('')
      onHide()
    })
  }
  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить тип
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
            <Form.Control 
            placeholder={'Введите название типа'}
            value={value}
            onChange={e => setValue(e.target.value)}
            />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='outline-danger' onClick={onHide}>Закрыть</Button>
        <Button variant='outline-succes' onClick={addBrand}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  )
}
