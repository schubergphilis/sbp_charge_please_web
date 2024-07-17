import styled from 'styled-components'

const InfoBox = () => {
	const session = window.sessionStorage.getItem('session')
	const poleId = session?.match(/^[a-zA-Z]{3}\d{3}$/gim)?.[0].toUpperCase()

	return (
		<Container>
			<p>
				Welcome at Schuberg Philis! We are glad that you are here. The charging space in front of our office is
				available for all personel working at Schuberg Philis and their visitors.
			</p>
			<p>
				<b>If you are visitor at Schuberg Philis:</b>
			</p>
			<ul>
				{poleId ? (
					<li>
						Connect your car to charge pole <b>{poleId}</b>
					</li>
				) : (
					<li>Connect your car to a charge pole</li>
				)}
				<li>
					Remember the charge pole id&nbsp;
					{!poleId ? (
						<span>
							(starting with <b>AMS00x</b>)
						</span>
					) : null}
				</li>
				<li>Tell the reception you want to charge your car</li>
			</ul>
		</Container>
	)
}

const Container = styled.div`
	padding: 1.5em;
	background-color: ${({ theme }) => theme.style.colorPrimary};
	color: ${({ theme }) => theme.style.buttonColor};
	font-size: 1.25rem;
	line-height: 1.5;
	border-bottom-right-radius: 3em;
	& > p:not(:last-child) {
		margin-bottom: 1em;
	}

	& > ul {
		list-style: disc outside none;
		list-style-type: disc;
		padding-left: 1em;
		& > li {
			display: list-item;
			list-style: disc outside none;

			& > span {
				font-size: 0.75em;
			}
		}
	}
`

export default InfoBox
