<script>
	import Cart from '$lib/components/Cart.svelte';

	let { data } = $props();

	const initialCart = structuredClone(data.cart);

	let cart = $state(initialCart);
</script>

<h1 class="title">Shopping Cart</h1>

<Cart {cart} />

<style>
	.title {
		text-align: center;
		margin-top: 2rem;
		font-size: 2rem;
	}
</style>
