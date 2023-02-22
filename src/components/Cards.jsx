import React from 'react'

import { Card } from './Card'

export const Cards = props => {
	const {
		items = [],
		handleClickBtn = Function.prototype,

	} = props

	if(!items.length) {
		return <h1>Not Found</h1>
	}

	return (
		<div className='items'>
			{items.map(item => (
				<Card key={item.id} handleClickBtn={handleClickBtn} {...item} />
			))}
		</div>
	)
}
