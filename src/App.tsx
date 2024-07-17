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

	if (session) {
		window.sessionStorage.setItem('session', session)
		window.location.href = `sbpcharge://session/${session}`
		setTimeout(() => {
			window.location.href = '?'
		}, 2000)
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
