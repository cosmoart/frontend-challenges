import AgeCalculator from './AgeCalculator'
import Footer from './Footer'
import './index.css'
import './App.css'

export default function AppMain () {
	return (
		<>
			<h1 className='hidden'>Age calculator</h1>
			<AgeCalculator />
			<Footer />
		</>
	)
}
