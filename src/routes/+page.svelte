<script>
	import Cart from '$lib/components/Cart.svelte';

	let { data } = $props();

	const initialCart = structuredClone(data.cart);

	let cart = $state(initialCart);
</script>

<h1>Shopping Cart</h1>

<Cart {cart} />