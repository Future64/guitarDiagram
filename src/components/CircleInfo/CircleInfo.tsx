import React from 'react'
import './CircleInfo.scss'

type CircleInfoProps = {
  circleZone: string
  string: string
  viewType: string
}

const CircleInfo = ({ circleZone, string, viewType }: CircleInfoProps) => {
  return (
    <div className='circleInfo'>
      <span>{string}</span>
    </div>
  )
}

export default CircleInfo
