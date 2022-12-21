import React from 'react'
import { AnswerType, CharacterType, EnvType, UserInfoType } from '../App'
import styles from './Persona.module.scss'
import digitalAccess from '../assets/environments/digital-access.png'
import livelihood from '../assets/environments/livelihood.png'
import protection from '../assets/environments/protection.png'
import wealth from '../assets/environments/wealth.png'
import alka from '../assets/people/Lata.png'
import manoj from '../assets/people/Manoj.png'
import meera from '../assets/people/Meera.png'
import ritu from '../assets/people/Ritu.png'
import personaTexts from '../persona.json'
import PinkButton from '../components/PinkButton'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Loader from '../components/Loader'
type Props = {
  env: EnvType
  character: CharacterType
  filtered: { [key: string]: number }
  userInfo: UserInfoType
  answers: AnswerType[]
  setReward: (reward: string) => void
  setToken: (token: string) => void
}
const imgEnvMapping = {
  Roti: livelihood,
  Kapda: protection,
  Makaan: wealth,
  Internet: digitalAccess,
}
const imgCharacterMapping = {
  Ritu: ritu,
  Alka: alka,
  Meera: meera,
  Manoj: manoj,
}
function Persona({
  env,
  character,
  filtered,
  userInfo,
  answers,
  setToken,
  setReward,
}: Props) {
  const [personas, setPersonas] = React.useState<string[]>([])
  const [loading, setLoading] = React.useState(false)
  const navigate = useNavigate()

  const handleSubmit = () => {
    if (
      !userInfo.email ||
      !userInfo.name ||
      !userInfo.orgName ||
      !character ||
      !env
    ) {
      console.log({ userInfo, character, env })
      navigate('/')
    }
    console.log({
      email: userInfo.email,
      name: userInfo.name,
      orgName: userInfo.orgName,
      responses: answers,
    })
    setLoading(true)
    axios
      .post('https://asia-south1-arth-game-d3db9.cloudfunctions.net/getToken', {
        email: userInfo.email,
        name: userInfo.name,
        orgName: userInfo.orgName,
        responses: answers,
      })
      .then((res) => {
        setToken(res.data.code)
        setReward(res.data.reward)
        navigate('/rewards')
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => setLoading(false))
  }
  React.useEffect(() => {
    const personas = Object.keys(filtered)
    personas.sort((a, b) => filtered[b] - filtered[a])
    setPersonas(personas)
  }, [filtered])

  return (
    <div className={styles.persona}>
      {loading && <Loader />}
      <div className={styles.outerCircle}></div>
      <div className={styles.innerCircle}></div>
      <img src={imgEnvMapping[env]} className={styles.environmentImg} />
      <img
        src={imgCharacterMapping[character]}
        className={styles.characterImg}
      />
      <div className={styles.text}>
        <h1>
          YOU ARE {personas[0]} {character}!
        </h1>
        <p className="mb-20">
          {personas.map((persona) => (personaTexts as any)[persona]).join(' ')}
        </p>
        <div className="w-60 m-auto">
          <PinkButton onClick={handleSubmit}>Earn Reward</PinkButton>
        </div>
      </div>
    </div>
  )
}

export default Persona
