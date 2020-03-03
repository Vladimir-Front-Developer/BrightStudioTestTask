const PRODUCTS = [
  {
    "id":5,
    "name":"Кекс",
    "price":234,
    "description":"Лучший кекс в мире"
  },
  {
    "id":9,
    "name":"Barrel petrol ",
    "price": 22000,
    "description":"Черное золото"
  },
  {
    "id":40,
    "name":"Boeing-757-200",
    "price": 6900000000,
    "description":"Самолет"
  }
]

const Product = function(){}
Product.prototype.setPrice = function(newPrice){
  this.product.price = newPrice
  return this
}
Product.prototype.getWithDiscount = function(percent){
  const getDiscountedPrice = (price, percent) => {
    const discountAmount = price / 100 * percent
    return price - discountAmount
  }
  return {
    ...this.product,
    discountedPrice: getDiscountedPrice(this.product.price, percent)
  }
}

const Shop = function(){
  this.products = []
}
Shop.prototype.addProducts = function(products){
  this.products = [...this.products, ...products]
}
Shop.prototype.getProduct = function(id){
  this.product = this.products.find(el => el.id === id)
  return this
}

Shop.prototype = {
  ...Shop.prototype,
  ...Product.prototype
}

const shop = new Shop()
shop.addProducts(PRODUCTS)
console.log(shop.getProduct(9).setPrice(4434).getWithDiscount(10).discountedPrice)
console.log(shop.getProduct(9).setPrice(4434).getWithDiscount(10).discountedPrice === 3990.6)
