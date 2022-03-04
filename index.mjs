import fetch from "node-fetch";

/* Promises, Async/Await & Fetch function */

// A new promise takes a function that has 2 arguments: resolve and reject
const event = new Promise((resolve, reject) => {
    var animal = "Dog";
    // Check if the animal is a Cat or not
    // If the animal is a Cat, call the resolve function
    if(animal == "Cat") {
        resolve(animal);
    }
    // If the animal is not cat, call the reject function
    else {
        reject("The animal is not a Cat. The animal is a " + animal);
    }
})

event
    // .then is called if it is resolved
    .then((animal) => {
        console.log(animal);
    })
    // .catch is called if it is rejected
    .catch((err) => {
        console.log(err);
    })

// async () is an asynchronous function
// Asynchronous function will do nothing unless there is something in the function to wait
const fetchData = async () => {
    try {
        // Wait for the promise to be resolved the console.log the data 
        const data = await fetch("https://google.com");
        console.log(data);
    }
    // catch error if it fails to fetch the data
    catch(err) {
        console.log(err);
    }
  
}

fetchData();


/* Map, Filter & Reduce */

// Array of elements
// Each elements in the array is an object
// The object consist of id, name, and age
const animals = [
    { id: 1, name: "Dog", age: 5 },
    { id: 2, name: "Bear", age: 10 },
    { id: 3, name: "Tiger", age: 2 },
];

const mapAnimals = (id, newName) => {
    // Map loops through every index of the elements
    const newMapAnimals = animals.map((animal) => {
        // If the id in the array is equal to the id that is chosen, change the name as newName
        if(animal.id === id) {
            return {id: animal.id, name: newName, age: animal.age};
        }
        // If id in the array is not equal to the id that is chosen, return the elements that are in the array 
        else {
            return animal;
        }
    });
    return newMapAnimals;
};

console.log(mapAnimals(2, "Seal"));

const filterAnimals = (name) => {
    // Filter does not change any of the elements (Boolean)
    const newFilterAnimals = animals.filter((animal) => {
        // Return all the array except the name that is chosen
        return animal.name != name;
    });
    return newFilterAnimals;
};

console.log(filterAnimals("Dog"));

const reduceAnimals = () => {
    // assign total as 0
    const newReduceAnimals = animals.reduce((total, animal) => {
        // Return the sum of total which is 0, and all the age of the animals in the array
        return total + animal.age; 
    }, 0);
    return newReduceAnimals
};

console.log(reduceAnimals());


