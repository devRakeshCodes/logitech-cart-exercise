<script>
	import CartItem from './CartItem.svelte';
	import CartSummary from './CartSummary.svelte';
	import { fade } from 'svelte/transition';

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
	{#if products.length === 0}
		<p class="empty">Your cart is empty.</p>
	{:else}
		<div class="items">
			{#each products as product (product.id)}
				<CartItem {product} {removeItem} />
			{/each}
		</div>

		<CartSummary {products} />
	{/if}
	<button onclick={resetCart} disabled={isCartDisabled}> Reset Cart </button>
</div>

<style>
	.cart {
		display: grid;
		gap: 1.25rem;
		max-width: 700px;
		margin: 3rem auto;
		padding: 1rem;
	}

	.items {
		display: grid;
		gap: 0.5rem;
	}

	.empty {
		text-align: center;
		color: #666;
		padding: 2rem 0;
		font-size: 0.95rem;
	}

	button {
		align-self: flex-start;
		border: none;
		background: #222;
		color: white;
		padding: 0.55rem 0.9rem;
		border-radius: 6px;
		cursor: pointer;
		font-size: 0.9rem;
		transition:
			background 0.15s ease,
			opacity 0.15s ease;
	}

	button:hover {
		background: #444;
	}

	button:disabled {
		opacity: 0.5;
		cursor: not-allowed;
	}

	/* small screen polish */
	@media (max-width: 480px) {
		.cart {
			margin: 2rem auto;
			padding: 0.75rem;
		}
	}
</style>
