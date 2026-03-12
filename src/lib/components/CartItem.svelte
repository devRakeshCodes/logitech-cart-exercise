<script>
	let { product, removeItem } = $props();
</script>

<div class="item">
	<div class="info">
		<h3>{product.title}</h3>

		<p class="meta">
			Price: ${product.price} • Qty: {product.quantity}
		</p>

		<p class="total">
			${(product.price * product.quantity).toFixed(2)}
		</p>
	</div>

	<button onclick={() => removeItem(product.id)}> Remove </button>
</div>

<style>
	.item {
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
		gap: 0.75rem;
		padding: 1.25rem;
		background: white;
		border-radius: 12px;
		border: 1px solid #eaeaea;
		box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
	}

	.info {
		flex: 1;
		min-width: 0;
	}

	button {
		flex-shrink: 0;
		align-self: flex-end;
		border: none;
		background: #cf393b;
		color: white;
		padding: 0.5rem 0.75rem;
		border-radius: 6px;
		cursor: pointer;

		white-space: nowrap;
	}

	button:hover {
		background: #e63b3d;
	}

	.meta {
		font-size: 0.9rem;
		color: #666;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
</style>
