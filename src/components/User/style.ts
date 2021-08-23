import styled from 'styled-components'

export const Box = styled.div`
  padding: 3rem;
  background: #fff;
  border-radius: 0.5rem;
  width: 70%;

  margin-left: auto;
  margin-right: auto;
  text-align: center;

  display: flex;
  flex-direction: column;

  margin-bottom: 8rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const Content = styled.div`
  margin-bottom: 2rem;

  p {
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 300;
    color: #8e94a0;
  }

  p b {
    font-weight: 500;
  }

  a {
    display: block;
    margin-top: 4rem;
    padding: 1rem 3rem;
    border: none;
    border-radius: 5px;
    background: #818cf8;

    text-decoration: none;
    font-size: 1.125rem;
    line-height: 1.75rem;
    color: #ffff;
    font-weight: 700;
    text-align: center;
  }
`

export const Avatar = styled.img`
  text-align: center;
  border-radius: 100%;
  width: 200px;
`

export const Name = styled.h2`
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 2rem;

  margin-top: 1rem;
`

export const Flex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: block;
  }
`

export const FlexItem = styled.div`
  width: 100%;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`
