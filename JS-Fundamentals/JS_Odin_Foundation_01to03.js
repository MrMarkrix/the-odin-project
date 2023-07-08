console.log(33+45);

console.log(5+3+8+9+25+15+26);

console.log((4+6+9)/77)

let a = 10;
console.log(9*a);
let b = 7*a;
console.log(b);

const max = 57;
let actual = max-13;
let percetage = actual/max;
console.log(percetage);

function favoriteAnimal (animal){
    return animal + " is my favorite animal!"
}
console.log(favoriteAnimal("Dog"));

function add7(number){
    return number + 7;
}
console.log(add7(5));

function multiply (number){
    return number * 2;
}
console.log(multiply(5));

function capitaliza(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
}
console.log(capitaliza("hello"));
console.log(capitaliza("HELLO"));
console.log(capitaliza("hEllO"));

function lastLetter(word){
    return word.slice(-1);
}
console.log(lastLetter("hello"))
console.log(lastLetter("house"))