function getAllProduct() {
    var promise = axios({
        url: "https://shop.cyberlearn.vn/api/Product",
        method: "GET",
        responseType: "json"
    });
    promise.then(function (res) {
        console.log(res);
        renderProduct(res.data.content);
    });
    promise.catch(function (err) {
        console.log(err);
    });
}

getAllProduct();

function renderProduct(arr) {
    var content = "";
    for (var i=0; i<arr.length; i++) {
        var productSever = arr[i];
        var product = new Product();
        Object.assign(product, productSever);
        console.log(product);
        content += `
        <div class="modal__category__content">
            <div class="modal__category__item">
                <div class="modal__item__img">
                    <img src="${product.image}" alt="" class="img__block">
                </div>
                <div class="modal__item__star">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </div>
                <div class="modal__item__text">
                    <h3 class="title"><a href="./product/product.html?productid=${product.id}">${product.name}</a></h3>
                    <p class="sub__title">
                        <a href="#">
                        ${product.shortDescription}
                        </a>
                    </p>
                    <div class="item__text__price d-flex">
                        <p class="title__1">$${product.price}.00</p>

                    </div>
                </div>
                <div class="d-flex justify-content-between modal__item__cart">
                    <div class="item__cart_left">
                        <a href="./product/product.html">
                            <i class="fa-solid fa-cart-shopping"></i>
                            <span>
                                Add to cart
                            </span>
                        </a>
                    </div>
                    <div class="item__cart__right">
                        <i class="fa-solid fa-receipt"></i>
                        <i class="fa-solid fa-arrow-up-right-from-square"></i>
                    </div>
                </div>
            </div>
        </div>
        `;
        // console.log(content);
    }
    document.getElementById('tbodyProduct').innerHTML = content;
}

