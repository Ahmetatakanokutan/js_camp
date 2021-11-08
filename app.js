let sayi1 = 10;
sayi1 = "atakan okutan";
let student = {id : 1,name : "atakan",}
//console.log(student);

function save(puan = 10,ogrenci) {
    console.log(ogrenci.name + " : " + puan)
}
//save(undefined,student);

let students = ["engin demirog","atakan okutan","mahmut tuncer"]

//console.log(students)

let student2 = [student, {id: 5,name : "mahmut"},"melek",{city:"istanbul"}]

//console.log(student2)
let showProducts = function (id,...products) {
    console.log(id)
    console.log(products)
}

//console.log(typeof showProducts)
showProducts(10,"atakan","mahmut")

let points = [1,43,54,23,87]
console.log(Math.max(...points))
console.log(..."abc","d",..."efg")


let populations = [10000,20000,30000,[40000,50000]]
let [small,medium,high,[veryHigh,maximum]] = populations
console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)

function someFunction([small1],number) {
    console.log(small1)
}

someFunction(populations)

let category = {id: 1,name:"icecek"}
console.log(category.id)
console.log(category.name)

let {id,name} = category
console.log(id)