import React, { useState } from 'react'
import './CircleInfo.scss'
import { intervalCalculator } from '../../utils/intervalCalculator'
import { degreeConversion } from '../../utils/degreeConversion'

type CircleInfoProps = {
  guitarDisplayType: string
  circleZone: string
  string: string
  degreesNote: number
  viewType: string
  scale: number[]
  scaleSorted: string[]
  displayScale?: string
  index?: number
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
  index,
}: CircleInfoProps) => {
  const circleInfoStyle: object = { transform: 'rotate(-90deg)' }
  const nameNote: string = string

  // const displayInterval = () => {
  //   for (let i = 0; i < scale.length; i++) {
  //     return intervalCalculator(scale[index])
  //   }
  // }
  console.log(scale[0])

  const displayInfo = () => {
    if (viewType === 'degree') {
      return degreeConversion(degreesNote)
    } else if (viewType === 'name') {
      return nameNote
    } else if (viewType === 'interval') {
      return '?'
    }
  }

  return (
    <div
      className={`circleInfo ${displayScale}`}
      style={guitarDisplayType === 'diagramChords' ? circleInfoStyle : {}}
    >
      <span>{displayInfo()}</span>
    </div>
  )
}

export default CircleInfo
