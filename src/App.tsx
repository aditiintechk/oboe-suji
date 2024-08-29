import { useState } from 'react'
import './App.css'
import Header from './components/Header.tsx'
import Home from './components/Home.tsx'
import Game from './components/Game.tsx'

function App() {
	const [showGame, setShowGame] = useState(false)
	const [randomNumber, setRandomNumber] = useState(0)
	const [showAnswer, setShowAnswer] = useState(false)
	const [score, setScore] = useState(0)

	const [formData, setFormData] = useState({
		from: '',
		to: '',
	})

	function handleFormSubmit(data: { from: string; to: string }) {
		setFormData(data)
		setShowGame(true)
		setRandomNumber(Number(data.from))
	}

	function handleShow() {
		setShowAnswer(true)
		setScore(0)
	}

	function handleNumberClick() {
		setRandomNumber(
			Math.floor(
				Math.random() *
					(Number(formData.to) - Number(formData.from) + 1)
			) + Number(formData.from)
		)
		setShowAnswer(false)
		setScore((prevScore) => prevScore + 1)
	}

	return (
		<div className='max-w-sm mx-auto py-4'>
			<Header />
			{showGame ? (
				<Game
					randomNumber={randomNumber}
					handleNumberClick={handleNumberClick}
					handleShow={handleShow}
					showAnswer={showAnswer}
					score={score}
				/>
			) : (
				<Home handleFormSubmit={handleFormSubmit} />
			)}
		</div>
	)
}

export default App
