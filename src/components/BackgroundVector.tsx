import React from 'react'
import topRightvector from '../assets/top-right-vector.svg'
import bottomRightVector from '../assets/bottom-right-vector.svg'
import leftVector from '../assets/left-vector.svg'
type Props = {}

function BackgroundVector({}: Props) {
  return (
    <div>
      <img src={topRightvector} className="absolute right-0 top-0 w-20" />
      <img src={bottomRightVector} className="absolute right-0 bottom-0 w-20" />
      <img src={leftVector} className="absolute left-0  top-5 " />
    </div>
  )
}

export default BackgroundVector
