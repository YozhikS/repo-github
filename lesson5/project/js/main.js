const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
  el: '#app',
  data: {
    catalogUrl: '/catalogData.json',
    products: [],
    imgCatalog: 'https://placehold.it/200x150',
    imgCart: 'https://placehold.it/50x100',
    searchLine: '',
    allProducts: [],
    isVisibleCart: false,
  },
  methods: {
    getJson(url){
      return fetch(url)
        .then(result => result.json())
        .catch(error => {
          console.log(error);
        })
    },
    // перестарался сделал не по заданию метод добавления
    addProduct(product){
      this.getJson(`${API}/addToBasket.json`)
      .then(data => {
        if(data.result === 1){
          let find = this.allProducts.find(el => el.id_product === product.id_product);
          if(find){
            find.quantity++;
          } else {
            let newProduct = {
              id_product: product.id_product,
              price: product.price,
              product_name: product.product_name,
              quantity: 1
            };
            this.allProducts.push(newProduct);
          }
        } else {
          alert('Error');
        }
      });
    },
    // имитация загрузки данных с сервера только фильтрация происходит у клиента
    filterGoods(){
      // создание регулярки
      let filterReg = new RegExp(this.searchLine,'i')
      // очистка каталога
      this.products = [];
      this.getJson(`${API + this.catalogUrl}`)
      .then(data => {
        for(let el of data){
          // проверка на соответствие фильтру
          if (filterReg.test(el.product_name))
              this.products.push(el);
        }
      });
    }
  },
  computed: {
  },
  created(){
    // вызов фильтра для построения каталога
    this.filterGoods();
  },
});
