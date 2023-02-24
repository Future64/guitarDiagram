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
  scale: number[] | string[]
  scaleSorted: string[] | number[]
  displayScale?: string
  index: number
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

  const displayInfo = () => {
    if (viewType === 'degree') {
      return degreeConversion(degreesNote)
    } else if (viewType === 'name') {
      return nameNote
    } else if (viewType === 'interval') {
      return intervalCalculator(scale)[degreesNote - 1]
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
