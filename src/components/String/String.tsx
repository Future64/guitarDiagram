import React from 'react'
import CircleInfo from '../CircleInfo/CircleInfo'
import './String.scss'
import { scales } from '../../data/scales'

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
  /**
   * It takes a scale and a root note, and returns a new scale with the root note at the beginning
   * @param {string[]} scale - the scale you want to use
   * @param {string} rootNote - the note that the scale will be built from
   * @returns An array of notes that make up the scale.
   */
  const splitAndBuildScale = (scale: string[], rootNote: string) => {
    let newScale = scale.slice(scale.indexOf(rootNote))
    let newScaleZero = scale.slice(0, scale.indexOf(rootNote))
    let scaleFinished = [...newScale, ...newScaleZero]
    return scaleFinished
  }

  /**
   * It takes a root note and an accidental, and returns a new chromatic scale based on the root note and
   * accidental
   * @param {string} rootNote - The root note of the scale
   * @param {string} alt - The accidental of the root note.
   * @returns a new chromatic scale based on the root note and accidentals.
   */
  const buildNewChromaScale = (rootNote: string, alt: string) => {
    if (alt === '#') {
      return splitAndBuildScale(scales[0].notesSharp, rootNote)
    } else if (alt === 'b') {
      return splitAndBuildScale(scales[0].notesFlat, rootNote)
    } else {
      return 'Please enter a valid root note and accidentals'
    }
  }

  /**
   * It takes in an array of numbers and an array of strings, and returns an array of strings
   * @param {number[]} scaleForLive - This is the scale that is being built. It is an array of numbers
   * that correspond to the index of the chromaScale array.
   * @param {string[]} chromaScale - This is the chromatic scale. It's an array of all the notes in the
   * chromatic scale.
   * @returns An array of the notes in the scale.
   */
  const scaleConstructor = (scaleForLive: number[], chromaScale: string[] | string) => {
    let builtMajorScale = []
    for (let i = 0; i < scaleForLive.length; i++) {
      builtMajorScale.push(chromaScale[scaleForLive[i]])
    }
    return builtMajorScale
  }

  const chromaScaleBuilding = [
    buildNewChromaScale(string, enhamronics),
    buildNewChromaScale(string, enhamronics),
    buildNewChromaScale(string, enhamronics),
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
  const scaleSorted = scaleConstructor(scale, buildNewChromaScale(rootNote, enhamronics))

  const displayScale = (rootNote: string, scaleSorted: string[]) => {
    let classN = 'hidden'
    if (scaleSorted.find((elm: string) => elm === rootNote)) {
      classN = ''
      return classN
    }
    classN = 'hidden'
    return classN
  }
  console.log(displayScale(rootNote, scaleSorted))

  return (
    <div
      className='string'
      id={`str-${indexString}-${string}`}
    >
      {chromaScale.map((note, index) => {
        return (
          <CircleInfo
            guitarDisplayType={guitarDisplayType}
            key={'string-' + string + index}
            circleZone='fretboard'
            string={note}
            viewType={viewType}
            displayScale={displayScale(note, scaleSorted)}
          />
        )
      })}
    </div>
  )
}

export default String
