let shop = document.querySelector(".shoping");

let basket = JSON.parse(localStorage.getItem("data")) || [];

let gennerShop = () => {
    return (shop.innerHTML = dataShopItems
        .map((x) => {
            let { id, name, img, desc, price } = x;
            let search = basket.find((x) => x.id === id) || [];
            return `
        <div class="item">
    <figure class="thumb">
        <img class="thumb__img" loading="auto" src="${img}" alt="" />
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
                    onclick='decrement(${id})'
                    style="--color: red"
                    class="bi bi-dash-lg change"
                ></i>
                <div id="${id}" class="quantity">
               ${search.item === undefined ? 0 : search.item}
                </div>
                <i
                    onclick='increment(${id})'
                    style="--color: green"
                    class="bi bi-plus-lg change"
                ></i>
            </div>
           
        </div>
    </div>
    </div>
        `;
        })
        .join(" "));
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
    localStorage.setItem("data", JSON.stringify(basket));
    update(selectItem.id);
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
    localStorage.setItem("data", JSON.stringify(basket));
};

let update = (id) => {
    let search = basket.find((x) => x.id === id);
    document.getElementById(id).innerHTML = search.item;
    caculator();
};

let caculator = () => {
    document.querySelector(".cartAmount").innerHTML = basket
        .map((x) => x.item)
        .reduce((a, b) => a + b, 0);
};

let zoomImage = () => {
    let listImage = document.querySelectorAll("img");
    let mirror = document.querySelector(".mirror");
    listImage.forEach((img) => {
        img.addEventListener("mousemove", function (e) {
            mirror.classList.remove("hidden");
            mirror.style.top = `${e.clientY}px`;
            mirror.style.left = `${e.clientX}px`;

            let percentX = (e.offsetX / this.offsetWidth) * 100;

            let percentY = (e.offsetY / this.offsetHeight) * 100;
            let urlImg = e.target.getAttribute("src");
            mirror.style.backgroundSize = `1000px 1000px`;
            mirror.style.backgroundImage = `url(${urlImg})`;
            mirror.style.backgroundPosition = `${percentX}% ${percentY}%`;
        });
        img.addEventListener("mouseleave", (e) => {
            mirror.classList.add("hidden");
        });
    });
};

function run() {
    gennerShop();
    caculator();
    zoomImage();
}
run();
