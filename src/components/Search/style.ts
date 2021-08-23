import styled from 'styled-components'

export const Content = styled.div`
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 3rem 0rem;
  }
`

export const Title = styled.h1`
  font-size: 2.25rem;
  line-height: 2.5rem;
  font-weight: 300;
  text-align: center;
  color: #001524;
`

export const SearchBar = styled.input`
  width: 75%;
  text-align: left;
  font-size: 1.5rem;
  line-height: 2rem;
  border: 0;
  border-bottom: 2px solid #d1d5db;
  padding: 0.75rem;
  background: transparent;
  margin-top: 1rem;
  color: #c5c9cf;

  ::placeholder {
    color: #c5c9cf;
    font-weight: 300;
  }

  :focus {
    border-bottom: 2px solid #93c5fd;
    color: #93c5fd;
  }

  :-webkit-autofill,
  :-webkit-autofill:hover,
  :-webkit-autofill:focus {
    border-bottom: 2px solid #34d399;
    -webkit-text-fill-color: #059669;
    transition: background-color 5000s ease-in-out 0s;
  }
`
