const label = document.querySelector("#label");
const shopingCart = document.querySelector(".shoping-cart");

let basket = JSON.parse(localStorage.getItem("DATA")) || [];

let caculator = () => {
    let cartIcon = document.querySelector(".cartAmount");
    cartIcon.textContent = basket
        .map((items) => {
            return items.item;
        })
        .reduce((result, item) => {
            return result + item;
        }, 0);
};
caculator();

function generateCartItems() {
    if (basket.length !== 0) {
    } else {
        shopingCart.innerHTML = `
            <h2 class="text-center">CART is EMPTY</h2>
            <a class="center__btn" href="../index.html">
                BACK TO HOME
            </a>
        `;
    }
}
generateCartItems();
