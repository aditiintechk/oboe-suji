import { useState } from 'react'
import './App.css'
import Header from './components/Header.tsx'
import Home from './components/Home.tsx'
import Game from './components/Game.tsx'

function App() {
	const [showGame, setShowGame] = useState(false)
	const [randomNumber, setRandomNumber] = useState(0)
	const [formData, setFormData] = useState({
		from: '',
		to: '',
	})
	function handleFormSubmit(data: { from: string; to: string }) {
		setFormData(data)
		setShowGame(true)
		setRandomNumber(Number(data.from))
	}

	function click() {
		// setRandomNumber(Math.floor(Math.random() * 100))
		console.log(randomNumber)
		setRandomNumber(
			Math.floor(
				Math.random() *
					(Number(formData.to) - Number(formData.from) + 1)
			) + Number(formData.from)
		)
	}
	return (
		<div className='max-w-sm mx-auto py-4 border border-black'>
			<Header />
			{showGame ? (
				<Game randomNumber={randomNumber} click={click} />
			) : (
				<Home handleFormSubmit={handleFormSubmit} />
			)}
		</div>
	)
}

export default App
