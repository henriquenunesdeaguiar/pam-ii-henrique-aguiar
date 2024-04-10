let n = 2
let t = "oi"

console.log(typeof n)
console.log(typeof t)

let a = [0, 1, 1, 2, 3, 5, 8, 13, 21]

console.log(typeof a)

let o = {nome: "Henrique", idade: "17"} //JSOn
//JavaScript Object Notation
console.log(typeof o)

console.log(a) 
console.log(a[6])
//chamando apenas o oito da tabela 

a.forEach( (el) => 
    console.log(`Elemento: ${el}`))

console.log(o)
console.log(o.nome, "tem", o.idade)
