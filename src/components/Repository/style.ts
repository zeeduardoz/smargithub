import styled from 'styled-components'

export const Content = styled.div`
  margin: 5rem 0;
`

export const Title = styled.h1`
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 2rem;

  margin-bottom: 1.5rem;
`

export const Repo = styled.div`
  padding: 2rem;
  background: #ffff;
  border-radius: 5px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 1rem 0;

  @media (max-width: 768px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
`

export const RepoItem = styled.div`
  width: 25%;

  @media (max-width: 768px) {
    margin: 1rem 0;
    width: 100%;
  }
`

export const Name = styled.h2`
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 1.75rem;
`

export const Desc = styled.p`
  font-size: 0.875rem;
  line-height: 1.25rem;
  font-weight: 300;

  color: #8e94a0;
`

export const Lang = styled.p`
  font-size: 1.125rem;
  line-height: 1.75rem;
  font-weight: 500;
  text-align: center;
`

export const Star = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fca503;

  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 500;
`
