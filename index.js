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
    let custmeals = store.meals.filter(meal => {
      return meal.customerId == this.id
    })
    custmeals.forEach(function (element) {totalprice += element.price})
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
    if (meal) {this.mealId = meal.id}
    if (customer) {this.customerId = customer.id}
    store.deliveries.push(this)
  }
}

class Employer {
  constructor(name) {
    this.id = employerId++
    this.name = name
    store.employers.push(this)
  }
}
