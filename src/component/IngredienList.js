import React from 'react'
import Ingredien from './Ingredien'

export default function IngredienList({ ingredients }) {
	return (
		<div>
			{
				ingredients.map((ingredien)=>{
					return <Ingredien  key={ingredien.id} {...ingredien} />
				})
			}
		</div>
	)
}