import { useState } from 'react'
import './App.css'
import Header from './components/Header.tsx'
import Home from './components/Home.tsx'
import Game from './components/Game.tsx'

function App() {
	const [randomNumber, setRandomNumber] = useState(19)
	const [showGame, setShowGame] = useState(false)
	function handleClick() {
		console.log(randomNumber)
		setShowGame(true)
	}

	function click() {
		setRandomNumber(Math.floor(Math.random() * 100))
	}
	return (
		<div className='max-w-sm mx-auto py-4 border border-black'>
			<Header />
			{showGame ? (
				<Game randomNumber={randomNumber} click={click} />
			) : (
				<Home handleClick={handleClick} />
			)}
		</div>
	)
}

export default App
