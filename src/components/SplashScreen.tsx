import React from 'react'
import styles from './SplashScreen.module.scss'
import logo from '../assets/logo.svg'

type Props = {}

function SplashScreen({}: Props) {
	return (
		<div className={styles.splashScreen}>
			<div className={styles.circle}>
				<img src={logo} alt='arth logo' className={styles.arthLogo} />
			</div>
		</div>
	)
}

export default SplashScreen