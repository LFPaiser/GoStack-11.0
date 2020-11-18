import styled from 'styled-components'
import { shade } from 'polished'

import BackgroundImg from '../../assets/sign-in-background.png'

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin: 24px 0;
    }

    input {
      background: #232129;
      color: #f4ede8;
      border-radius: 10px;
      border: 2px solid #232129;
      padding: 16px;
      width: 100%;

      &::placeholder {
        color: #666360;
      }

      & + input {
        margin-top: 8px;
      }
    }

    button {
      background: #ff9000;
      color: #312e38;
      border-radius: 10px;
      border: 0;
      padding: 0 16px;
      width: 100%;
      height: 56px;
      font-weight: 500;
      margin-top: 16px;

      transition: background-color 0.15s;

      &:hover {
        background: ${shade(0.15, '#ff9000')};
      }
    }

    a {
      color: #f4ede8;
      display: block;
      margin-top: 16px;
      text-decoration: none;

      transition: background-color 0.15s;

      &:hover {
        color: ${shade(0.2, '#f4ede8')};
      }
    }
  }

  a {
    color: #ff9000;
    display: flex;
    align-items: center;
    text-decoration: none;

    transition: background-color 0.15s;

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }
  }

  svg {
    margin-right: 16px;

    &:hover {
      color: ${shade(0.2, '#ff9000')};
    }
  }
`
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  place-content: center;
  align-items: center;

  width: 100%;
  max-width: 700px;
`

export const Background = styled.div`
  flex: 1;
  background: url(${BackgroundImg}) no-repeat center;
  background-size: cover;
`
