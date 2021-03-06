import styled, { css } from 'styled-components'
import { shade } from 'polished'

interface FormProps {
  hasError: boolean
}

export const Title = styled.h1`
  font-size: 44px;
  color: #3a3a3a;
  max-width: 480px;
  line-height: 56px;

  margin-top: 70px;
`
export const Form = styled.form<FormProps>`
  color: #3a3a3a;
  max-width: 700px;
  display: flex;
  margin-top: 40px;

  input {
    flex: 1;
    height: 60px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid #fff;
    border-right: 0;

    ${props =>
      props.hasError &&
      css`
        border-color: #d03535;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 200px;
    height: 60px;
    background: #34aa55;
    border-radius: 0px 5px 5px 0px;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.15s;

    &:hover {
      background: ${shade(0.2, '#34aa55')};
    }
  }
`

export const Error = styled.span`
  display: block;
  color: #c53030;
  margin-top: 8px;
  margin-left: 2px;
`

export const Repositories = styled.div`
  margin-top: 85px;
  max-width: 700px;

  a {
    background: #fff;
    border-radius: 5px;
    width: 100%;
    padding: 24px;
    display: block;
    display: flex;
    text-decoration: none;
    align-items: center;
    transition: transform 0.3s;

    & + a {
      margin-top: 10px;
    }

    &:hover {
      transform: translateX(15px);
    }

    img {
      width: 75px;
      height: 75px;
      border-radius: 50%;
    }

    div {
      margin-left: 16px;
      flex: 1;

      strong {
        font-size: 20px;
        color: #3d3d4d;
      }

      p {
        font-size: 18px;
        color: #a8a8b3;
        margin-top: 4px;
      }
    }

    svg {
      margin-left: auto;
      color: #cbcbd6;
    }
  }
`
