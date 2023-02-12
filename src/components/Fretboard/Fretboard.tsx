import React from 'react'
import Fret from '../Fret/Fret'
import Nut from '../Nut/Nut'
import String from '../String/String'
import './Fretboard.scss'
import CircleInfo from '../CircleInfo/CircleInfo'
import { buildNewChromaScale, scaleConstructor } from '../../utils/utils'
import { scales } from '../../data/scales'

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

  const scaleSorted = scaleConstructor(
    scale,
    buildNewChromaScale(rootNote, enhamronics, scales[0].notesSharp, scales[0].notesFlat)
  )
  const degreesNote = (note: string) => {
    return scaleSorted.indexOf(note) + 1
  }

  const displayScale = (rootNote: string, scaleSorted: string[]) => {
    let classN = 'hidden'
    if (scaleSorted.find((elm: string) => elm === rootNote)) {
      classN = ''
      return classN
    }
    classN = 'hidden'
    return classN
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
              degreesNote={degreesNote(string)}
              scale={scale}
              scaleSorted={scaleSorted}
              string={string}
              viewType={viewType}
              displayScale={displayScale(string, scaleSorted)}
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
