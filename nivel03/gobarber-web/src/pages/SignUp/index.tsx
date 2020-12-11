/* eslint-disable import/extensions */
import React from 'react'
import { FiLogIn, FiMail, FiLock } from 'react-icons/fi'

import logoImg from '../../assets/logo.svg'

import Input from '../../components/Input'
import Button from '../../components/Button'

import { Container, Content, Background } from './styles'

const SignUp: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="GoBarber" />

      <form>
        <h1>Faça seu Cadastro</h1>
        <Input icon={FiMail} name="email" placeholder="Email" />
        <Input icon={FiLock} name="password" placeholder="Senha" />
        <Button type="submit">Entrar</Button>
        <a href="recovery">Esqueci a senha</a>
      </form>

      <a href="New">
        <FiLogIn />
        Criar conta
      </a>
    </Content>
    <Background />
  </Container>
)

export default SignUp
