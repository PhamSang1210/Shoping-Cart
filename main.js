let shop = document.querySelector(".shoping");

let shopItemsData = [
    {
        id: "dkjaskdaskld",
        name: "Casual Shirt",
        price: 45,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        img: "./asset/img/img-1.jpg",
    },
    {
        id: "djasdaskdkasdj",
        name: "Office Shirt",
        price: 100,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        img: "./asset/img/img-2.jpg",
    },
    {
        id: "adjasdiuaisdh",
        name: "T Shirt",
        price: 25,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        img: "./asset/img/img-3.jpg",
    },
    {
        id: "asidasuhdajsd",
        name: "Mens Suit",
        price: 300,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        img: "./asset/img/img-4.jpg",
    },
];

let basket = [];

let generateShop = () => {
    return (shop.innerHTML = shopItemsData
        .map((items) => {
            let { id, name, price, desc, img } = items;
            return `
    <div id="product-id-${id}" class="item">
        <figure class="thumb">
            <img src="${img}" alt="" />
        </figure>
        <div class="details">
            <h3>${name}</h3>
            <p>
                ${desc}
            </p>
            <div class="price-quantity">
                <h2>$ ${price}</h2>  

                <div class="buttons">
                    <i
                        onclick="decrement(${id})"
                        style="--color: red"
                        class="bi bi-dash-lg change"
                    ></i>
                    <div id=${id} class="quantity">0</div>
                    <i
                        onclick="increment(${id})"
                        style="--color: green"
                        class="bi bi-plus-lg change"
                    ></i>
                </div>

            </div>
        </div>
    </div>`;
        })
        .join(" "));
};
generateShop();

let increment = (id) => {
    let seclectItem = id;
    let search = basket.find((element) => {
        return element.id === seclectItem.id;
    });
    if (search === undefined) {
        basket.push({
            id: seclectItem.id,
            item: 1,
        });
    } else {
        search.item++;
    }
    update(seclectItem.id);
};

let decrement = (id) => {
    let seclectItem = id;
    let search = basket.find((element) => {
        return element.id === seclectItem.id;
    });
    if (search.item === 0) {
        return;
    } else {
        search.item--;
    }
    update(seclectItem.id);
};

let update = (id) => {
    let search = basket.find((x) => {
        return x.id === id;
    });
    document.getElementById(id).textContent = search.item;
    caculator();
};

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
