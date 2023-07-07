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
        id: "dkjaskdaskld",
        name: "Office Shirt",
        price: 100,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        img: "./asset/img/img-2.jpg",
    },
    {
        id: "dkjaskdaskld",
        name: "T Shirt",
        price: 25,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        img: "./asset/img/img-3.jpg",
    },
    {
        id: "dkjaskdaskld",
        name: "Mens Suit",
        price: 300,
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        img: "./asset/img/img-4.jpg",
    },
];

function generateShop() {
    return (shop.innerHTML = shopItemsData
        .map((items) => {
            let { id, name, price, desc, img } = items;
            return `<div class="item">
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
                        style="--color: red"
                        class="bi bi-dash-lg change"
                    ></i>
                    <div class="quantity">0</div>
                    <i
                        style="--color: green"
                        class="bi bi-plus-lg change"
                    ></i>
                </div>
            </div>
        </div>
    </div>`;
        })
        .join(" "));
}
generateShop();
