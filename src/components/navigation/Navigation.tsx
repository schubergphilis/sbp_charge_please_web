import styled from 'styled-components'
import FullLogo from '../icons/FullLogo'

const Navigation = () => {
	return (
		<Container>
			<Link href="https://schubergphilis.com">
				<FullLogo />
			</Link>
		</Container>
	)
}

const Container = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	display: flex;
	flex-direction: row;
	gap: 1em;
	padding: 2em 1.5em;
	background-image: linear-gradient(
		180deg,
		${({ theme }) => theme.style.fontColor},
		${({ theme }) => theme.style.shadow} 80%,
		#00000000 100%
	);
	overflow: hidden;
`
const Link = styled.a`
	display: block;
	height: 2em;
`

export default Navigation
