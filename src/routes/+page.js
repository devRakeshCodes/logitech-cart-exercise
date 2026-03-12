export async function load({ fetch }) {
	const res = await fetch('https://dummyjson.com/carts/1')
	const cart = await res.json()

	return { cart }
}