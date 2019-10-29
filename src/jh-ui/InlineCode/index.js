import React from 'react'
import styled from 'styled-components'

const Code = styled.code`
  padding: 0.125rem 0.25rem;
  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.backgroundSecondary};
  font-family: Menlo, Monaco, Consolas, Courier New, monospace;
  font-size: 90%;
`

const InlineCode = ({ children, ...props }) => (
  <Code {...props}>
    {children}
  </Code>
)

export default InlineCode