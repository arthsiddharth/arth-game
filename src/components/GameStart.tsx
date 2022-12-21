import React from 'react'
import styles from './GameStart.module.scss'
import quote from '../assets/quote.svg'
import PinkButton from './PinkButton'
import { useNavigate } from 'react-router-dom'
type Props = {}

function GameStart({}: Props) {
  const navigate = useNavigate()
  return (
    <div className={styles.introduction}>
      <div className={styles.quote}>
        <img src={quote} alt="ENTREPRENEUR IN YOU" />
      </div>
      <div className={styles.outerCircle}></div>
      <div className={styles.innerCircle}></div>
      <div className={styles.playBtn}>
        <PinkButton onClick={() => navigate('/register')}>PLAY</PinkButton>
      </div>
      <p className={styles.description}>
        Play to make your Decisions as a Micro-Entrepreneur and Win exciting
        Rewards!
      </p>
      <p className={`p-3 w-full text-center ${styles.copyright}`}>
        ©Copyright ARTH 2022
      </p>
    </div>
  )
}

export default GameStart
