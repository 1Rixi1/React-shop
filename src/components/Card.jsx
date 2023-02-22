import React from 'react'

export const Card = props => {
	const {
		id,
		name,
		description = 'https://via.placeholder.com/300.png/09f/fff',
		full_background,
		price,
		handleClickBtn = Function.prototype,
	} = props

	return (
		<div className='card'>
			<div className='card-image'>
				<img src={full_background} alt={name} />
			</div>
			<div className='card-content'>
				<span className='card-title'>{name}</span>

				<p>{description}</p>
			</div>
			<div className='card-action'>
				<button
					onClick={() => handleClickBtn({ id, name, price })}
					className='btn'
				>
					Купить
				</button>
				<span className='right' style={{ fontSize: '1.8rem' }}>
					{price} руб.
				</span>
			</div>
		</div>
	)
}
