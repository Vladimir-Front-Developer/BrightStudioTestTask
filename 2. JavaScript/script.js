const products = [
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
    "price":6900000000,
    "description":"Самолет"
  }
];

class Product {
	setPrice(newPrice){
		this.idSearchResult.price = newPrice
		return this
	}
	getWithDiscount(percent){
		const getDiscountedPrice = (price, percent) => {
			const discountAmount = price / 100 * percent
			return price - discountAmount
		}
		return {
			...this.idSearchResult,
			discountedPrice: getDiscountedPrice(this.idSearchResult.price, percent)
		}
	}
}

class Shop extends Product{
	constructor(){
		super()
		this.products
		this.idSearchResult
	}
	addProducts(products){
		this.products = products
	}
	getProduct(id){
		this.idSearchResult = this.products.find(el => { return el.id === id })
		return this
	}
}

const shop = new Shop();
shop.addProducts(products);

console.log(shop.getProduct(9).setPrice(4434).getWithDiscount(10).discountedPrice === 3990.6);
