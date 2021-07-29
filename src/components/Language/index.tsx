import React from 'react'
import styled from 'styled-components'
import languagesvg from '../../assets/language.svg'
import { allLanguages } from '../../hooks/languageCodes'

const StyleLanguage = styled.div`
  display: flex;
  width: fit-content;
  cursor: pointer;
  text-decoration: none;
  margin-top: 1rem;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  :hover {
    text-decoration: none;
    .Block {
      display: block;
    }
  }
  .checked {
    opacity: 0.4;
  }
  img {
    margin-right: 10px;
  }
`
const Block = styled.div`
  width: max-content;
  display: none;
  flex-direction: column;
  position: absolute;
  transform: translate(-50%, 0px);
  left: 100%;
  bottom: 100%;
  background-color: rgb(255, 255, 255);
  box-shadow: rgb(25 19 38 / 10%) 0px 2px 12px -8px, rgb(25 19 38 / 5%) 0px 1px 1px;
  padding: 16px;
  max-height: 500px;
  overflow-y: auto;
  z-index: 10;
  border-radius: 4px;
`
const BlockItem = styled.div`
  padding: 8px 0px;
  color: rgb(0, 0, 0);
`

export interface ToggleProps {
  Language: any
  setLanguage: (lang) => void
}

export default function Language({ Language, setLanguage }: ToggleProps) {
  return (
    <StyleLanguage>
      <img src={languagesvg} alt="" />
      {/* <span className="checked">
        英
      </span>
      <span style={{ padding: '0 .5rem' }}>{' / '}</span>
      <span>
        韩
      </span> */}
      <span>{Language.language}</span>
      <Block className="Block">
        {allLanguages.map((item, index) => (
          <BlockItem
            onClick={(e) => {
              setLanguage(item)
            }}
            key={index}
          >
            {item.language}
          </BlockItem>
        ))}
      </Block>
    </StyleLanguage>
  )
}
