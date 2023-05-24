import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

export const LoginButton = () => {
	const { loginWithRedirect } = useAuth0()

	const handleLogin = async () => {
		await loginWithRedirect({
			appState: {
				returnTo: '/profile',
			},
		})
	}

	return (
		<button className='login_button' onClick={handleLogin}>
			Log In
		</button>
	)
}
