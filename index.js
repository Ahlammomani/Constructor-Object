// Q1
function Car (brand, model, year){
    this.brand= brand
    this.model= model
    this.year= year

    this.getDetails= function()
    {return `Brand: ${this.brand}, Model:${this.model}, year:${this.year}`}
}
const car1 = new Car("Toyota", "Corolla", 2020)
const car2 = new Car("Honda", "Civic", 2021)
const car3 = new Car("Ford", "Mustang", 2022)

const array =[car1,car2,car3]
array.forEach(element =>{
    console.log(element.getDetails());
});

// Q2
const persons ={
    firstName1: "ahlam",
    firstName2:"hala",
    firstName3:"heba",
    firstName4:"noor",
    firstName5:"rana",
}
function firstName (obj){
    return Object.values(obj)
}

console.log(firstName(persons));

// Q3
function objectToArray(obj) {
    let result = [];
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            result.push(key, obj[key]);
        }
    }
    return result;
}

// Example usage:
const input = { firstName: "Moh", age: 24 };
const output = objectToArray(input);
console.log(output); // ["firstName", "Moh", "age", 24]
