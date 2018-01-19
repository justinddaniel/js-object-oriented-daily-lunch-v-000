let customerId = 0
let mealId = 0

class Customer {
  constructor(name, employer) {
    this.id = customerId++
    this.name = name
    this.employerId = employer.id
  }
}

class Meal {
  constructor(title, price) {
  this.id = mealId++
  this.title = title
  this.price = price
}
}