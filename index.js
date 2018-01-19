let customerId = 0

class Customer {
  constructor(name, employer) {
    this.id = customerId++
    this.name = name
    this.employerId = employer.id
  }
}