import Form from '@/components/intro-component-with-sign-up-form/Form';
import Footer from '@/components/intro-component-with-sign-up-form/Footer';

export default function IndexPage () {
	return (
		<>
			<article className='md:text-left md:w-2/4'>
				<h1 className='text-2xl font-bold px-6 my-4 md:text-5xl md:px-0 3x-l:text-6xl'>Learn to code by watching others</h1>
				<p className='font-normal text-sm text-white text-opacity-70 my-4 leading-6'>
					See how experienced developers solve problems in real-time. Watching scripted tutorials is great,
					but understanding how developers think is invaluable.
				</p>

			</article>

			<div className='md:w-2/4'>
				<p className='rounded-md bg-pBlue p-5 text-sm px-4 mt-7 mb-4 shadow-pShadow leading-4'><strong>Try it free 7 days</strong> then $20/mo. thereafter</p>
				<Form />
			</div>

			<Footer />
		</>
	)
}