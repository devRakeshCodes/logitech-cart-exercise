<script>
	import CartItem from './CartItem.svelte';
	import CartSummary from './CartSummary.svelte';

	let { cart } = $props();

	const initialProducts = [...cart.products];

	let products = $state([...initialProducts]);

	let isCartDisabled = $derived(products.length === initialProducts.length);

	function removeItem(id) {
		products = products.filter((p) => p.id !== id);
	}

	function resetCart() {
		products = [...initialProducts];
	}
</script>

<div class="cart">
	{#each products as product (product.id)}
		<CartItem {product} {removeItem} />
	{/each}

	<CartSummary {products} />

	<button onclick={resetCart} disabled={isCartDisabled}>
		Reset Cart
	</button>
</div>

<style>
	.cart {
		display: grid;
		gap: 1rem;
		max-width: 700px;
		margin: auto;
	}
</style>