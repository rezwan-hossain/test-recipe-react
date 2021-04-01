import React from 'react'

export default function Ingredien({ name, amount }) {
	return (
		<>
			<span> { name } </span>
			<span> { amount} </span>
		</>
	)
}