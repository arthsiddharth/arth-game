import { user } from 'firebase-functions/v1/auth'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { AnswerType, CharacterType, EnvType, UserInfoType } from '../App'
import styles from './Rewards.module.scss'
import axios from 'axios'
import chocolate from '../assets/rewards/chocolate.svg'
import bag from '../assets/rewards/bag.svg'
import bandanwar from '../assets/rewards/bandanwar.svg'
import candy from '../assets/rewards/candy.svg'
import murtiDress from '../assets/rewards/murti-dress.svg'
import PinkButton from '../components/PinkButton'
import BackgroundVector from '../components/BackgroundVector'
import stars from '../assets/stars.svg'

type Props = {
  reward: string
  token: string
}

const imgMappings = {
  'Murti Dress': murtiDress,
  Candy: candy,
  Chocolate: chocolate,
  Bandanwar: bandanwar,
  Bags: bag,
}
function Rewards({ reward, token }: Props) {
  const [seen, setSeen] = React.useState(false)
  const navigate = useNavigate()
  const [loading, setLoading] = React.useState(false)

  return (
    <div>
      <BackgroundVector />
      <div className={`flex flex-col ${styles.rewards} text-center relative`}>
        <h1>Celebrate the Entrepreneur in You!</h1>
        <h6>Congratulations!</h6>
        <div
          className="relative cursor-pointer"
          onClick={() => {
            console.log(seen)
            !loading && setSeen(true)
          }}
        >
          <div
            className={
              (seen ? styles.seenCard : styles.scratchCard) + ' cursor-pointer'
            }
          >
            {loading ? 'loading...' : null}
            {token && seen && (
              <div>
                <img src={(imgMappings as any)[reward]} />
                <p className="mt-3">{reward}</p>
              </div>
            )}
          </div>
          {!seen && <img src={stars} className="absolute left-6 top-6" />}
        </div>
        <p>
          {seen
            ? 'Collect your Custom made Reward by sharing the below CODE to our Booth at the Exibition area.'
            : 'Scratch the Card to access your Reward'}
        </p>
        {seen && <h5>{token}</h5>}
        {seen && (
          <div
            className={styles.goBtn + ' m-auto h-auto'}
            style={{ height: 'auto' }}
          >
            <PinkButton
              onClick={() => {
                navigate('/end')
              }}
            >
              End Game
            </PinkButton>
          </div>
        )}
      </div>
      <p className={`p-3 w-full text-center ${styles.copyright}`}>
        ©Copyright ARTH 2022
      </p>
    </div>
  )
}

export default Rewards
