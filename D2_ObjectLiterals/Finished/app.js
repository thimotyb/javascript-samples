var Tony = { 
    firstname: 'Tony', 
    lastname: 'Jones',
    address: {
        street: '111 Main St.',
        city: 'San Francisco',
        state: 'CA'
    }
};

function greet(person) {
    console.log('Hi ' + person.firstname);
}

greet(Tony);

greet({ 
    firstname: 'Mary', 
    lastname: 'Doe' 
});

Tony.address2 = {
    street: '333 Second St.'
}

