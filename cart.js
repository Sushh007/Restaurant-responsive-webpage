document.addEventListener('DOMContentLoaded', () => {
    const cartContainer = document.getElementById('cart-container');
    const totalPriceElement = document.getElementById('total-price');
    const cartCountElement = document.getElementById('cart-count');
    
    loadCart();

    function loadCart() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        updateCartDisplay(cart);
        updateCartCount();
    }

    function updateCartDisplay(cart) {
        cartContainer.innerHTML = '';
        let totalPrice = 0;

        cart.forEach((item, index) => {
            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');

            cartItem.innerHTML = `
                <img src="${item.img}" alt="${item.name}">
                <h3>${item.name}</h3>
                <span>Rs ${item.price}</span>
                <button class="remove-from-cart" data-index="${index}">Remove</button>
            `;

            cartContainer.appendChild(cartItem);
            totalPrice += parseInt(item.price);
        });

        totalPriceElement.textContent = totalPrice;

        document.querySelectorAll('.remove-from-cart').forEach(button => {
            button.addEventListener('click', () => {
                const itemIndex = button.getAttribute('data-index');
                removeFromCart(itemIndex);
                updateCartCount();
            });
        });
    }

    function removeFromCart(itemIndex) {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.splice(itemIndex, 1);
        localStorage.setItem('cart', JSON.stringify(cart));
        updateCartDisplay(cart);
    }

    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cartCountElement.textContent = cart.length;
    }
});

