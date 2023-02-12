import React from 'react'
import './CircleInfo.scss'

type CircleInfoProps = {
  guitarDisplayType: string
  circleZone: string
  string: string
  viewType: string
  displayScale?: string
}

const CircleInfo = ({
  guitarDisplayType,
  circleZone,
  string,
  viewType,
  displayScale,
}: CircleInfoProps) => {
  const circleInfoStyle: object = { transform: 'rotate(-90deg)' }
  // console.log(displayScale)

  return (
    <div
      className={`circleInfo ${displayScale}`}
      style={guitarDisplayType === 'diagramChords' ? circleInfoStyle : {}}
    >
      <span>{string}</span>
    </div>
  )
}

export default CircleInfo
