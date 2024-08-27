import { MouseEventHandler } from 'react'

export default function Home({
	handleClick,
}: {
	handleClick: MouseEventHandler
}) {
	return (
		<div className='text-center my-20'>
			<h2 className='mb-6 px-2 w-fit border border-white border-b-black mx-auto'>
				Enter a range (≤ 10k)
			</h2>
			<form>
				<input
					type='number'
					autoComplete='off'
					className='border border-black rounded px-2 py-1 w-32 placeholder:text-black placeholder:opacity-80 mr-4'
					placeholder='from'
				/>
				<input
					type='number'
					autoComplete='off'
					className='border border-black rounded px-2 py-1 w-32 placeholder:text-black placeholder:opacity-80 '
					placeholder='to'
				/>
				<button
					type='button'
					className='block mx-auto mt-7 border border-black rounded px-6 py-1 bg-black text-white transition-colors duration-200 hover:bg-white hover:text-black'
					onClick={handleClick}
				>
					LET'S GO
				</button>
			</form>
			<p className='mt-12'>
				High Score: <span>0</span>
			</p>
		</div>
	)
}
