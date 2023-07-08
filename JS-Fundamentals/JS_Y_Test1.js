const objectA ={
    a:10,
    b:true
}
console.log(objectA)

const copyOfA = objectA

copyOfA.a = 25
console.log(copyOfA.a)
console.log(objectA.a)

copyOfA.c = "abc"
console.log(copyOfA.c)
console.log(objectA.c)

console.log(objectA)

let c = "there"
const a = () => {
    console.log("Hello "+c)
}

a()

c = "here"

a()

delete objectA.c
console.log(objectA)

objectA['property'] = "test property"
console.log(objectA)

const testPropertyName = "property1"
objectA[testPropertyName] = "property1"
console.log(objectA)

delete objectA.testPropertyName
delete objectA.property
console.log(objectA)

const DBProperties = {
    name:{
        first: "Martin",
        second:"Sevcik"
    },
    age: 26,
    city:{
        country: "Czech",
        town:"Prague"
    },
    codder:true,
}

console.log(DBProperties.name)

DBProperties.name.first = "Test Name"
DBProperties.name.second = "Test Name"

console.log(DBProperties.name)
console.log (DBProperties.city)

delete DBProperties.city.country

console.log (DBProperties.city)
console.log (DBProperties)

delete DBProperties.name
console.log (DBProperties)

const name = "nickname"
DBProperties[name] = "Martin"
console.log (DBProperties)

//Assign to create new object without mutating original, only works for root properties
const name2 = Object.assign({},DBProperties)
name2.nickname = "TestNickname"
console.log (name2)

//... breakes the object, also works only for root properties
const name3 = {... DBProperties}
name3.nickname = "TestName3"
console.log(name3)

//Parsing and Stringify - copies object with no mutation, works on all
const name4 = JSON.parse(JSON.stringify(DBProperties))
name4.nickname = "TestName4"
console.log(name4)

const profileCard = {
    name1:"Martin",
    age1:"26"
}


const Profile = {
    Name:profileCard.name1,
    Age:profileCard.age1,
    greeting: function() {console.log("Greetings "+this.Name+"! You are "+this.Age+"!")}
}
console.log(Profile)
Profile.greeting()


//stringify - turn into JSON
const parseProfile = JSON.stringify(Profile) 
JSON.parse(parseProfile)
//parse - back to JS Object