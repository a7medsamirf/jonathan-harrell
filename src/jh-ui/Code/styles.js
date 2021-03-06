import styled from 'styled-components'

export const StyledCode = styled.code`
  font-family: Menlo, Monaco, Consolas, Courier New, monospace;
  font-size: 0.9rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.desktop}) {
    font-size: 0.95rem;
  }
`
