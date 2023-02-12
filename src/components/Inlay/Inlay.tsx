import React from 'react'
import './Inlay.scss'

type InlayProps = {
  guitarDisplayType: string
  nbFrets: number
  fretbordView: string
  focusZone: number[] | string
}

const Inlay = ({ guitarDisplayType, nbFrets, fretbordView, focusZone }: InlayProps) => {
  const inlayCase: number[] = [3, 5, 7, 9, 12, 15, 17, 19, 21, 24]

  const inlayAdapter = (inlay: number, guitarDisplayType: string) => {
    let className = ''
    if (guitarDisplayType === 'diagramChords') {
      className = 'hidden'
    } else if (nbFrets <= inlay) {
      className = 'hidden'
    }
    return className
  }

  return (
    <div className='inlay-box'>
      {inlayCase.map((inlay, index) => {
        return (
          <span
            className={`inlayCase-${inlay} ${inlayAdapter(inlay, guitarDisplayType)}`}
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
