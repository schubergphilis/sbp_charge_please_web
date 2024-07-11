import styled from 'styled-components'
import FacebookIcon from './icons/FacebookIcon'
import GithubIcon from './icons/GithubIcon'
import InstagramIcon from './icons/InstagramIcon'
import LinkedInIcon from './icons/LinkedInIcon'
import TwitterIcon from './icons/TwitterIcon'

const SocialMedia = () => {
	return (
		<Container>
			<Link href="https://github.com/schubergphilis" target="_blank">
				<GithubIcon />
			</Link>
			<Link href="https://www.linkedin.com/company/schuberg-philis" target="_blank">
				<LinkedInIcon />
			</Link>
			<Link href="https://www.instagram.com/schubergphilis" target="_blank">
				<InstagramIcon />
			</Link>
			<Link href="https://twitter.com/schubergphilis" target="_blank">
				<TwitterIcon />
			</Link>
			<Link href="https://www.facebook.com/schubergphilis" target="_blank">
				<FacebookIcon />
			</Link>
		</Container>
	)
}

const Container = styled.div`
	background-color: ${({ theme }) => theme.style.colorPrimary};
	color: ${({ theme }) => theme.style.buttonColor};
	padding: 1em;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	flex: 1 1 auto;

	border-radius: 3em;
	border-top-left-radius: 0;
`
const Link = styled.a`
	display: block;
	width: 2.5em;
`
export default SocialMedia
