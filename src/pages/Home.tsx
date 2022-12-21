import React from 'react'
import GameStart from '../components/GameStart'
import SplashScreen from '../components/SplashScreen'

type Props = {}

const Home = (props: Props) => {
  return (
    <>
      <SplashScreen />
      <GameStart />
    </>
  )
}

export default Home
