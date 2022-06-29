// java script object notation 
// JSON
const User = { id: 11, name: 'gorib Amir', job: 'actor' }


const stringified = JSON.stringify(User);


// console.log(User);

// console.log(stringified);

const shop = {

    name: 'alia store',
    address: 'kocuuuuuu',
    profit: 15000,
    products: ['laptop', 'mobile', 'pepsi'],
    owner: {
        name: 'alia batt',
        Profession: 'actor'

    },
    isExpansive: false
}

const ShopStringgfied = JSON.stringify(shop);
// console.log(shop);
console.log(ShopStringgfied);

const converted = JSON.parse(ShopStringgfied);
console.log(converted);