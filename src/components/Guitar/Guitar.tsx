import React from 'react'
import Fretboard from '../Fretboard/Fretboard'
import Inlay from '../Inlay/Inlay'
import './Guitar.scss'
import { intervalCalculator } from '../../utils/intervalCalculator'

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
  scale: number[]
  sclePosition: string
  diagramChordsFooterInfo: string
  focusZone: number[] | string
  omitCase: string[] | string
}

const Guitar = ({
  guitarDisplayType,
  nbStrings,
  nbFrets,
  tuning,
  enhamronics,
  viewType,
  fretbordView,
  rootNote,
  scale,
  focusZone,
}: GuitarProps) => {
  const guitarStyle: object = {
    transform: 'rotate(90deg)',
    // width: '200px',
    position: 'absolute',
  }

  console.log(intervalCalculator(scale))

  return (
    <div
      className='guitar-main'
      style={guitarDisplayType === 'diagramChords' ? guitarStyle : {}}
    >
      <Fretboard
        guitarDisplayType={guitarDisplayType}
        nbStrings={nbStrings}
        nbFrets={nbFrets}
        tuning={tuning}
        enhamronics={enhamronics}
        viewType={viewType}
        focusZone={focusZone}
        rootNote={rootNote}
        scale={scale}
        fretbordView={fretbordView}
      />
      <div className='inlay'>
        <Inlay
          guitarDisplayType={guitarDisplayType}
          nbFrets={nbFrets}
          focusZone={focusZone}
          fretbordView={fretbordView}
        />
      </div>
    </div>
  )
}

export default Guitar
