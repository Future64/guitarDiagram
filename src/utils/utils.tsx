import { scales } from '../data/scales'

/**
 * It takes a scale and a root note, and returns a new scale with the root note at the beginning
 * @param {string[]} scale - the scale you want to use
 * @param {string} rootNote - the note that the scale will be built from
 * @returns An array of notes that make up the scale.
 */
export const splitAndBuildScale = (scale: string[], rootNote: string) => {
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
export const buildNewChromaScale = (rootNote: string, alt: string, scalesSharp: string[], scalesFlat: string[]) => {
  if (alt === '#') {
    return splitAndBuildScale(scalesSharp, rootNote)
  } else if (alt === 'b') {
    return splitAndBuildScale(scalesFlat, rootNote)
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
export const scaleConstructor = (scaleForLive: number[], chromaScale: string[]) => {
  let builtMajorScale = []
  for (let i: number = 0; i < scaleForLive.length; i++) {
    builtMajorScale.push(chromaScale[scaleForLive[i]])
  }
  return builtMajorScale
}

export const handleFormScales = (value: string) => {
  let scale: number[] | string[] = ['']

  if (value === '1') {
    scale = scales[0].minorPentatonicScale
  } else if (value === '2') {
    scale = scales[0].majorPentatonicScale
  } else if (value === '3') {
    scale = scales[0].minorBluesScale
  } else if (value === '4') {
    scale = scales[0].majorBluesScale
  } else if (value === '5') {
    scale = scales[0].chromaticScale
  } else if (value === '6') {
    scale = scales[0].wholeToneScale
  } else if (value === '7') {
    scale = scales[0].diminishedScale
  } else if (value === '8') {
    scale = scales[0].augmentedScale
  } else if (value === '9') {
    scale = scales[0].naturalMajorScale
  } else if (value === '10') {
    scale = scales[0].naturalMinorScale
  } else if (value === '11') {
    scale = scales[0].ionianScale
  } else if (value === '12') {
    scale = scales[0].dorianScale
  } else if (value === '13') {
    scale = scales[0].phrygianScale
  } else if (value === '14') {
    scale = scales[0].lydianScale
  } else if (value === '15') {
    scale = scales[0].mixolydianScale
  } else if (value === '16') {
    scale = scales[0].aeolianScale
  } else if (value === '17') {
    scale = scales[0].locrianScale
  } else if (value === '18') {
    scale = scales[0].harmonicMinorScale
  }
  // else if(value = 19) {
  //   return scales[0].locrianSharp6Scale
  // } else if(value = 20) {
  //   return scales[0].locrianSharp5Scale
  // } else if(value = 21) {
  //   return scales[0].dorianFlat4Scale
  // }
  return scale
}
