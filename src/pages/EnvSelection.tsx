import React from 'react'
import styles from './EnvSelection.module.scss'
import livelihood from '../assets/environments/livelihood.png'
import protection from '../assets/environments/protection.png'
import wealth from '../assets/environments/wealth.png'
import digitalAccess from '../assets/environments/digital-access.png'
import PinkButton from '../components/PinkButton'
import { useNavigate } from 'react-router-dom'
import { EnvType } from '../App'

type Props = {
  setEnv: (env: EnvType) => void
}

const imgNameArray = [
  {
    name: 'Roti',
    subText: 'Livelihood',
    img: livelihood,
  },
  {
    name: 'Kapda',
    subText: 'Protection',
    img: protection,
  },
  {
    name: 'Makaan',
    subText: 'Wealth',
    img: wealth,
  },
  {
    name: 'Internet',
    subText: 'Digital Access',
    img: digitalAccess,
  },
]

const backgrounds = [
  <svg
    width="165"
    height="190"
    viewBox="0 0 165 190"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 57C0 25.5198 25.5198 0 57 0H134.31C151.892 0 165.706 15.0521 164.199 32.5701L155.033 139.166C154.11 149.906 146.655 158.962 136.293 161.932L43.3686 188.569C21.6425 194.796 0 178.486 0 155.885V57Z"
      fill="url(#paint0_linear_1_1283)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_1_1283"
        x1="83.5"
        y1="0"
        x2="83.5"
        y2="201"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#74DEDD" />
        <stop offset="1" stopColor="#45C1C0" />
      </linearGradient>
    </defs>
  </svg>,
  <svg
    width="157"
    height="176"
    viewBox="0 0 157 176"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.15285 52.8627C9.32131 23.0665 34.1275 0 64.0025 0H127C143.569 0 157 13.4315 157 30V126.091C157 138.072 148.813 148.502 137.175 151.347L42.8766 174.405C20.4627 179.885 -0.78417 161.923 0.890655 138.91L7.15285 52.8627Z"
      fill="url(#paint0_linear_1_1287)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_1_1287"
        x1="77.25"
        y1="0"
        x2="77.25"
        y2="185.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#74DEDD" />
        <stop offset="1" stopColor="#45C1C0" />
      </linearGradient>
    </defs>
  </svg>,
  <svg
    width="173"
    height="176"
    viewBox="0 0 173 176"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.000713843 77.9721C0.000794941 52.5331 16.858 30.1737 41.3148 23.1731L117.644 1.32429C135.216 -3.70567 153.165 8.01355 155.627 26.125L171.99 146.498C174.112 162.106 161.978 176.001 146.227 176.001L34.0005 176.001C15.2228 176.001 0.000452081 160.778 0.000510331 142.001L0.000713843 77.9721Z"
      fill="url(#paint0_linear_1_1290)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_1_1290"
        x1="57.5092"
        y1="16.8279"
        x2="105.24"
        y2="194.961"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#74DEDD" />
        <stop offset="1" stopColor="#45C1C0" />
      </linearGradient>
    </defs>
  </svg>,
  <svg
    width="152"
    height="187"
    viewBox="0 0 152 187"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.923413 80.5456C-4.06122 50.3556 15.6802 21.616 45.6481 15.4351L115.94 0.937363C134.553 -2.9016 152 11.314 152 30.3189V161C152 175.359 140.359 187 126 187H47.3466C30.7066 187 16.5115 174.956 13.8008 158.539L0.923413 80.5456Z"
      fill="url(#paint0_linear_1_1286)"
    />
    <defs>
      <linearGradient
        id="paint0_linear_1_1286"
        x1="72"
        y1="-6.5"
        x2="72"
        y2="187"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#74DEDD" />
        <stop offset="1" stopColor="#45C1C0" />
      </linearGradient>
    </defs>
  </svg>,
]
function CharacterSelection({ setEnv }: Props) {
  const [selected, setSelected] = React.useState(-1)
  const navigate = useNavigate()
  const handleOnClick = () => {
    setEnv(imgNameArray[selected].name as EnvType)
    navigate('/questions')
  }
  return (
    <div className={styles.root}>
      <div className={styles.envSelection}>
        <div className={styles.topCircles}>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className="flex flex-col relative align-middle">
          <div className={styles.heading}>
            <h1>CHOOSE YOUR ENVIRONMENT</h1>
            <p>
              They are your basic necessities. For today, choose one which is
              most important to you!
            </p>
          </div>
          <div className={styles.selection}>
            {imgNameArray.map(({ img, name, subText }, index) => (
              <div
                onClick={() => setSelected(index)}
                key={index}
                className={
                  selected === index ? styles[`div${index + 1}active`] : ''
                }
              >
                <div
                  className={
                    selected >= 0 && selected !== index
                      ? `${styles.blur}`
                      : undefined
                  }
                >
                  {backgrounds[index]}
                </div>
                <img src={img} />
                <h2>{name}</h2>
                <h4>{subText}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
      {selected >= 0 && (
        <div className={styles.nextBtn}>
          <PinkButton onClick={handleOnClick}>{'NEXT >'}</PinkButton>
        </div>
      )}
    </div>
  )
}

export default CharacterSelection
