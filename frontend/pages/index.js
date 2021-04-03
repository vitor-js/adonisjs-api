//# packages
import React, { useState } from 'react'

//# components
import { AvForm, AvField } from 'availity-reactstrap-validation'
import { Container, Row, Col, Button, Toast } from 'reactstrap'
import { IndexContainer } from '../styles/pages/index/styles'
import { toast } from 'react-toastify'

//# services
import api from '../service/api'

function Index() {
  const [isFormLoginActive, setIsFormLoginActive] = useState(true)
  const [password, setPassword] = useState('')
  const [error, setError] = useState({
    status: false,
    message: ''
  })
  const handleLogin = async (event, values) => {
    try {
      const data = {
        email: values.Email,
        password: values.Password
      }
      const response = await api.post('auth', data)
    } catch {
      toast.error('Erro ao efetuar login, email ou senha incompativeis.')
    }
  }

  const handleRegister = async (event, values) => {
    if (values.Password !== values.confirmPassword) {
      console.log(values.Password, values.confirmPassword)
      setError({
        ...error,
        status: true,
        message: 'As senhas precisam ser iguais'
      })
      return
    }
    try {
      const data = {
        email: values.EmailRegister,
        password: values.Password,
        username: values.UsernameRegister
      }
      await api.post('register', data)
      toast.success('Usuário cadastrado com sucesso, efetua o login')
      setIsFormLoginActive(!isFormLoginActive)
    } catch {
      toast.error('Erro ao cadastrar suário, tente novamente.')
    }
  }

  return (
    <IndexContainer>
      <Row className="d-flex align-items-center m-0">
        <Col md={4} className="p-5">
          {isFormLoginActive ? (
            <div className="containerForm p-3 ">
              <h1>Sign in </h1>
              <h2>Log in and access our platform</h2>
              <div className=" mt-3">
                <AvForm onValidSubmit={handleLogin}>
                  <AvField
                    name="Email"
                    label="Email"
                    type="text"
                    errorMessage="Invalid Email"
                    validate={{
                      required: { value: true }
                    }}
                  />
                  <AvField
                    name="Password"
                    label="Password"
                    type="password"
                    errorMessage="Invalid password"
                    value={password}
                    validate={{
                      required: { value: true }
                    }}
                  />
                  <Button className="w-100 button-orange mt-2" color="primary">
                    Login
                  </Button>
                </AvForm>
                <div className="mt-3">
                  <p>
                    Do not have an account registered,{' '}
                    <span
                      onClick={() => setIsFormLoginActive(!isFormLoginActive)}
                    >
                      make your registration
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <div className="containerForm">
              <h1>Register </h1>
              <h2>Make your registration and access our platform</h2>
              <div className="mt-3">
                <AvForm onValidSubmit={handleRegister}>
                  <AvField
                    name="EmailRegister"
                    label="Email"
                    type="text"
                    errorMessage="Invalid Email"
                    validate={{
                      required: { value: true }
                    }}
                  />
                  <AvField
                    name="UsernameRegister"
                    label="Username"
                    type="text"
                    errorMessage="Invalid Username"
                    validate={{
                      required: { value: true }
                    }}
                  />
                  <AvField
                    name="Password"
                    label="Password"
                    type="password"
                    errorMessage="Invalid password"
                    validate={{
                      required: { value: true }
                    }}
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                  />

                  <AvField
                    name="confirmPassword"
                    label="Confirm Password"
                    type="password"
                    errorMessage="Invalid password"
                    validate={{
                      required: { value: true }
                    }}
                  />
                  {error.status ? (
                    <div
                      className="alert alert-danger"
                      role="alert"
                      style={{ cursor: 'pointer' }}
                      onClick={() => setError({ ...error, status: false })}
                    >
                      * {error.message}
                    </div>
                  ) : null}
                  <Button className="w-100 button-orange mt-2" color="primary">
                    Cadastrar
                  </Button>
                </AvForm>
                <div className="mt-3">
                  <p>
                    Do not have an account ,{' '}
                    <span
                      onClick={() => setIsFormLoginActive(!isFormLoginActive)}
                    >
                      make your login
                    </span>
                  </p>{' '}
                </div>
              </div>
            </div>
          )}
        </Col>
        <Col md={8} className="w-100 h-100 p-0">
          <div className="bg-index" />
        </Col>
      </Row>
    </IndexContainer>
  )
}

export default Index
