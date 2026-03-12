<script>
	let { products } = $props();

	let totalItems = $derived(products.length);

	let totalPrice = $derived(products.reduce((sum, p) => sum + p.price * p.quantity, 0));
</script>

<div class="summary">
	<h2>Cart Summary</h2>

	<div class="summary-row">
		<span>Products</span>
		<span>{totalItems}</span>
	</div>

	<div class="summary-row total">
		<span>Total</span>
		<span>${totalPrice.toFixed(2)}</span>
	</div>
</div>

<style>
	.summary {
		padding: 1.25rem;
		border-radius: 10px;
		background: #fafafa;
		border: 1px solid #eee;
		display: grid;
		gap: 0.75rem;
	}

	.summary-row {
		display: flex;
		justify-content: space-between;
	}

	.total {
		font-weight: 600;
		margin-top: 0.25rem;
		font-size: 0.95rem;
	}
</style>
