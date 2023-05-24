import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

export const LogoutButton = () => {
	const { logout } = useAuth0()

	const handleLogout = () => {
		logout({
			appState: {
				returnTo: window.location.origin,
			},
			authorizationParams: {
				screen_hint: 'signup',
			},
		})
	}

	return (
		<button className='logout__button' onClick={handleLogout}>
			Log Out
		</button>
	)
}
