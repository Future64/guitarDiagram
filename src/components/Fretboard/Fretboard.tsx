import React from 'react'
import Fret from '../Fret/Fret'
import Nut from '../Nut/Nut'
import String from '../String/String'
import './Fretboard.scss'
import CircleInfo from '../CircleInfo/CircleInfo'

type FretboardProps = {
  guitarDisplayType: string
  nbStrings: number
  nbFrets: number
  tuning: string[]
  enhamronics: string
  viewType: string
  fretbordView: string
  rootNote: string
  scale: number[]
  focusZone: number[] | string
}

const Fretboard = ({
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
}: FretboardProps) => {
  const displayFret = (nbFrets: number) => {
    let frets = []
    for (let i = 0; i < nbFrets; i++) {
      frets.push(<Fret key={i} />)
    }
    return frets
  }
  const fretboardStyle: object = {
    width: '20%',
    height: '90%',
    marginLeft: '700px',
  }

  return (
    <div
      className='fretboard'
      style={guitarDisplayType === 'diagramChords' ? fretboardStyle : {}}
    >
      <div className='headInfo'>
        {tuning.map((string, index) => {
          return (
            <CircleInfo
              guitarDisplayType={guitarDisplayType}
              key={'stringHead-' + string + index}
              circleZone='headInfo'
              string={string}
              viewType={viewType}
            />
          )
        })}
      </div>
      <div className='fretBox'>
        <Nut
          nbStrings={nbStrings}
          nbFrets={nbFrets}
          tuning={tuning}
          enhamronics={enhamronics}
          viewType={viewType}
          fretbordView={fretbordView}
          focusZone={focusZone}
        />
        {displayFret(nbFrets).map((fret, i) => {
          return <Fret />
        })}
      </div>

      {tuning.map((string, index) => {
        return (
          <String
            guitarDisplayType={guitarDisplayType}
            indexString={index + 1}
            key={'sting' + index}
            string={string}
            nbStrings={nbStrings}
            nbFrets={nbFrets}
            tuning={tuning}
            enhamronics={enhamronics}
            viewType={viewType}
            fretbordView={fretbordView}
            rootNote={rootNote}
            scale={scale}
            focusZone={focusZone}
          />
        )
      })}
    </div>
  )
}

export default Fretboard
