import styled from 'styled-components'

const Header = () => {
	return (
		<Container>
			<h1>Charge Please</h1>
		</Container>
	)
}

const Container = styled.div`
	background-image: linear-gradient(
			360deg,
			${({ theme }) => theme.style.fontColor},
			${({ theme }) => theme.style.shadow} 30%,
			#00000000 100%
		),
		url('highway-street.jpg');
	background-position: center center;
	background-size: cover;
	color: ${({ theme }) => theme.style.buttonColor};
	padding: 1.5em;
	padding-top: 10em;
`
export default Header
