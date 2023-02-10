import React from 'react'
import './CircleInfo.scss'

type CircleInfoProps = {
  string: string
  viewType: string
}

const CircleInfo = ({ string, viewType }: CircleInfoProps) => {
  return (
    <div className='circleInfo'>
      <span>{string}</span>
    </div>
  )
}

export default CircleInfo
