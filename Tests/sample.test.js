const request = require("supertest");
const app = require("../app");

describe("Test APIS", () => {
    test("test make bid on pet", async () => {
        const res = await request(app)
            .post('/api/bidOnPet')
            .send({
                username: 'user1',
                petId: 223681,
                bidValue: 50
            })
        expect(res.statusCode).toEqual(201)
        expect(res.body).toHaveProperty('post')
    });

    test("test get all bids on specific pet", async () => {
        const res = await request(app)
            .get('/api/getPetBids/223681')
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('get')
    });

    test("test get pet winners", async () => {
        const res = await request(app)
            .get('/api/getWinnerBidders/223681')
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('get')
    });

});