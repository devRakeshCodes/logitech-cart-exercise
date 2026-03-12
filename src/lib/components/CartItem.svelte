<script>
	let { product, removeItem } = $props();
</script>

<div class="item">
	<div class="info">
		<h3>{product.title}</h3>

		<p>Price: ${product.price}</p>

		<p>Quantity: {product.quantity}</p>

		<p>Total: ${(product.price * product.quantity).toFixed(2)}</p>
	</div>

	<button onclick={() => removeItem(product.id)}> Remove </button>
</div>

<style>
	.item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 1rem;
		border: 1px solid #ddd;
		border-radius: 6px;
	}

	.info {
		display: grid;
		gap: 0.25rem;
	}
</style>
