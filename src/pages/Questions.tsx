import React, { useEffect, useState } from 'react'
import styles from './Questions.module.scss'
import _questions from '../Questions.json'
import PinkButton from '../components/PinkButton'
import alka from '../assets/people/Lata.png'
import manoj from '../assets/people/Manoj.png'
import meera from '../assets/people/Meera.png'
import ritu from '../assets/people/Ritu.png'
import { useNavigate } from 'react-router-dom'
import { CharacterType, EnvType } from '../App'
import status20 from '../assets/status/status20.svg'
import status40 from '../assets/status/status40.svg'
import status60 from '../assets/status/status60.svg'
import status80 from '../assets/status/status80.svg'
import status100 from '../assets/status/status100.svg'
import Elements, { ElementsType } from '../assets/elements'

const imageMappings = {
  Alka: alka,
  Manoj: manoj,
  Meera: meera,
  Ritu: ritu,
}
export type QuestionType = {
  question: string
  options: { text: string; persona: string }[]
  icon: ElementsType
}
const statusMappings = [status20, status40, status60, status80, status100]
type Props = {
  character: CharacterType
  env: EnvType
  setAnswers: (
    answers: { question: string; answer: string; persona: string }[]
  ) => void
}
export default function Questions({ env, setAnswers, character }: Props) {
  const [total, setTotal] = useState(0)
  const [questions, setQuestions] = useState<QuestionType[]>([])
  const [question, setQuestion] = useState(0)
  const [selected, setSelected] = React.useState(-1)
  const [answers, _setAnswers] = useState<
    { question: string; answer: string; persona: string }[]
  >([])
  const navigate = useNavigate()
  useEffect(() => {
    const questions = _questions[env] as QuestionType[]
    setQuestions(questions)
    setTotal(questions.length)
  }, [])

  const handleNext = async () => {
    const _answers = [
      ...answers,
      {
        question: questions[question].question,
        answer: questions[question].options[selected].text,
        persona: questions[question].options[selected].persona,
      } as { question: string; answer: string; persona: string },
    ]
    if (question < total - 1) {
      setQuestion(question + 1)
      setSelected(-1)
      _setAnswers(_answers)
      return
    }
    setAnswers(_answers)
    navigate('/quality')
  }
  return (
    <div className="min-h-screen">
      <div className={styles.questions}>
        <div className={`relative top-3 w-screen z-10 ${styles.status}`}>
          <img
            src={statusMappings[question]}
            className="m-auto pl-2 pr-2 w-full h-2"
          />
        </div>
        <div className={styles.upperCircle}></div>
        <div className="flex flex-col relative">
          <div className={styles.character}>
            <img src={imageMappings[character]} />
          </div>
          <div className={styles.question + ' flex flex-col'}>
            <h1 className="align-middle relative pb-5">
              {questions[question]?.question}
              <img
                src={Elements[questions[question]?.icon]}
                className="absolute right-0 -bottom-12 w-20"
              ></img>
            </h1>
          </div>
          <div className={styles.options}>
            {questions[question]?.options.map((option, index) => (
              <div className="flex flex-row" key={index}>
                <div>
                  <input
                    type="radio"
                    id={`option${index}`}
                    name="drone"
                    value={index}
                    onChange={() => setSelected(index)}
                    checked={selected === index}
                  />
                </div>
                <label
                  htmlFor={`option${index}`}
                  className={
                    selected === index ? styles.activeRadio : undefined
                  }
                >
                  {option.text}
                </label>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div>
        {selected >= 0 && (
          <div className={styles.nextBtn}>
            <PinkButton onClick={handleNext}>{'NEXT >'}</PinkButton>
          </div>
        )}
      </div>
    </div>
  )
}
