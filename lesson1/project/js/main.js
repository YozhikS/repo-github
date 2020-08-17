const products = [
  {id: 1, title: 'Notebook', price: 20000},
  {id: 2, title: 'Mouse', price: 1500},
  {id: 3, title: 'Keyboard', price: 5000},
  {id: 4, title: 'Gamepad', price: 4500},
];

const renderProduct = (title, price, img = './img/notImg.png') => {
  return `<div class="product-item">
            <h3>${title}</h3>
            <img src="${img}" alt="${title}" title="${title}" width="150" height="150">
            <p>${price}</p>
            <button class="by-btn">Добавить в корзину</button>
          </div>`;
};

const renderProducts = (list) => {
  const productList = list.map((product) => {
    document.querySelector('.products').innerHTML += renderProduct(product.title, product.price);
  });
}

renderProducts(products);
