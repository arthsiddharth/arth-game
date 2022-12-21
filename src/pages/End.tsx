import React from 'react'
import logo from '../assets/logo.svg'
import Lata from '../assets/people/Lata.png'
import Manoj from '../assets/people/Manoj.png'
import Meera from '../assets/people/Meera.png'
import Ritu from '../assets/people/Ritu.png'
import PinkButton from '../components/PinkButton'
import styles from './End.module.scss'

type Props = {}

export default function End({}: Props) {
  return (
    <div className={`flex flex-col ${styles.end}`}>
      <img src={logo} className={styles.logo} />
      <h1 className={styles.h1}>Micro MSME Fintech</h1>
      <div>
        <div className={styles.characters}>
          <img src={Meera}></img>
          <img src={Ritu}></img>
          <img src={Lata}></img>
          <img src={Manoj}></img>
          <div className="flex flex-row ">
            <PinkButton>Powering Micro businesses !</PinkButton>
          </div>
        </div>
      </div>
    </div>
  )
}
