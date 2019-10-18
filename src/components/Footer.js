import React from 'react'
import styled from 'styled-components'
import { Link as GatsbyLink } from 'gatsby'
import Padded from '../jh-ui/Padded'
import { breakpoints } from '../jh-ui/themes'
import ContentWrapper from './ContentWrapper'

const FooterWrap = styled.footer`
  background-color: ${({ theme }) => theme.colors.backgroundInverse};
  color: ${({ theme }) => theme.colors.textLighter};
`

const FooterContentWrapper = styled(ContentWrapper)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Link = styled(GatsbyLink)`
  font-size: ${({ theme }) => theme.fontSizes.s.mobile};
  text-decoration: none;
  color: ${({ theme }) => theme.colors.textLighter};
  
  @media (min-width: ${breakpoints.tablet}) {
    font-size: ${({ theme }) => theme.fontSizes.s.tablet};
  }
  
  @media (min-width: ${breakpoints.desktop}) {
    font-size: ${({ theme }) => theme.fontSizes.s.desktop};
  }
`

const Footer = class extends React.Component {
  render() {
    return (
      <FooterWrap>
        <Padded vertical="l">
          <FooterContentWrapper>
            <Link to="/">
              &copy; 2017–2019 Jonathan Harrell
            </Link>
            <div>
              <a href="">tw</a>
              <a href="">gh</a>
              <a href="">co</a>
              <a href="">li</a>
              <a href="">in</a>
              <a href="">rss</a>
            </div>
          </FooterContentWrapper>
        </Padded>
      </FooterWrap>
    )
  }
}

export default Footer
