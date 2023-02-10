import React from 'react'
import './Nut.scss'

type NutProps = {
  nbStrings: number
  nbFrets: number
  tuning: string[]
  enhamronics: string
  viewType: string
  fretbordView: string
  focusZone: number[] | string
}

const Nut = ({
  nbStrings,
  nbFrets,
  tuning,
  enhamronics,
  viewType,
  fretbordView,
  focusZone,
}: NutProps) => {
  return <div className='nut'></div>
}

export default Nut
