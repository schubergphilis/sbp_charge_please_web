import { ThemeProvider } from 'styled-components'
import AppBox from './components/AppBox'
import Footer from './components/Footer'
import Header from './components/Header'
import InfoBox from './components/InfoBox'
import Navigation from './components/navigation/Navigation'
import { GlobalStyles, lightTheme } from './styles/ThemeConfig'

const App = () => {
	const queryParams = new URLSearchParams(window.location.search)
	const session = queryParams.get('session')
	const poleId = session?.match(/^[a-zA-Z]{3}\d{3}$/gim)?.[0].toUpperCase()

	if (poleId) {
		window.sessionStorage.setItem('session', poleId)
		window.location.href = `sbpcharge://session/${poleId}`
		setTimeout(() => {
			window.location.href = '?'
		}, 250)
	}

	return (
		<ThemeProvider theme={lightTheme}>
			<GlobalStyles />
			<Navigation />
			<Header />
			<InfoBox />
			<AppBox />
			<Footer />
		</ThemeProvider>
	)
}

export default App
