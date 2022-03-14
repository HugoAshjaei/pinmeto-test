// we will use supertest to test HTTP requests/responses
const request = require("supertest");
// we also need our app for the correct routes!
const app = require("../app");


describe("Robot test", () => {
  test("Test with square room", async () => {
    const response = await request(app).post("/api/calculate").send({
      "room": "square",
      "roomSize": 5,
      "start": [1, 2],
      "instructions": "HGHGGHGHG"
    });
    expect(response.statusCode).toBe(200);
    expect(response.body.position).toEqual("1 3 N");
  });
  test("Test with circular room", async () => {
    const response = await request(app).post("/api/calculate").send({
      "room": "circular",
      "roomSize": 10,
      "start": [0, 0],
      "instructions": "RRFLFFLRF"
    });
    expect(response.statusCode).toBe(200);
    expect(response.body.position).toEqual("3 1 E");
  });
  test("Test with out of range in square room", async () => {
    const response = await request(app).post("/api/calculate").send({
      "room": "square",
      "roomSize": 5,
      "start": [1, 200],
      "instructions": "HGHGGHGHG"
    });
    expect(response.statusCode).toBe(400);
  });
});