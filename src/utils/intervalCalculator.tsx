export const intervalCalculator = (scale: number[]) => {
  let intervals = []

  if (scale[0] === 0) {
    intervals.push('F')
  } else if (scale[0] === 1) {
    intervals.push('m2')
  } else if (scale[0] === 2) {
    intervals.push('M2')
  } else if (scale[0] === 3) {
    intervals.push('m3')
  } else if (scale[0] === 4) {
    intervals.push('M3')
  } else if (scale[0] === 5) {
    intervals.push('P4')
  } else if (scale[0] === 6) {
    intervals.push('#4')
  } else if (scale[0] === 7) {
    intervals.push('P5')
  } else if (scale[0] === 8) {
    intervals.push('m6')
  } else if (scale[0] === 9) {
    intervals.push('M6')
  } else if (scale[0] === 10) {
    intervals.push('m7')
  } else if (scale[0] === 11) {
    intervals.push('M7')
  } else if (scale[0] === 12) {
    intervals.push('P8')
  }
  if (scale[1] === 1) {
    intervals.push('m2')
  } else if (scale[1] === 2) {
    intervals.push('M2')
  } else if (scale[1] === 3) {
    intervals.push('m3')
  } else if (scale[1] === 4) {
    intervals.push('M3')
  } else if (scale[1] === 5) {
    intervals.push('P4')
  } else if (scale[1] === 6) {
    intervals.push('#4')
  } else if (scale[1] === 7) {
    intervals.push('P5')
  } else if (scale[1] === 8) {
    intervals.push('m6')
  } else if (scale[1] === 9) {
    intervals.push('M6')
  } else if (scale[1] === 10) {
    intervals.push('m7')
  } else if (scale[1] === 11) {
    intervals.push('M7')
  } else if (scale[1] === 12) {
    intervals.push('P8')
  }
  if (scale[2] === 1) {
    intervals.push('m2')
  } else if (scale[2] === 2) {
    intervals.push('M2')
  } else if (scale[2] === 3) {
    intervals.push('m3')
  } else if (scale[2] === 4) {
    intervals.push('M3')
  } else if (scale[2] === 5) {
    intervals.push('P4')
  } else if (scale[2] === 6) {
    intervals.push('#4')
  } else if (scale[2] === 7) {
    intervals.push('P5')
  } else if (scale[2] === 8) {
    intervals.push('m6')
  } else if (scale[2] === 9) {
    intervals.push('M6')
  } else if (scale[2] === 10) {
    intervals.push('m7')
  } else if (scale[2] === 11) {
    intervals.push('M7')
  } else if (scale[2] === 12) {
    intervals.push('P8')
  }
  if (scale[3] === 1) {
    intervals.push('m2')
  } else if (scale[3] === 2) {
    intervals.push('M2')
  } else if (scale[3] === 3) {
    intervals.push('m3')
  } else if (scale[3] === 4) {
    intervals.push('M3')
  } else if (scale[3] === 5) {
    intervals.push('P4')
  } else if (scale[3] === 6) {
    intervals.push('#4')
  } else if (scale[3] === 7) {
    intervals.push('P5')
  } else if (scale[3] === 8) {
    intervals.push('m6')
  } else if (scale[3] === 9) {
    intervals.push('M6')
  } else if (scale[3] === 10) {
    intervals.push('m7')
  } else if (scale[3] === 11) {
    intervals.push('M7')
  } else if (scale[3] === 12) {
    intervals.push('P8')
  }
  if (scale[4] === 1) {
    intervals.push('m2')
  } else if (scale[4] === 2) {
    intervals.push('M2')
  } else if (scale[4] === 3) {
    intervals.push('m3')
  } else if (scale[4] === 4) {
    intervals.push('M3')
  } else if (scale[4] === 5) {
    intervals.push('P4')
  } else if (scale[4] === 6) {
    intervals.push('#4')
  } else if (scale[4] === 7) {
    intervals.push('P5')
  } else if (scale[4] === 8) {
    intervals.push('m6')
  } else if (scale[4] === 9) {
    intervals.push('M6')
  } else if (scale[4] === 10) {
    intervals.push('m7')
  } else if (scale[4] === 11) {
    intervals.push('M7')
  } else if (scale[4] === 12) {
    intervals.push('P8')
  }
  if (scale[5] === 1) {
    intervals.push('m2')
  } else if (scale[5] === 2) {
    intervals.push('M2')
  } else if (scale[5] === 3) {
    intervals.push('m3')
  } else if (scale[5] === 4) {
    intervals.push('M3')
  } else if (scale[5] === 5) {
    intervals.push('P4')
  } else if (scale[5] === 6) {
    intervals.push('#4')
  } else if (scale[5] === 7) {
    intervals.push('P5')
  } else if (scale[5] === 8) {
    intervals.push('m6')
  } else if (scale[5] === 9) {
    intervals.push('M6')
  } else if (scale[5] === 10) {
    intervals.push('m7')
  } else if (scale[5] === 11) {
    intervals.push('M7')
  } else if (scale[5] === 12) {
    intervals.push('P8')
  }
  if (scale[6] === 1) {
    intervals.push('m2')
  } else if (scale[6] === 2) {
    intervals.push('M2')
  } else if (scale[6] === 3) {
    intervals.push('m3')
  } else if (scale[6] === 4) {
    intervals.push('M3')
  } else if (scale[6] === 5) {
    intervals.push('P4')
  } else if (scale[6] === 6) {
    intervals.push('#4')
  } else if (scale[6] === 7) {
    intervals.push('P5')
  } else if (scale[6] === 8) {
    intervals.push('m6')
  } else if (scale[6] === 9) {
    intervals.push('M6')
  } else if (scale[6] === 10) {
    intervals.push('m7')
  } else if (scale[6] === 11) {
    intervals.push('M7')
  } else if (scale[6] === 12) {
    intervals.push('P8')
  }
  if (scale[7] === 1) {
    intervals.push('m2')
  } else if (scale[7] === 2) {
    intervals.push('M2')
  } else if (scale[7] === 3) {
    intervals.push('m3')
  } else if (scale[7] === 4) {
    intervals.push('M3')
  } else if (scale[7] === 5) {
    intervals.push('P4')
  } else if (scale[7] === 6) {
    intervals.push('#4')
  } else if (scale[7] === 7) {
    intervals.push('P5')
  } else if (scale[7] === 8) {
    intervals.push('m6')
  } else if (scale[7] === 9) {
    intervals.push('M6')
  } else if (scale[7] === 10) {
    intervals.push('m7')
  } else if (scale[7] === 11) {
    intervals.push('M7')
  } else if (scale[7] === 12) {
    intervals.push('P8')
  }
  if (scale[8] === 1) {
    intervals.push('m2')
  } else if (scale[8] === 2) {
    intervals.push('M2')
  } else if (scale[8] === 3) {
    intervals.push('m3')
  } else if (scale[8] === 4) {
    intervals.push('M3')
  } else if (scale[8] === 5) {
    intervals.push('P4')
  } else if (scale[8] === 6) {
    intervals.push('#4')
  } else if (scale[8] === 7) {
    intervals.push('P5')
  } else if (scale[8] === 8) {
    intervals.push('m6')
  } else if (scale[8] === 9) {
    intervals.push('M6')
  } else if (scale[8] === 10) {
    intervals.push('m7')
  } else if (scale[8] === 11) {
    intervals.push('M7')
  } else if (scale[8] === 12) {
    intervals.push('P8')
  }
  if (scale[9] === 1) {
    intervals.push('m2')
  } else if (scale[9] === 2) {
    intervals.push('M2')
  } else if (scale[9] === 3) {
    intervals.push('m3')
  } else if (scale[9] === 4) {
    intervals.push('M3')
  } else if (scale[9] === 5) {
    intervals.push('P4')
  } else if (scale[9] === 6) {
    intervals.push('#4')
  } else if (scale[9] === 7) {
    intervals.push('P5')
  } else if (scale[9] === 8) {
    intervals.push('m6')
  } else if (scale[9] === 9) {
    intervals.push('M6')
  } else if (scale[9] === 10) {
    intervals.push('m7')
  } else if (scale[9] === 11) {
    intervals.push('M7')
  } else if (scale[9] === 12) {
    intervals.push('P8')
  }
  if (scale[10] === 1) {
    intervals.push('m2')
  } else if (scale[10] === 2) {
    intervals.push('M2')
  } else if (scale[10] === 3) {
    intervals.push('m3')
  } else if (scale[10] === 4) {
    intervals.push('M3')
  } else if (scale[10] === 5) {
    intervals.push('P4')
  } else if (scale[10] === 6) {
    intervals.push('#4')
  } else if (scale[10] === 7) {
    intervals.push('P5')
  } else if (scale[10] === 8) {
    intervals.push('m6')
  } else if (scale[10] === 9) {
    intervals.push('M6')
  } else if (scale[10] === 10) {
    intervals.push('m7')
  } else if (scale[10] === 11) {
    intervals.push('M7')
  } else if (scale[10] === 12) {
    intervals.push('P8')
  }
  if (scale[11] === 1) {
    intervals.push('m2')
  } else if (scale[11] === 2) {
    intervals.push('M2')
  } else if (scale[11] === 3) {
    intervals.push('m3')
  } else if (scale[11] === 4) {
    intervals.push('M3')
  } else if (scale[11] === 5) {
    intervals.push('P4')
  } else if (scale[11] === 6) {
    intervals.push('#4')
  } else if (scale[11] === 7) {
    intervals.push('P5')
  } else if (scale[11] === 8) {
    intervals.push('m6')
  } else if (scale[11] === 9) {
    intervals.push('M6')
  } else if (scale[11] === 10) {
    intervals.push('m7')
  } else if (scale[11] === 11) {
    intervals.push('M7')
  } else if (scale[11] === 12) {
    intervals.push('P8')
  }
  if (scale[12] === 1) {
    intervals.push('m2')
  } else if (scale[12] === 2) {
    intervals.push('M2')
  } else if (scale[12] === 3) {
    intervals.push('m3')
  } else if (scale[12] === 4) {
    intervals.push('M3')
  } else if (scale[12] === 5) {
    intervals.push('P4')
  } else if (scale[12] === 6) {
    intervals.push('#4')
  } else if (scale[12] === 7) {
    intervals.push('P5')
  } else if (scale[12] === 8) {
    intervals.push('m6')
  } else if (scale[12] === 9) {
    intervals.push('M6')
  } else if (scale[12] === 10) {
    intervals.push('m7')
  } else if (scale[12] === 11) {
    intervals.push('M7')
  } else if (scale[12] === 12) {
    intervals.push('P8')
  }
  return intervals
}
