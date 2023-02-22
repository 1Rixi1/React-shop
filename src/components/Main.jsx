import React from 'react'

import { Cards } from './Cards'
import { Preloader } from './Preloader'

import { API_KEY, API_URL } from '../config'
import { Bascket } from './Bascket'
import { BasketList } from './basket/BasketList'
import { Alert } from './Alert'

export const Main = () => {
	const [items, setItems] = React.useState([])
	const [isLoading, setIsLoading] = React.useState(false)

	const [order, setOrder] = React.useState([])

	const [showBasket, setShowBasket] = React.useState(false)

	const [arertName, setAlertName] = React.useState('')

	const handleClickBtn = myObj => {
		const orderIndex = order.findIndex(i => i.id === myObj.id)

		if (orderIndex < 0) {
			const newOrder = {
				...myObj,
				quantity: 1,
			}
			setOrder(prevOrder => [...prevOrder, newOrder])
		} else {
			const newOrderQuantity = order.map((myOrder, index) => {
				if (orderIndex === index) {
					return {
						...myOrder,
						quantity: myOrder.quantity + 1,
					}
				} else {
					return myOrder
				}
			})
			setOrder(newOrderQuantity)
		}

		setAlertName(myObj.name)
	}

	const removeItemBasket = itemId => {
		const newOrder = order.filter(item => item.id !== itemId)
		setOrder(newOrder)
	}

	const quantityIncr = (id, quantity) => {
		const newOrderIndex = order.findIndex(item => item.id === id)

		const newOrder = order.map((myOrder, index) => {
			if (newOrderIndex === index) {
				return {
					...myOrder,
					quantity: quantity + 1,
				}
			} else {
				return myOrder
			}
		})

		setOrder(newOrder)
	}

	const quantityDescr = (id, quantity) => {
		if (quantity === 1) {
			const newOrder = order.filter(item => item.id !== id)
			setOrder(newOrder)
			return
		}

		const newOrderIndex = order.findIndex(item => item.id === id)

		const newOrder = order.map((myOrder, index) => {
			if (newOrderIndex === index) {
				return {
					...myOrder,
					quantity: quantity - 1,
				}
			} else {
				return myOrder
			}
		})

		setOrder(newOrder)
	}

	const isShowBasket = () => {
		setShowBasket(!showBasket)
	}

	const hideAlert = () => {
		setAlertName('')
	}

	React.useEffect(() => {
		setIsLoading(true)
		fetch(API_URL, {
			headers: {
				Authorization: API_KEY,
			},
		})
			.then(resp => resp.json())
			.then(data => {
				data.featured && setItems(data.featured)
			})

		setIsLoading(false)
	}, [])

	return (
		<div className='container content'>
			{arertName && <Alert hideAlert={hideAlert} name={arertName} />}
			<Bascket order={order} isShowBasket={isShowBasket} />
			{isLoading ? (
				<Preloader />
			) : (
				<Cards items={items} handleClickBtn={handleClickBtn} />
			)}

			{showBasket && (
				<BasketList
					order={order}
					isShowBasket={isShowBasket}
					removeItemBasket={removeItemBasket}
					quantityIncr={quantityIncr}
					quantityDescr={quantityDescr}
				/>
			)}
		</div>
	)
}
