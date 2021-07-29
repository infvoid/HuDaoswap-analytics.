import React from 'react'
import styled from 'styled-components'
import languagesvg from '../../assets/language.svg'
import { EN, KO } from '../../hooks/languageCodes'

const StyleLanguage = styled.div`
  display: flex;
  width: fit-content;
  cursor: pointer;
  text-decoration: none;
  margin-left: 10px;
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

export interface ToggleProps {
  Language: any
  setLanguage: (lang) => void
}

export default function Language({ Language, setLanguage }: ToggleProps) {
  console.log(Language)
  return (
    <StyleLanguage>
      <img src={languagesvg} alt="" />
      <span
        className="checked"
        onClick={() => {
          setLanguage(Language?.code === 'EN' ? KO : EN)
        }}
      >
        {Language?.code}
      </span>
    </StyleLanguage>
  )
}
