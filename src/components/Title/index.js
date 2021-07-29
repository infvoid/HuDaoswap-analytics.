import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

import { Flex } from 'rebass'
import Link from '../Link'
import { RowFixed } from '../Row'
import Logo from '../../assets/hubdao_logo2.svg'
import Logo2 from '../../assets/logo_white.svg'
// import Wordmark from '../../assets/wordmark_white.svg'

import Language from '../Language2'
import { useLanguage } from '../../contexts/LocalStorage'

import { BasicLink } from '../Link'
import { useMedia } from 'react-use'
import useI18n from '../../hooks/useI18n'

const TitleWrapper = styled.div`
  text-decoration: none;
  z-index: 10;
  width: 100%;
  &:hover {
    cursor: pointer;
  }
  @media screen and (max-width: 800px) {
    .Logo {
      display: none;
    }

    .Logo2 {
      display: block;
    }
  }
  @media screen and (min-width: 800px) {
    .Logo {
      display: block;
    }

    .Logo2 {
      display: none;
    }
  }
  .Logo2 {
    width: 30px;
  }
`

const UniIcon = styled(Link)`
  transition: transform 0.3s ease;
  :hover {
    transform: rotate(-5deg);
  }
`

const Option = styled.div`
  font-weight: 500;
  font-size: 14px;
  opacity: ${({ activeText }) => (activeText ? 1 : 0.6)};
  color: ${({ theme }) => theme.white};
  display: flex;
  margin-left: 12px;
  :hover {
    opacity: 1;
  }
`

export default function Title() {
  const history = useHistory()
  const below1080 = useMedia('(max-width: 1080px)')
  const TranslateString = useI18n()
  const [selectedLanguage, setSelectedLanguage] = useLanguage()

  return (
    <TitleWrapper onClick={() => history.push('/')}>
      <Flex alignItems="center" style={{ justifyContent: 'space-between' }}>
        <RowFixed>
          <UniIcon id="link" onClick={() => history.push('/')}>
            <img width={'120px'} className="Logo" src={Logo} alt="logo" />
            <img className="Logo2" src={Logo2} alt="logo" />
          </UniIcon>
          {/* {!below1080 && (
            <img width={'84px'} style={{ marginLeft: '8px', marginTop: '0px' }} src={Wordmark} alt="logo" />
          )} */}
        </RowFixed>
        {below1080 && (
          <RowFixed style={{ alignItems: 'center' }}>
            <BasicLink to="/home">
              <Option activeText={history.location.pathname === '/home' ?? undefined}>
                {TranslateString('Overview')}
              </Option>
            </BasicLink>
            <BasicLink to="/tokens">
              <Option
                activeText={
                  (history.location.pathname.split('/')[1] === 'tokens' ||
                    history.location.pathname.split('/')[1] === 'token') ??
                  undefined
                }
              >
                {TranslateString('Tokens')}
              </Option>
            </BasicLink>
            <BasicLink to="/pairs">
              <Option
                activeText={
                  (history.location.pathname.split('/')[1] === 'pairs' ||
                    history.location.pathname.split('/')[1] === 'pair') ??
                  undefined
                }
              >
                {TranslateString('Pairs')}
              </Option>
            </BasicLink>

            <BasicLink to="/accounts">
              <Option
                activeText={
                  (history.location.pathname.split('/')[1] === 'accounts' ||
                    history.location.pathname.split('/')[1] === 'account') ??
                  undefined
                }
              >
                {TranslateString('Accounts')}
              </Option>
            </BasicLink>

            {/* 语言转换 */}
            <Language Language={selectedLanguage} setLanguage={setSelectedLanguage}></Language>
          </RowFixed>
        )}
      </Flex>
    </TitleWrapper>
  )
}
