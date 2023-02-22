import React from 'react'

export const Bascket = props => {
	const { order = [], isShowBasket = Function.prototype} = props

	return (
		<div className='bascket blue darken-2 white-text' onClick={isShowBasket}>
			<i className='material-icons'>shopping_cart</i>
			{order.length ? <span className='cart-value'>{order.length}</span> : null}
		</div>
	)
}
