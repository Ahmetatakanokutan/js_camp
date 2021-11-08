class Customer{
    constructor(id,customerNumber){
        this.id = id
        this.customerNumber = customerNumber
    }
}

let customer = new Customer(1, "12345");

customer.name = "atakan okutan"
console.log(customer.id)

Customer.bisey = "bisey"
console.log(Customer.bisey)

class IndividualCustomer extends Customer{

    constructor(firstName,id,customerNumber)
    super(id,customerNumber)
}
class CorporateCustomer extends Customer{

}