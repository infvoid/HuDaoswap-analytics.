import React from 'react'
import styled from 'styled-components'


const StyleLanguage = styled.div`
  display: flex;
  width: fit-content;
  cursor: pointer;
  text-decoration: none;
  margin-top: 1rem;
  color: white;

  :hover {
    text-decoration: none;
  }
  .checked {
    opacity: 0.4;
  }
`

export interface ToggleProps {
  isActive: boolean
  toggle: () => void
}

export default function Language({ isActive, toggle }: ToggleProps) {
  return (
    <StyleLanguage onClick={toggle}>
      <span className="checked">
        英
      </span>
      <span style={{ padding: '0 .5rem' }}>{' / '}</span>
      <span>
        韩
      </span>
    </StyleLanguage>
  )
}
