import { useState } from 'react'

interface FormData {
	from: string
	to: string
}

interface HomeProps {
	handleFormSubmit: (data: FormData) => void
	highScore: number
}

export default function Home({ handleFormSubmit, highScore }: HomeProps) {
	const [formData, setFormData] = useState<FormData>({
		from: '',
		to: '',
	})

	function handleChange(event: { target: { name: string; value: string } }) {
		// eslint-disable-next-line no-unsafe-optional-chaining
		const { name, value } = event?.target
		setFormData((prevFormData) => {
			return {
				...prevFormData,
				[name]: value,
			}
		})
	}

	function handleSubmit(e: { preventDefault: () => void }) {
		e.preventDefault()
		handleFormSubmit(formData)
	}

	return (
		<div className='text-center my-20'>
			<h2 className='mb-6 px-2 w-fit border border-white border-b-black mx-auto'>
				Enter a range (≤ 100k)
			</h2>
			<form onSubmit={handleSubmit}>
				<input
					type='number'
					autoComplete='off'
					id='from'
					name='from'
					value={formData.from}
					onChange={handleChange}
					className='border border-black rounded px-2 py-1 w-32 placeholder:text-black placeholder:opacity-80 mr-4'
					placeholder='from'
					required
				/>
				<input
					type='number'
					autoComplete='off'
					id='to'
					name='to'
					value={formData.to}
					onChange={handleChange}
					className='border border-black rounded px-2 py-1 w-32 placeholder:text-black placeholder:opacity-80 '
					placeholder='to'
					required
				/>
				<button className='block mx-auto mt-7 border border-black rounded px-6 py-1 bg-black text-white transition-colors duration-200 hover:bg-white hover:text-black'>
					LET'S GO
				</button>
			</form>
			<p className='mt-12'>
				High Score: <span>{highScore}</span>
			</p>
		</div>
	)
}
