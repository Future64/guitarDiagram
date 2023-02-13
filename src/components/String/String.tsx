import React from 'react'
import CircleInfo from '../CircleInfo/CircleInfo'
import './String.scss'
import { scales } from '../../data/scales'
import { splitAndBuildScale, buildNewChromaScale, scaleConstructor } from '../../utils/utils'
import { intervalCalculator } from '../../utils/intervalCalculator'

type StringProps = {
  guitarDisplayType: string
  indexString: number
  key: string
  string: string
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

const String = ({
  guitarDisplayType,
  indexString,
  key,
  string,
  nbStrings,
  nbFrets,
  tuning,
  enhamronics,
  viewType,
  fretbordView,
  rootNote,
  scale,
  focusZone,
}: StringProps) => {
  const chromaScaleBuilding = [
    buildNewChromaScale(string, enhamronics, scales[0].notesSharp, scales[0].notesFlat),
    buildNewChromaScale(string, enhamronics, scales[0].notesSharp, scales[0].notesFlat),
    buildNewChromaScale(string, enhamronics, scales[0].notesSharp, scales[0].notesFlat),
  ]

  const chromaScaleExtend: string | string[] = chromaScaleBuilding.join().split(',')

  /**
   * It takes a number of frets and a chromatic scale and returns an array of notes
   * @param {number} nbFrets - number of frets on the guitar
   * @param {string[]} chromaScaleExtend - the chromatic scale extended to the number of frets you want
   * to display.
   * @returns An array of notes
   */
  const getNotesToString = (nbFrets: number, chromaScaleExtend: string[]) => {
    let notes = []
    for (let i = 0; i < nbFrets; i++) {
      notes.push(chromaScaleExtend[i + 1])
    }
    notes.splice(notes.length - 1, 1)
    return notes
  }

  const chromaScale: string[] = getNotesToString(nbFrets, chromaScaleExtend)
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
      className='string'
      id={`str-${indexString}-${string}`}
    >
      {chromaScale.map((note, index) => {
        console.log(scaleSorted.indexOf(intervalCalculator(scale)[index]))

        return (
          <CircleInfo
            guitarDisplayType={guitarDisplayType}
            key={'string-' + string + index}
            circleZone='fretboard'
            string={note}
            degreesNote={degreesNote(note)}
            viewType={viewType}
            scale={scale}
            scaleSorted={scaleSorted}
            displayScale={displayScale(note, scaleSorted)}
            index={index}
          />
        )
      })}
    </div>
  )
}

export default String
