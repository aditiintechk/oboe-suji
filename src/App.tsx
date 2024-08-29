import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header.tsx'
import Home from './components/Home.tsx'
import Game from './components/Game.tsx'

function App() {
	const [showGame, setShowGame] = useState(false)
	const [randomNumber, setRandomNumber] = useState(0)
	const [showAnswer, setShowAnswer] = useState(false)
	const [score, setScore] = useState(0)
	const [highScore, setHighScore] = useState(0)
	const [isRevealed, setIsRevealed] = useState(false)

	const [formData, setFormData] = useState({
		from: '',
		to: '',
	})

	useEffect(() => {
		const storedHighScore = localStorage.getItem('highScore')
		if (storedHighScore) setHighScore(JSON.parse(storedHighScore))
	}, [])

	function handleFormSubmit(data: { from: string; to: string }) {
		setFormData(data)
		setShowGame(true)
		setRandomNumber(Number(data.from))
	}

	function handleReveal() {
		setShowAnswer(true)
		setIsRevealed(true)
		setScore(0)
	}

	function handleExit() {
		setHighScore((prevHighScore) => {
			if (score > prevHighScore) {
				const newHighScore = score
				localStorage.setItem('highScore', JSON.stringify(newHighScore))
				return newHighScore
			} else {
				return prevHighScore
			}
		})
		setShowGame(false)
		setScore(0)
	}

	function handleNumberClick() {
		if (!isRevealed) {
			setScore((prevScore) => prevScore + 1)
		}
		setIsRevealed(false)
		setRandomNumber(
			Math.floor(
				Math.random() *
					(Number(formData.to) - Number(formData.from) + 1)
			) + Number(formData.from)
		)
		setShowAnswer(false)
		// setScore((prevScore) => prevScore + 1)
	}

	return (
		<div className='max-w-sm mx-auto py-4 text-lg'>
			<Header />
			{showGame ? (
				<Game
					randomNumber={randomNumber}
					handleNumberClick={handleNumberClick}
					handleReveal={handleReveal}
					handleExit={handleExit}
					showAnswer={showAnswer}
					score={score}
				/>
			) : (
				<Home
					handleFormSubmit={handleFormSubmit}
					highScore={highScore}
				/>
			)}
		</div>
	)
}

export default App
