let basket = JSON.parse(localStorage.getItem("data")) || [];
let label = document.querySelector("#label");
let shopingCart = document.querySelector(".shoping-cart");
let caculator = () => {
    document.querySelector(".cartAmount").textContent = basket
        .map((x) => x.item)
        .reduce((a, b) => a + b, 0);
};

let gennerShopCartItems = () => {
    if (basket.length !== 0) {
        return (shopingCart.innerHTML = basket
            .map((x) => {
                let { id, img, item } = x;
                let search = dataShopItems.find((x) => x.id === id) || [];
                return `
                <div class="cart-item">
                    <figure class="cart__item-wrap">
                        <img class="cart__item-img" width="100" src="${
                            search.img
                        }" alt="">
                    </figure>
                    <div class="details">
                        <div class="title-price">
                            <h4>
                                <p>${search.name}</p>
                                <p class"dasjdasd">$ ${search.price}</p>
                            </h4>
                        </div>
                        <i onclick="removeItems(${id})" class="bi bi-x-lg"></i>
                    </div>
                    
                    <div class="buttons">
                    <i
                        onclick='decrement(${id})'
                        style="--color: red"
                        class="bi bi-dash-lg change"
                    ></i>
                    <div id="${id}" class="quantity">
                   ${item}
                    </div>
                    <i
                        onclick='increment(${id})'
                        style="--color: green"
                        class="bi bi-plus-lg change"
                    ></i>
                </div>
                <h3>$ ${item * search.price}</h3>
                </div>
                `;
            })
            .join(""));
    } else {
        shopingCart.innerHTML = `
        <h2 class="content__line-wraper" >Cart is empty</h2>
        <a href="../index.html">
           Back to home
        </a>
        `;
    }
};

let increment = (id) => {
    let selectItem = id;
    let search = basket.find((x) => x.id === selectItem.id);
    if (search === undefined) {
        basket.push({
            id: selectItem.id,
            item: 1,
        });
    } else {
        search.item++;
    }
    gennerShopCartItems();
    update(selectItem.id);
    localStorage.setItem("data", JSON.stringify(basket));
};
let decrement = (id) => {
    let selectItem = id;
    let search = basket.find((x) => x.id === selectItem.id);
    if (search === undefined) return;
    if (search.item === 0) {
        return;
    } else {
        search.item--;
    }
    update(selectItem.id);
    basket = basket.filter((x) => x.item !== 0);
    gennerShopCartItems();
    localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id) => {
    let search = basket.find((x) => x.id === id);
    document.getElementById(id).innerHTML = search.item;
    caculator();
};

let removeItems = (id) => {
    let selectItems = id;
    basket = basket.filter((x) => x.id !== selectItems.id);
    gennerShopCartItems();
    localStorage.setItem("data", JSON.stringify(basket));
    // console.log(basket);
};

let totalAmount = () => {
    if (basket.length !== 0) {
        let amount = basket
            .map((x) => {
                let { id, item } = x;
                let search = dataShopItems.find((x) => x.id === id) || [];
                return item * search.price;
            })
            .reduce((a, b) => a + b, 0);
        label.innerHTML = `
            <h2>Total bill : $ ${amount}</h2>
            <button onclick="clearItems()">clear item</button>
        `;
    }
    if (basket.length < 0) {
        return;
    }
};

let clearItems = () => {
    basket = [];
    totalAmount();
    localStorage.setItem("data", JSON.stringify(basket));
    gennerShopCartItems();
};

function run() {
    caculator();
    gennerShopCartItems();
    totalAmount();
}
run();
