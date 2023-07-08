let a = 5
let b = 5

let c

c = a+b
console.log(c)

a = 8
b = 12

c = a+b
console.log(c)

//Not efficient code, c=a+b has duplicates, wrap it into function as:
//x and y will use assigned values above for calculation
//function name is sum, and to call it type sum()

function sumPlus(x,y){
    let z
    z = x+y
    return z
}

console.log(sumPlus(b,a))

console.log(sumPlus(2,15))

console.log(sumPlus(20,15))

function myFn(num1, num2){
    let sumPlus
    sumPlus = num1+1+num2
    return sumPlus
}

console.log(myFn(1,5))

