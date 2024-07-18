import styled from 'styled-components'
import SocialMedia from './SocialMedia'

const Footer = () => {
	return (
		<Card>
			<h1>We bridge the gap between business and technology.</h1>
			<h4>Let's get in touch!</h4>
			<div>
				<b>Schiphol-Rijk</b>
				<ul>
					<li>Boeingavenue 271</li>
					<li>1119 PD Schiphol-Rijk</li>
					<li>
						<a href="tel:+31 20 - 750 650 0">+31 (0)20 - 750 650 0</a>
					</li>
				</ul>
			</div>

			<div>
				<b>Rotterdam</b>
				<ul>
					<li>Oostmaaslaan 53-71</li>
					<li>3063 AN Rotterdam</li>
					<li>
						<a href="tel:+31 10 322 546 0">+31 (0)10 - 322 546 0</a>
					</li>
				</ul>
			</div>

			<div>
				<b>Email addresses</b>
				<ul>
					<li>
						<a href="mailto:info@schubergphilis.com">info@schubergphilis.com</a>
					</li>
					<li>
						<a href="mailto:sales@schubergphilis.com">sales@schubergphilis.com</a>
					</li>
					<li>
						<a href="mailto:recruitment@schubergphilis.com">recruitment@schubergphilis.com</a>
					</li>
				</ul>
			</div>

			<SocialMedia />
		</Card>
	)
}

const Card = styled.div`
	padding: 1.5em;
	background-color: ${({ theme }) => theme.style.cardColorBg};
	border-top-left-radius: 3em;
	line-height: 1.75em;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	gap: 2em;

	& a {
		color: inherit;
		border-bottom: none;
	}
`

export default Footer
