import React from 'react'
import './Inlay.scss'

type InlayProps = {
  nbFrets: number
  fretbordView: string
  focusZone: number[] | string
}

const Inlay = ({ nbFrets, fretbordView, focusZone }: InlayProps) => {
  const inlayCase: number[] = [3, 5, 7, 9, 12, 15, 17, 19, 21, 24]
  return (
    <div className='inlay-box'>
      {inlayCase.map((inlay, index) => {
        return (
          <span
            className={`inlayCase-${inlay}`}
            key={'inlayNb-' + index}
          >
            {inlay}
          </span>
        )
      })}
    </div>
  )
}

export default Inlay
