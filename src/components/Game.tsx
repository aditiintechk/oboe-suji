import { MouseEventHandler } from 'react'
import dataOne from '../json/dataOne.json'
import dataTwo from '../json/dataTwo.json'

interface DataObject {
	number: number
	romaji: string
	kanji: string
	hiragana: string
}

const typedDataOne = dataOne as DataObject[]
const typedDataTwo = dataTwo as DataObject[]

export default function Game({
	randomNumber,
	handleNumberClick,
	handleReveal,
	handleExit,
	showAnswer,
	score,
}: {
	randomNumber: number
	handleNumberClick: MouseEventHandler
	handleReveal: MouseEventHandler
	handleExit: MouseEventHandler
	showAnswer: boolean
	score: number
}) {
	function getCurrentObject() {
		if (randomNumber <= 50000) {
			return typedDataOne.find(
				(obj: { number: number }) => Number(randomNumber) === obj.number
			)
		} else {
			return typedDataTwo.find(
				(obj: { number: number }) => Number(randomNumber) === obj.number
			)
		}
	}

	const currentObject = getCurrentObject()

	return (
		<div className='text-center my-20'>
			<p
				className={`text-8xl cursor-pointer select-none`}
				onClick={handleNumberClick}
			>
				{randomNumber}
			</p>
			{showAnswer && currentObject ? (
				<div className='mt-7'>
					<ul>
						<li className='mb-4 px-7'>
							<span className='font-bold block mb-1'>romaji</span>
							{currentObject.romaji}
						</li>
						<li className='mb-4 px-7'>
							<span className='font-bold block mb-1'>kanji</span>
							{currentObject.kanji}
						</li>
						<li className='mb-4 px-7'>
							<span className='font-bold block mb-1'>
								hiragana
							</span>
							{currentObject.hiragana}
						</li>
					</ul>
				</div>
			) : (
				<button
					type='button'
					className='text-md mx-auto mt-7 border border-black rounded px-7 py-1 bg-black text-white trans
					ition-colors duration-200 hover:bg-white hover:text-black'
					onClick={handleReveal}
				>
					REVEAL
				</button>
			)}
			<div className='flex justify-center items-center mt-24 p-4 w-3/4 gap-4 mx-auto'>
				<p className='text-lg border border-black rounded-md px-4 w-40'>
					Score: <span className='inline-block w-8'>{score}</span>
				</p>
				<button
					type='button'
					className='text-sm border border-black rounded px-7 py-1 bg-black text-white transition-colors duration-200 hover:bg-white hover:text-black'
					onClick={handleExit}
				>
					EXIT
				</button>
			</div>
		</div>
	)
}
