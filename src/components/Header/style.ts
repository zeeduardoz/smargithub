import styled from 'styled-components'

export const Nav = styled.div`
  background: #001524;
  width: 100%;
`

export const Container = styled.div`
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 576px) {
    max-width: 540px;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  @media (min-width: 768px) {
    max-width: 720px;
  }

  @media (min-width: 992px) {
    max-width: 960px;
  }

  @media (min-width: 1200px) {
    max-width: 1200px;
  }
`

export const Title = styled.h1`
  font-size: 3rem;
  line-height: 1;
  font-weight: bold;
  color: #ffff;
  padding: 1rem 0;
  width: 50%;

  @media (max-width: 576px) {
    width: 100%;
    text-align: center;
  }
`

export const End = styled.div`
  padding: 2rem 0;
  width: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  background: #1b2a41;

  @media (max-width: 576px) {
    width: 100%;
    justify-content: center;
  }

  button {
    margin-left: 3rem;
    font-size: 1.5rem;
    line-height: 2rem;
    margin-top: 3px;
    border: none;
    background: transparent;
    color: #ffffff;
    transition: all 0.3s;
  }

  button:hover {
    opacity: 0.75;
  }
`

export const User = styled.div`
  display: flex;
  align-items: center;

  font-size: 1.25rem;
  line-height: 1.75rem;
  color: #ffffff;

  p {
    font-size: 1.125rem;
    line-height: 1.75rem;
    font-weight: 300;
    color: #8e94a0;
    margin-left: 0.75rem;
  }
`
