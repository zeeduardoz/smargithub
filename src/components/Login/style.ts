import styled from 'styled-components'

export const Content = styled.div`
  padding: 5rem 3rem;
  background: #001524;
  border-radius: 0.5rem;
  -moz-box-shadow: 0px 1px 5px 0px #676767;
  -webkit-box-shadow: 0px 1px 5px 0px #676767;
  box-shadow: 0px 1px 5px 0px #676767;

  @media (max-width: 768px) {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 0;
    padding: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

export const Title = styled.h1`
  font-size: 3rem;
  line-height: 1;
  font-weight: bold;
  text-align: center;
  color: #ffff;

  p {
    font-size: 1.25rem;
    line-height: 1.75rem;
    font-weight: 300;
    color: #8e94a0;
  }

  hr {
    width: 25%;
    border: 0;
    border-radius: 100px;
    padding: 2px 0px;
    background: #ffff;
    margin-right: auto;
    margin-left: auto;
    margin-top: 1rem;
  }
`

export const FormAuth = styled.form`
  margin-top: 3.5rem;

  button {
    font-size: 1.5rem;
    line-height: 2rem;
    color: #ffff;
    font-weight: 700;
    width: 100%;
    padding: 1rem;
    border: none;
    border-radius: 5px;
    background: #10b981;
    margin-top: 3rem;
    transition: all 0.2s;
  }
  button:hover {
    opacity: 0.75;
  }
`

export const FormComponent = styled.div`
  margin-top: 1.5rem;

  p {
    font-weight: 600;
    color: #fff;
    display: flex;
    align-items: center;
  }

  span {
    color: #f87171;
    font-size: 0.75rem;
    line-height: 1rem;
    font-weight: 300;
  }

  input {
    width: 100%;
    font-size: 0.875rem;
    line-height: 1.25rem;
    border: 0;
    border-bottom: 2px solid #d1d5db;
    padding: 0.75rem;
    background: transparent;
    margin: 5px 0;
    color: #d1d5db;
  }

  input::placeholder {
    color: #d1d5db;
  }

  input:focus {
    border-bottom: 2px solid #93c5fd;
    color: #93c5fd;
  }

  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus {
    border-bottom: 2px solid #34d399;
    -webkit-text-fill-color: #059669;
    transition: background-color 5000s ease-in-out 0s;
  }
`
