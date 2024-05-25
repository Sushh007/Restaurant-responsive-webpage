// Navbar
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}
// Dark Mode
let darkmode = document.querySelector('#darkmode');

darkmode.onclick = () => {
    if(darkmode.classList.contains('bx-moon')){
        darkmode.classList.replace('bx-moon','bx-sun');
        document.body.classList.add('active');
    }else{
        darkmode.classList.replace('bx-sun','bx-moon');
        document.body.classList.remove('active');
    }
}



// Scroll Reveal
const sr = ScrollReveal ({
    origin: 'top',
    distance: '40px',
    duration: 2000,
    reset: true 
});

sr.reveal('.home-text,.home-img,.about-img, .about-text, .box, .s-box, .connect-text, .btn, .contact-box',{interval:50})


document.addEventListener('DOMContentLoaded', () => {
    const cart = [];

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const itemName = button.getAttribute('data-name');
            const itemPrice = button.getAttribute('data-price');
            const itemImg = button.getAttribute('data-img');

            const item = { name: itemName, price: itemPrice, img: itemImg };
            cart.push(item);
            updateCart();
        });
    });

    function updateCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
        // alert('Item added to cart');
    }

    function removeFromCart(itemName) {
        const index = cart.findIndex(item => item.name === itemName);
        if (index !== -1) {
            cart.splice(index, 1);
            updateCart();
            alert('Item removed from cart');
        }
    }

    // Example of how to remove an item (you need to create a similar button for removing items)
    document.querySelectorAll('.remove-from-cart').forEach(button => {
        button.addEventListener('click', () => {
            const itemName = button.getAttribute('data-name');
            removeFromCart(itemName);
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const cartCountElement = document.getElementById('cart-count');
    updateCartCount();

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const item = {
                name: button.getAttribute('data-name'),
                price: button.getAttribute('data-price'),
                img: button.getAttribute('data-img')
            };
            addToCart(item);
            updateCartCount();
        });
    });

    function addToCart(item) {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(item);
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        cartCountElement.textContent = cart.length;
    }
});

