const faker = require("faker");

const mockApi = () => {
    return {
        products: {
            record: {
                id: faker.random.uuid(),
                title: faker.random.words(),
                decription: faker.random.words(),
                content: faker.random.words(),
                price: faker.random.number(),
                rating: Math.floor(Math.random() * 100 + 1) / 10
            },
            number: 100
        },
        categories: {
            record: {
                id: Math.floor(Math.random() * 20),
                name: faker.random.words()
            },
            number: 10
        },
        users: {
            record: {
                id: faker.random.uuid(),
                email: faker.internet.email(),
                password: "123",
                name: faker.name.findName()
            },
            number: 5
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
const getFakeData = (db, mockApi) => {
    Object.keys(db).forEach(api => {
        db[api] = [
            ...db[api],
            ...Array(mockApi()[api].number)
                .fill(null)
                .map(item => mockApi()[api].record)
        ];
    });
};

getFakeData(db, mockApi);
console.log(JSON.stringify(db));
