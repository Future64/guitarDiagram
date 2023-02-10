import React from 'react'
import './Guitar.scss'

type GuitarProps = {
  guitarDisplayType: string
  nbStrings: number
  nbFrets: number
  tuning: string[]
  enhamronics: string
  viewType: string
  clickableCase: boolean
  guitarType: string
  tone: string
  fretbordView: string
  fretboardType: string
  inlay: string
  rootNote: string
  scale: string
  sclePosition: string
  diagramChordsFooterInfo: string
  focusZone: number[] | string
  omitCase: string[] | string
}

const Guitar = ({ nbStrings, nbFrets, tuning, enhamronics, viewType }: GuitarProps) => {
  return (
    <div className='guitar-main'>
      Hello
      <div className='truc'>Caca</div>
    </div>
  )
}

export default Guitar
