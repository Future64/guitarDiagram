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
export const scaleConstructor = (scaleForLive: number[], chromaScale: string[] | string) => {
  let builtMajorScale = []
  for (let i = 0; i < scaleForLive.length; i++) {
    builtMajorScale.push(chromaScale[scaleForLive[i]])
  }
  return builtMajorScale
}
