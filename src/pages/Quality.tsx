import React from 'react'
import { AnswerType, CharacterType } from '../App'
import styles from './Quality.module.scss'
import alka from '../assets/people/lata-half.png'
import manoj from '../assets/people/manoj-half.png'
import meera from '../assets/people/meera-half.png'
import ritu from '../assets/people/ritu-half.png'
import cloud from '../assets/cloud.svg'
import PinkButton from '../components/PinkButton'
import rightArrow from '../assets/right-arrow.svg'
import { useNavigate } from 'react-router-dom'

type Props = {
  character: CharacterType
  answers: AnswerType[]
  setFilteredAnswers: (filtered: { [key: string]: number }) => void
}
const imageMappings = {
  Alka: alka,
  Manoj: manoj,
  Meera: meera,
  Ritu: ritu,
}

function Quality({ character, answers, setFilteredAnswers }: Props) {
  const [personaCounts, setPersonaCounts] = React.useState<{
    [key: string]: number
  }>({})
  const navigate = useNavigate()
  React.useEffect(() => {
    const counts: any = {}
    answers.forEach((answer) => {
      counts[answer.persona] = counts[answer.persona]
        ? counts[answer.persona] + 1
        : 1
    })
    setFilteredAnswers(counts)
    setPersonaCounts(counts)
  }, [])

  return (
    <div className={styles.quality}>
      <h1>The Entrepreneur in you is...</h1>
      <div className={styles.circles}>
        <div className="all-center"></div>
        <div className="all-center"></div>
        <div className="all-center"></div>
        <div className="all-center">
          <img src={imageMappings[character]} />
        </div>
      </div>
      <div className={styles.clouds}>
        {Object.keys(personaCounts).map((persona) => (
          <div>
            <img src={cloud} />
            <h1>{persona}</h1>
          </div>
        ))}
      </div>
      <div className={styles.btn + ' horizontal-center'}>
        <PinkButton onClick={() => navigate('/persona')}>
          <img src={rightArrow}></img>
        </PinkButton>
      </div>
    </div>
  )
}

export default Quality
