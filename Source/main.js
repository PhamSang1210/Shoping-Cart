let shop = document.querySelector(".shoping");

//Data items

let basket = JSON.parse(localStorage.getItem("DATA")) || [];

let generateShop = () => {
    return (shop.innerHTML = shopItemsData
        .map((items) => {
            let { id, name, price, desc, img } = items;
            let search = basket.find((x) => x.id === id) || [];
            return `
    <div id="product-id-${id}" class="item">
        <figure class="thumb">
            <img loading="auto" src="${img}" alt="" />
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
                    <div id=${id} class="quantity">
                       ${search.item === undefined ? 0 : search.item}
                    </div>
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
    localStorage.setItem("DATA", JSON.stringify(basket));
    update(seclectItem.id);
};

let decrement = (id) => {
    let seclectItem = id;
    let search = basket.find((element) => {
        return element.id === seclectItem.id;
    });
    //Check click equal 0
    if (search === undefined) return;
    //End
    if (search.item === 0) {
        return;
    } else {
        search.item--;
    }
    update(seclectItem.id);
    basket = basket.filter((x) => x.item !== 0);
    localStorage.setItem("DATA", JSON.stringify(basket));
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

caculator();

// SessionStorage
// let input = document.querySelector(".temp");
// input.value = sessionStorage.getItem("draft");
// input.addEventLis    tener("change", asdasidha);
// function asdasidha() {
//     sessionStorage.setItem("draft", input.value);
// }
