import styled from 'styled-components'

export const Open = styled.button`
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 5px;
  background: #818cf8;
  width: 70%;

  float: right;

  font-size: 1.125rem;
  line-height: 1.75rem;
  color: #ffff;
  font-weight: 700;
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const Close = styled.button`
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 5px;
  background: transparent;
  width: 100%;

  font-size: 1.5rem;
  line-height: 2rem;
  color: #d65a5a;
  font-weight: 500;
  text-align: center;
  margin-top: 3rem;
`

export const ModalForeground = styled.div`
  display: flex;
  position: fixed;
  z-index: 1;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.8);
`

export const ModalContent = styled.div`
  background-color: #fefefe;
  border-radius: 5px;
  padding: 2rem 3rem;
  width: 40%;

  @media (max-width: 768px) {
    width: 95%;
  }
`

export const Title = styled.h1`
  font-weight: bold;
  font-size: 1.875rem;
  line-height: 2.25rem;
`

export const Desc = styled.p`
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 300;

  color: #8e94a0;

  b {
    font-weight: 500;
  }
`

export const Line = styled.hr`
  margin: 1rem auto;
  border: none;
  padding: 2px 0;
  border-radius: 5px;
  background: #e5e7eb;
`
