import React from 'react'
import styles from './Loader.module.scss'
import PinkButton from './PinkButton'

type Props = {}

function Loader({}: Props) {
  return (
    <div className={` ${styles.loader}`}>
      <div className="flex flex-row">
        <PinkButton children={undefined} />
        <PinkButton children={undefined} />
        <PinkButton children={undefined} />
      </div>
    </div>
  )
}

export default Loader
