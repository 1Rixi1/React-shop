import React from 'react'
import { BasketItem } from './BasketItem'

export const BasketList = props => {
	const {
		order = [],
		isShowBasket = Function.prototype,
		removeItemBasket = Function.prototype,
		quantityIncr = Function.prototype,
		quantityDescr = Function.prototype,
	} = props

	const allSum = order.reduce((acc, item) => {
		return acc + item.price * item.quantity
	}, 0)

	return (
		<ul className='collection with-header basket-menu'>
			<li className='collection-item active'>Корзина</li>

			{order.length ? (
				order.map(item => (
					<BasketItem
						key={item.id}
						{...item}
						removeItemBasket={removeItemBasket}
						quantityIncr={quantityIncr}
						quantityDescr={quantityDescr}
					/> //>
				))
			) : (
				<li className='collection-item'>Нет товара в корзине</li>
			)}

			<li className='collection-item active'>
				Общая стоимость : {allSum} руб.
			</li>
			<span className='material-icons basket-close' onClick={isShowBasket}>
				close
			</span>
		</ul>
	)
}
