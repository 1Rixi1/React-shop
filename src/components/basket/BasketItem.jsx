import React from 'react'

export const BasketItem = props => {
	const {
		id,
		name,
		quantity,
		price,
		removeItemBasket = Function.prototype,
		quantityIncr = Function.prototype,
		quantityDescr = Function.prototype,
	} = props

	return (
		<li className='collection-item'>
			{name} x {quantity} = {price * quantity}{' '}
			<button onClick={() => quantityIncr(id, quantity)}>+</button>{' '}
			<button onClick={() => quantityDescr(id, quantity)}>-</button>
			<span
				className='material-icons right closeBasket-item'
				onClick={() => removeItemBasket(id)}
			>
				close
			</span>
		</li>
	)
}
