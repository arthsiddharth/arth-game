import './App.css'
import Introduction from './pages/Introduction'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import CharacterSelection from './pages/CharacterSelection'
import EnvSelection from './pages/EnvSelection'
import { useState } from 'react'
import Questions from './pages/Questions'
import Quality from './pages/Quality'
import Persona from './pages/Persona'
import Rewards from './pages/Rewards'
import End from './pages/End'

export type EnvType = 'Roti' | 'Kapda' | 'Makaan' | 'Internet'
export type CharacterType = 'Alka' | 'Manoj' | 'Meera' | 'Ritu'
export type AnswerType = {
  question: string
  answer: string
  persona: string
}
export type UserInfoType = {
  name: string
  email: string
  orgName: string
}
function App() {
  const [env, _setEnv] = useState<EnvType>('Roti')
  const [character, _setCharacter] = useState<CharacterType>('Alka')
  const [answers, _setAnswers] = useState<AnswerType[]>([])
  const [filtered, _setFiltered] = useState<{ [key: string]: number }>({})
  const [userInfo, _setUserInfo] = useState({} as UserInfoType)
  const [token, _setToken] = useState('')
  const [reward, _setReward] = useState('')
  const setCharacter = (character: CharacterType) => _setCharacter(character)
  const setEnv = (env: EnvType) => _setEnv(env)
  const setAnswers = (
    answers: { question: string; answer: string; persona: string }[]
  ) => _setAnswers(answers)
  const setFiltered = (filtered: { [key: string]: number }) =>
    _setFiltered(filtered)
  const setUserInfo = (userInfo: UserInfoType) => _setUserInfo(userInfo)
  const setToken = (token: string) => _setToken(token)
  const setReward = (reward: string) => _setReward(reward)
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/register"
        element={<Register setUserInfo={setUserInfo} />}
      />
      <Route path="/introduction" element={<Introduction />} />
      <Route
        path="/characterSelection"
        element={<CharacterSelection setCharacter={setCharacter} />}
      />
      <Route path="/envSelection" element={<EnvSelection setEnv={setEnv} />} />
      <Route
        path="/questions"
        element={
          <Questions character={character} env={env} setAnswers={setAnswers} />
        }
      />
      <Route
        path="/quality"
        element={
          <Quality
            character={character}
            answers={answers}
            setFilteredAnswers={setFiltered}
          />
        }
      />
      <Route
        path="/persona"
        element={
          <Persona
            env={env}
            character={character}
            filtered={filtered}
            userInfo={userInfo}
            answers={answers}
            setToken={setToken}
            setReward={setReward}
          />
        }
      />
      <Route
        path="/rewards"
        element={<Rewards reward={reward} token={token} />}
      />
      <Route path="/end" element={<End />} />
    </Routes>
  )
}

export default App
