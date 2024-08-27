import { MouseEventHandler, useState } from 'react'

export default function Game({
	randomNumber,
	click,
}: {
	randomNumber: number
	click: MouseEventHandler
}) {
	const [showAnswer, setShowAnswer] = useState(false)
	function handleShow() {
		setShowAnswer(true)
	}

	const textLength: string =
		randomNumber.toString().length < 5 ? 'text-8xl' : 'text-6xl'
	return (
		<div className='text-center my-20'>
			<p
				className={`${textLength} cursor-pointer select-none`}
				onClick={click}
			>
				{randomNumber}
			</p>
			{showAnswer ? (
				<div className='mt-7'>
					<ul>
						<li className='mb-4 px-7'>
							<span className='font-bold block mb-1'>romaji</span>
							ichi oku kyuu sen ni hyaku kyuu juu hachi man sanzen
							yon hyaku nana juu roku
						</li>
						<li className='mb-4 px-7'>
							<span className='font-bold block mb-1'>kanji</span>
							一億九千二百九十八万三千四百七十六
						</li>
						<li className='mb-4 px-7'>
							<span className='font-bold block mb-1'>
								hiragana
							</span>
							いちおくきゅうせんにひゃくきゅうじゅうはちまんさんぜんよんひゃくななじゅうろく
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
