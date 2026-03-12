<script>
	let { products } = $props();

	let totalItems = $derived(products.length);

	let totalPrice = $derived(products.reduce((sum, p) => sum + p.price * p.quantity, 0));
</script>

<div class="summary">
	<h2>Cart Summary</h2>

	<p>Total Products: {totalItems}</p>

	<p>Total Price: ${totalPrice.toFixed(2)}</p>
</div>

<style>
	.summary {
		padding: 1rem;
		border-top: 2px solid #ccc;
		display: grid;
		gap: 0.5rem;
	}
</style>
