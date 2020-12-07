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
