const bcrypt = require('bcryptjs');
const data = {
    users: [
        {
            name: 'Bing',
            email: 'admin@zk.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: true
        },
        {
            name: 'Jon',
            email: 'jon@zk.com',
            password: bcrypt.hashSync('1234', 8),
            isAdmin: false
        },
    ], 
    products: [
        {
            name: 'Mango',
            category: 'fruits',
            image: '/images/p1.jpg',
            price: 120,
            countInStock: 10,
            brand: 'Alpanso',
            rating: 4.5,
            numReviews: 10,
            description: 'Fresh from farm',
        },
        {
            name: 'Carrot',
            category: 'Vegetables',
            image: '/images/p2.jpg',
            price: 100,
            countInStock: 20,
            brand: 'NA',
            rating: 4.0,
            numReviews: 10,
            description: 'Healthy',
        },
        {
            name: 'Cabbage',
            category: 'vegetables',
            image: '/images/p3.jpg',
            price: 220,
            countInStock: 0,
            brand: 'NA',
            rating: 4.8,
            numReviews: 17,
            description: 'Fresh',
        },
        {
            name: 'Banana',
            category: 'fruits',
            image: '/images/p4.jpg',
            price: 78,
            countInStock: 15,
            brand: 'NA',
            rating: 4.5,
            numReviews: 14,
            description: 'Fresh',
        },
        {
            name: 'Cherry',
            category: 'berries',
            image: '/images/p5.jpg',
            price: 65,
            countInStock: 5,
            brand: 'NA',
            rating: 4.5,
            numReviews: 10,
            description: 'Delecious',
        },
        {
            name: 'Apple',
            category: 'fruits',
            image: '/images/p6.jpg',
            price: 139,
            countInStock: 12,
            brand: 'kashmiri',
            rating: 4.5,
            numReviews: 15,
            description: 'high quality product',
        },
    ],
};

module.exports = data;
