import styled from 'styled-components'

const AppBox = () => {
	return (
		<Container>
			<h2>The App</h2>
			<p>
				All Schuberg Philis personnel we automatically have the app pushed towards their mobile devices. When you don't
				have the app installed yet? Please contact CorpIT for more information.
			</p>
			<AppImage src="ios-app.png" width="100%" height="auto" />
		</Container>
	)
}

const Container = styled.div`
	padding: 1.5em;
	padding-bottom: 0;
	font-size: 1.25rem;
	line-height: 1.5;
	border-bottom-right-radius: 3em;
	& > h2:not(:last-child) {
		margin-bottom: 0.5em;
	}

	& > p:not(:last-child) {
		margin-bottom: 1em;
	}
`
const AppImage = styled.img`
	display: block;
	margin: auto;
	max-width: 20em;
`

export default AppBox
