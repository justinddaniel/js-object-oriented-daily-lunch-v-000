let store = {customers: [], meals: [], deliveries: [], employers: []}
let customerId = 0
let mealId = 0
let deliveryId = 0
let employerId = 0

class Customer {
  constructor(name, employer) {
    this.id = customerId++
    if (name) {this.name = name}
    if (employer) {this.employerId = employer.id}
    store.customers.push(this)
  }

  totalSpent() {
    let totalprice = 0
    let custdel = store.deliveries.filter(delivery => {
      return delivery.customerId == this.id})
    custdel.forEach(function (element) {totalprice += element.meal.price})
    return totalprice
  }
}

class Meal {
  constructor(title, price) {
  this.id = mealId++
  this.title = title
  this.price = price
  store.meals.push(this)
}
  static byPrice() {
    const priceSorter = function (meal1, meal2) {
    return meal2.price - meal1.price;};
    return store.meals.sort(priceSorter)
  }
}

class Delivery {
  constructor(meal, customer) {
    this.id = deliveryId++
    if (meal) {this.mealId = meal.id; this.meal = meal}
    if (customer) {this.customerId = customer.id}
    store.deliveries.push(this)
  }
  customer() {return store.customers.filter(customer => {return customer.id == this.customerId})
  }
}

class Employer {
  constructor(name) {
    this.id = employerId++
    this.name = name
    store.employers.push(this)
  }
}
