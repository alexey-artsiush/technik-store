import React, { useState } from 'react'
import { Button, Card, Container, Form } from 'react-bootstrap'
import {Row} from 'react-bootstrap'
import { NavLink, useLocation } from 'react-router-dom'
import { login, registration } from '../http/userAPI'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts'

export const  Auth = () => {
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const click = async () => {
    if(isLogin) {
      const response = await login()
    } else {
      const response = await registration(email, password)
      console.log(response);
    }
  }
  return (
    <Container 
      className='d-flex justify-content-center align-item-center'
      style = {{height: window.innerHeight - 54}}
      >
        <Card style={{width: 600}} className="p-5">
          <h2 className='m-auto'>{isLogin ? 'Авторизация': 'Регистрация'}</h2>
          <Form className='d-flex flex-column'>
            <Form.Control
              className='mt-2'
              placeholder='Введите email'
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
             <Form.Control
              className='mt-3'
              placeholder='Введите пароль'
              value={password}
              type="password"
              onChange={e => setPassword(e.target.value)}
            />
            <Row className='d-flex justify-content-between mt-3 pl-3 pr-3'>
              {isLogin ? 
              <div>
                Нет аккаунта? <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся!</NavLink>
              </div>
              :
              <div>
                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдите!</NavLink>
              </div>
              }
              <Button
                variant = {"outline-success"}
                >
                  {isLogin ? 'Войти' : 'Регистрация'}
              </Button>
            </Row>
          </Form>
        </Card>
    </Container>

  )
}
