import styled from 'styled-components'

const Base = styled.div`
  margin-left: auto;
  margin-right: auto;

  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
`

export const BoxPulse = styled(Base)`
  padding: 3rem;
  background: #fff;
  border-radius: 0.5rem;
  width: 70%;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  margin-bottom: 8rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const ContentPulse = styled.div`
  margin-bottom: 2rem;

  span {
    background: #dbeafe;
    padding: 0.75rem 0;
    width: 14rem;
    border-radius: 5px;

    display: flex;
    align-items: center;

    margin-top: 0.5rem;
  }

  span#button {
    background: #dbeafe;
    padding: 2rem 0;
    width: 16rem;
    border-radius: 5px;

    display: flex;
    align-items: center;

    margin-top: 3rem;
    margin-left: auto;
    margin-right: auto;
  }
`

export const AvatarPulse = styled.div`
  background: #dbeafe;
  border-radius: 100%;
  width: 200px;
  height: 200px;

  margin-left: auto;
  margin-right: auto;
`

export const NamePulse = styled.div`
  background: #dbeafe;
  padding: 1rem 0;
  width: 15rem;
  border-radius: 5px;

  display: flex;
  align-items: center;

  margin-top: 1rem;
`

export const FlexPulse = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    display: block;
  }
`

export const FlexItemPulse = styled.div`
  background: #dbeafe;
  padding: 1.5rem 0;
  width: 10rem;
  border-radius: 5px;

  margin: 1rem 2rem;
`
