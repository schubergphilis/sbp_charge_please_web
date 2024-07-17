import styled from 'styled-components'

const InfoBox = () => {
	const session = window.sessionStorage.getItem('session')

	return (
		<Container>
			<p>
				Welcome at Schuberg Philis! We are glad that you are here. The charging spaces at our offices are available for all our Schuberg Philis colleagues and our visitors.
			</p>
			<p>
				<b>If you are visitor at Schuberg Philis:</b>
			</p>
			<ul>
				{session ? (
					<li>
						Connect your car to charge pole <b>{session}</b>
					</li>
				) : (
					<li>Connect your car to a charge pole</li>
				)}
				<li>
					Remember the charge pole id&nbsp;
					{!session ? (
						<span>
							(starting with <b>AMS00x</b>)
						</span>
					) : (
						<span>
							(<b>{session}</b>)
						</span>
					)
					}
				</li>
				<li>Tell the reception or the person you are visiting that you want to charge your car, they can start the session for you</li>
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
