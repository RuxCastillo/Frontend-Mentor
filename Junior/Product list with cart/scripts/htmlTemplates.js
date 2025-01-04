export const items = (
	image,
	item,
	price
) => `<div class="image__container u-mb-2-5r">
		<img
			src=${image}
			alt=${item.name}
			class="image__container--image"
		/>
		<div class="image__container--cart text-preset-4">
			<img
				src="./assets/images/icon-add-to-cart.svg"
				class="image__container--icon"
			/>
			Add to Cart
		</div>
		<div class="minus plus"></div>
	</div>
	<span class="menu__item-title text-preset-4">${item.category}</span>

	<h2 class="menu__item-subtitle text-preset-3">${item.name}</h2>
	<data value="${price}" class="menu__item-price text-preset-3">
		$${price}
	</data>`;

export const itemInCart = (
	image,
	item,
	price,
	cantidad
) => `<div class="image__container u-mb-2-5r">
		<img
			src=${image}
			alt=${item.name}
			class="image__container--image"
		/>
		<div class="image__container--cart text-preset-4">
			<img
				src="./assets/images/icon-decrement-quantity.svg"
				class="image__container--icon minus"
			/>
			<span class="image__container--quantity">${cantidad}</span>
			<img
				src="./assets/images/icon-increment-quantity.svg"
				class="image__container--icon plus" />
		</div>
	</div>
	<span class="menu__item-title text-preset-4">${item.category}</span>

	<h2 class="menu__item-subtitle text-preset-3">${item.name}</h2>
	<data value="${price}" class="menu__item-price text-preset-3">
		$${price}
	</data>`;

export const cartVacio = () => `
					<h3 class="text-preset-2 cart__title u-mb-1-5r">
						Your Cart (<!-- Quantity -->0)
					</h3>
					<img
						src="./assets/images/illustration-empty-cart.svg"
						alt="empty car image"
						class="cart__image u-mb-1r"
					/>
					<p class="text-preset-5 cart__p u-mt-1r">
						Your added items will appear here
					</p>`;

export const carroConCosas = (cantidadTotal) => `
					<h3 class="text-preset-2 cart__title u-mb-1-5r">
						Your Cart (${cantidadTotal})
					</h3>`;

export const cartItem = (name, quantity, price, total) => `
					<div class="cart__item__info text-preset-5">
						<div><h3 class="u-mb--5r">${name}</h3></div>
						<div>
							<span class="cart__item--quantity u-mr-1r">${quantity}x</span
							><span class="cart__item--price u-mr-1r text-preset-4"
								>@ $${price}</span
							><span class="cart__item--total">$${total}</span>
						</div>
					</div>
					<div class="cart__item--remove">
						<img src="./assets/images/icon-remove-item.svg" alt="" />
					</div>`;

export const cartFinal = (totalDinero) => `
				<div class="cart__final">
					<div class="cart__final--total">
						<span class="text-preset-4">Order Total</span
						><data value="${totalDinero}" class="text-preset-2">$${totalDinero}</data>
					</div>
					<div class="cart__final--carbon-neutral text-preset-4 u-mb-1-5r">
						<img
							src="./assets/images/icon-carbon-neutral.svg"
							alt=""
							class="u-mr--5r"
						/><span>
							This is a
							<span class="text-preset-5"> carbon-neutral </span>delivery</span
						>
					</div>
					<button class="button__final text-preset-3">Confirm Order</button>
				</div>`;
