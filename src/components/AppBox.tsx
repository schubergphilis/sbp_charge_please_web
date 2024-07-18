import styled from 'styled-components'

const AppBox = () => {
	return (
		<Container>
			<h2>The App</h2>
			<p>
				The Schuberg Philis 'Charge Please' app is automatically installed on the mobile phones of all Schuberg Philis
				colleagues. If you are a colleague and you do not have the 'Charge Please' app installed, contact the GtG team
				to have it (re-)installed.
			</p>
			<p>
				More (technical) information about the app can be found on{' '}
				<a href="https://confluence.schubergphilis.com/display/datacenter/New+ChargePlease+App" target="_blank">
					the related Confluence page
				</a>
				.
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
