import React from 'react'
import PinkButton from '../components/PinkButton'
import styles from './Introduction.module.scss'
import rightArrow from '../assets/right-arrow.svg'
import Lata from '../assets/people/Lata.png'
import Manoj from '../assets/people/Manoj.png'
import Meera from '../assets/people/Meera.png'
import Ritu from '../assets/people/Ritu.png'
import { useNavigate } from 'react-router-dom'

type Props = {}

function Introduction({}: Props) {
  const navigate = useNavigate()
  return (
    <div className={styles.root}>
      <div className={styles.introduction}>
        <div className={styles.outerCircle}></div>
        <div className={styles.innerCircle}></div>
        <div className={`flex flex-col ${styles.content}`}>
          <div className={styles.characters}>
            <img src={Meera}></img>
            <img src={Ritu}></img>
            <img src={Lata}></img>
            <img src={Manoj}></img>
          </div>
          <div className="text">
            <h1>Introduction</h1>
            <p>
              Entrepreneurs have many traits that assist them in building
              dreams. Some of them work smart to make money, some for a cause,
              while some want to earn a living for their families, and so do
              micro-entrepreneurs.
              <br />
              <br />
              Though, they might not be understood very well! Let's find out who
              the micro-entrepreneur in you is?
            </p>
            <p></p>
          </div>
        </div>
      </div>
      <div>
        <div className={`m-auto + ${styles.nextBtn}`}>
          <PinkButton onClick={() => navigate('/characterSelection')}>
            <img src={rightArrow}></img>
          </PinkButton>
        </div>
      </div>
    </div>
  )
}

export default Introduction
