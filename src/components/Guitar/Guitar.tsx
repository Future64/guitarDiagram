import React from 'react'
import Fretboard from '../Fretboard/Fretboard'
import Inlay from '../Inlay/Inlay'
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

const Guitar = ({
  nbStrings,
  nbFrets,
  tuning,
  enhamronics,
  viewType,
  fretbordView,
  focusZone,
}: GuitarProps) => {
  return (
    <div className='guitar-main'>
      <Fretboard
        nbStrings={nbStrings}
        nbFrets={nbFrets}
        tuning={tuning}
        enhamronics={enhamronics}
        viewType={viewType}
        focusZone={focusZone}
        fretbordView={fretbordView}
      />
      <Inlay
        nbFrets={nbFrets}
        focusZone={focusZone}
        fretbordView={fretbordView}
      />
    </div>
  )
}

export default Guitar
