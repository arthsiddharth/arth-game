import React from 'react'
import styles from './Register.module.scss'
import quote from '../assets/quote.svg'
import PinkButton from '../components/PinkButton'
import rightArrow from '../assets/right-arrow.svg'
import { useNavigate } from 'react-router-dom'
import { UserInfoType } from '../App'
import BackgroundVector from '../components/BackgroundVector'
type Props = {
  setUserInfo: (userInfo: UserInfoType) => void
}

//todo: show error message
export default function Register({ setUserInfo }: Props) {
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [orgName, setOrgName] = React.useState('')
  const [allFilled, setAllFilled] = React.useState(false)
  const [isEmailValid, setIsEmailValid] = React.useState(false)
  const navigate = useNavigate()
  React.useEffect(() => {
    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    if (!emailRegex.test(email)) {
      setAllFilled(false)
      return setIsEmailValid(false)
    }
    const isEmailValid = true
    setIsEmailValid(isEmailValid)
    if (email && name && orgName && isEmailValid) setAllFilled(true)
  }, [name, email, orgName])

  const handleSubmit = () => {
    setUserInfo({ name, email, orgName })
    navigate('/introduction')
  }

  return (
    <>
      <div className={styles.register}>
        <div className={styles.quote}>
          <img src={quote} alt="ENTREPRENEUR IN YOU" />
        </div>
        <div className={styles.outerCircle + ' all-center'}></div>
        <div className={styles.innerCircle + ' all-center'}></div>
        <BackgroundVector />
        <div className={styles.registerForm}>
          <input
            placeholder="Enter Player's Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <input
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />

          <input
            placeholder="Enter your Organization's Name"
            value={orgName}
            onChange={(e) => setOrgName(e.target.value)}
          />
        </div>
      </div>
      {allFilled && isEmailValid && (
        <div className={styles.goBtn}>
          <PinkButton onClick={handleSubmit}>
            <img src={rightArrow}></img>
          </PinkButton>
        </div>
      )}
    </>
  )
}
