const faker = require("faker");

const mockApi = () => {
    return {
        products: {
            id: faker.random.uuid(),
            title: faker.random.words(),
            decription: faker.random.words(),
            content: faker.random.words(),
            price: faker.random.number(),
            rating: Math.floor(Math.random() * 100 + 1) / 10
        },
        categories: {
            id: Math.floor(Math.random()*20),
            name: faker.random.words(),
        }
    };
};
const db = {
    products: [],
    categories: []
};
const getFakeData = (db, mockApi, numberRecord) => {
    Object.keys(db).forEach(api => {
        db[api] = Array(numberRecord)
            .fill(null)
            .map(item => mockApi()[api]);
    });
};

getFakeData(db, mockApi, 20);
console.log(JSON.stringify(db));
