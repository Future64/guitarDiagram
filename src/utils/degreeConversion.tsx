export const degreeConversion = (degreesNote: number) => {
  if (degreesNote === 1) {
    return 'I°'
  } else if (degreesNote === 2) {
    return 'II°'
  } else if (degreesNote === 3) {
    return 'III°'
  } else if (degreesNote === 4) {
    return 'IV°'
  } else if (degreesNote === 5) {
    return 'V°'
  } else if (degreesNote === 6) {
    return 'VI°'
  } else if (degreesNote === 7) {
    return 'VII°'
  }
  return degreesNote
}
