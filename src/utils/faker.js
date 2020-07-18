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
            id: Math.floor(Math.random() * 20),
            name: faker.random.words()
        },
        users: {
            id: faker.random.uuid(),
            email: faker.internet.email(),
            password: "123",
            name: faker.name.findName()
        }
    };
};
const db = {
    products: [],
    categories: [],
    users: [
        {
            id: faker.random.uuid(),
            email: "tungdd98@gmail.com",
            password: "123",
            name: "tungdd"
        }
    ]
};
const getFakeData = (db, mockApi, numberRecord) => {
    Object.keys(db).forEach(api => {
        db[api] = [
            ...db[api],
            ...Array(numberRecord)
                .fill(null)
                .map(item => mockApi()[api])
        ];
    });
};

getFakeData(db, mockApi, 5);
console.log(JSON.stringify(db));
