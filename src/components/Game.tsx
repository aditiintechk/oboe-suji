import { MouseEventHandler, useState } from 'react'
import dataOne from '../json/dataOne.json'

export default function Game({
	randomNumber,
	handleNumberClick,
}: {
	randomNumber: number
	handleNumberClick: MouseEventHandler
}) {
	const [showAnswer, setShowAnswer] = useState(false)
	function handleShow() {
		setShowAnswer(true)
	}

	function getCurrentObject() {
		return dataOne.find(
			(obj: { number: number }) => Number(randomNumber) === obj.number
		)
	}

	const textLength: string =
		randomNumber.toString().length < 5 ? 'text-8xl' : 'text-6xl'
	return (
		<div className='text-center my-20'>
			<p
				className={`${textLength} cursor-pointer select-none`}
				onClick={handleNumberClick}
			>
				{randomNumber}
			</p>
			{showAnswer ? (
				<div className='mt-7'>
					<ul>
						<li className='mb-4 px-7'>
							<span className='font-bold block mb-1'>romaji</span>
							{getCurrentObject().romaji}
						</li>
						<li className='mb-4 px-7'>
							<span className='font-bold block mb-1'>kanji</span>
							{getCurrentObject().kanji}
						</li>
						<li className='mb-4 px-7'>
							<span className='font-bold block mb-1'>
								hiragana
							</span>
							{getCurrentObject().hiragana}
						</li>
					</ul>
				</div>
			) : (
				<button
					type='button'
					className='text-sm mx-auto mt-7 border border-black rounded px-7 py-1 bg-black text-white transition-colors duration-200 hover:bg-white hover:text-black'
					onClick={handleShow}
				>
					REVEAL
				</button>
			)}
		</div>
	)
}
