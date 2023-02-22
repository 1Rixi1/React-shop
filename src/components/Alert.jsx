import React from 'react'

export const Alert = props => {
	const { name = '', hideAlert = Function.prototype } = props

	React.useEffect(() => {
		const timerId = setTimeout(() => {
			hideAlert('')
		}, 3000)

		return () => {
			clearTimeout(timerId)
		}
	}, [name])

	return (
		<div id='toast-container'>
			<div className='toast'>Вы добавили в корзину товар : {name}</div>
		</div>
	)
}
