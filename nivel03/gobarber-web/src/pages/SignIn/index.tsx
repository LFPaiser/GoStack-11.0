import React from 'react'
import { FiLogIn } from 'react-icons/fi'

import { Container, Content, Background } from './styles'
import logoImg from '../../assets/logo.svg'

const SignIn: React.FC = () => (
  <Container>
    <Content>
      <img src={logoImg} alt="GoBarber" />

      <form>
        <h1>Faça seu Logon</h1>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Senha" />
        <button type="submit">Entrar</button>
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

export default SignIn
