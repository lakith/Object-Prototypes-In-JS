let animals = [
    {name:'fluffykins', species:'rabbit'},
    {name:'caro', species:'dog'},
    {name:'hamilton', species:'dog'},
    {name:'harold', species:'fish'},
    {name:'ursula', species:'cat'},
    {name:'aloa', species:'fish'},
]

let isDog = (animal) => animal.species.toLowerCase() === 'dog'

/* will explain at the end */
Array.prototype.reject = function(fn) {
  let rej = test => !fn(test);
  return this.filter(rej);
};

let dogs = animals.filter(isDog)
let otherAnimals = animals.reject(isDog)

console.log(dogs)
console.log(otherAnimals)

