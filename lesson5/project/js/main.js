const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
  el: '#app',
  data: {
    catalogUrl: '/catalogData.json',
    products: [],
    imgCatalog: 'https://placehold.it/200x150',
    searchLine: '',
  },
  methods: {
    getJson(url){
      return fetch(url)
        .then(result => result.json())
        .catch(error => {
          console.log(error);
        })
    },
    addProduct(product){
      console.log(product.id_product);
    },
    filterGoods(filter = ``){
      let filterReg = new RegExp(filter,'i')  // создание регулярки
      this.products = []; // очистка каталога
      this.getJson(`${API + this.catalogUrl}`)
      .then(data => {
        for(let el of data){
          if (!filter || filterReg.test(el.product_name))  // проверка наличие фильтра или проверка на совпадение строк
              this.products.push(el);
        }
      });
    }
  },
  created(){
    this.filterGoods(''); // вызов фильтра с пустым значением поиска
  },
});
