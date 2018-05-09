console.log('destructing');

// object destructing

const person = {
    name: 'Andrew',
    age: 26,
    location: {
        city: 'London',
        temp: 92
    } 
};

const { name: firstName = 'Anonymous', age } = person;
console.log(`${firstName} is ${age}.`);

const { city, temp: temperature } = person.location;
if (city && temperature) {
    console.log(`It is ${temperature} in ${city}`);
}


const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};
const { name: publisherName = 'Self-published' } = book.publisher;
console.log(publisherName); // Penguin, Self-Published

// array destructing

const address = ['1299 S Juniper Street', 'Glasgow', , '14450'];
const [, city, state = 'Scotland', zip] = address;
console.log(`You are in ${city} ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75']
const [beverage, , mediumPrice,] = item;

console.log(`A medium ${beverage} costs ${mediumPrice}`);
