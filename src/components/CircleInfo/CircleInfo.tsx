import React, { useState } from 'react'
import './CircleInfo.scss'

type CircleInfoProps = {
  guitarDisplayType: string
  circleZone: string
  string: string
  degreesNote: number
  viewType: string
  scale: number[]
  scaleSorted: string[]
  displayScale?: string
}

const CircleInfo = ({
  guitarDisplayType,
  circleZone,
  string,
  degreesNote,
  viewType,
  scale,
  scaleSorted,
  displayScale,
}: CircleInfoProps) => {
  const degreeConversion = (degreesNote: number) => {
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
  const circleInfoStyle: object = { transform: 'rotate(-90deg)' }
  const nameNote: string = string
  const displayInfo: string | number = viewType === 'degree' ? degreeConversion(degreesNote) : nameNote

  return (
    <div
      className={`circleInfo ${displayScale}`}
      style={guitarDisplayType === 'diagramChords' ? circleInfoStyle : {}}
    >
      <span>{displayInfo}</span>
    </div>
  )
}

export default CircleInfo
