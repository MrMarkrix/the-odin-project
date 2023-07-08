'use strict'

const personOne ={
    name:"Bob",
    age:21
}

function incrPersonAge(person) {
    const updatedPerson = Object.assign({}, person)
    updatedPerson.age +=1
    return updatedPerson
}

const updatedPersonOne = incrPersonAge(personOne)
console.log(updatedPersonOne)
console.log(personOne)

//Not recommended to mutate object through function directly, create new Object.assign(copy) and make an update in copied object
//Callback FN

function namePrint(){
    console.log("Martin")
}

setTimeout(namePrint, 5000)

console.log("Start")