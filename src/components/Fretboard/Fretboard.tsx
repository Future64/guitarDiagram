import React from 'react'
import Fret from '../Fret/Fret'
import Nut from '../Nut/Nut'
import String from '../String/String'
import './Fretboard.scss'
import CircleInfo from '../CircleInfo/CircleInfo'

type FretboardProps = {
  nbStrings: number
  nbFrets: number
  tuning: string[]
  enhamronics: string
  viewType: string
  fretbordView: string
  focusZone: number[] | string
}

const Fretboard = ({
  nbStrings,
  nbFrets,
  tuning,
  enhamronics,
  viewType,
  fretbordView,
  focusZone,
}: FretboardProps) => {
  const displayFret = (nbFrets: number) => {
    let frets = []
    for (let i = 0; i < nbFrets; i++) {
      frets.push(<Fret key={i} />)
    }
    return frets
  }

  return (
    <div className='fretboard'>
      <div className='headInfo'>
        {tuning.map((string, index) => {
          return (
            <CircleInfo
              key={'stringHead-' + string + index}
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
            key={index}
            string={string}
            nbStrings={nbStrings}
            nbFrets={nbFrets}
            tuning={tuning}
            enhamronics={enhamronics}
            viewType={viewType}
            fretbordView={fretbordView}
            focusZone={focusZone}
          />
        )
      })}
    </div>
  )
}

export default Fretboard
