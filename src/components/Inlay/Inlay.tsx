import React from 'react'
import './Inlay.scss'

type InlayProps = {
  nbFrets: number
  fretbordView: string
  focusZone: number[] | string
}

const Inlay = ({ nbFrets, fretbordView, focusZone }: InlayProps) => {
  return <div className='inlay'></div>
}

export default Inlay
