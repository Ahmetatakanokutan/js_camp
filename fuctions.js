function addToCart(productName = "elma") {
    console.log("sepete eklendi : " + productName)
}
addToCart()
addToCart("yumurta")
addToCart("karpuz")

let sayHello = ()=>{

}


let product1 = {productName:"elma",unitPrice:5,quantity:10}
let product3 = {productName:"elma",unitPrice:5,quantity:10}

function addToCart3(product) {
    console.log("URUN : " + product.productName)
}

let product2 = product3



addToCart3(product1)

function addToCart4(products) {
    
    console.log(products)
}

let products = [
    {productName:"elma",unitPrice:5,quantity:10},
    {productName:"armut",unitPrice:5,quantity:10},
    {productName:"karpuz",unitPrice:5,quantity:10}
]
addToCart4(products)
function add(...numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
       total = numbers[i] + total
        
    }
   console.log(total)
}


add(10,20,40)

let numbers = [30,20,69,546,763]
console.log(Math.max(...numbers))


let newProductName, newUnitPrice, newQuantity


({unitPrice:newUnitPrice, productName:newProductName, 
     quantity:newQuantity} = 
     {productName:"elma",unitPrice:5,quantity:10})


console.log(newUnitPrice)