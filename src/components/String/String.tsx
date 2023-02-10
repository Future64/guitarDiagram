import React from 'react'
import CircleInfo from '../CircleInfo/CircleInfo'
import './String.scss'

type StringProps = {
  key: number
  string: string
  nbStrings: number
  nbFrets: number
  tuning: string[]
  enhamronics: string
  viewType: string
  fretbordView: string
  focusZone: number[] | string
}

const String = ({
  key,
  string,
  nbStrings,
  nbFrets,
  tuning,
  enhamronics,
  viewType,
  fretbordView,
  focusZone,
}: StringProps) => {
  return (
    <div className='string'>
      <CircleInfo
        string={string}
        viewType={viewType}
      />
    </div>
  )
}

export default String
