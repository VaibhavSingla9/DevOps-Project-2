const request = require("supertest");
const app = require("../app");

describe("Application API Tests", () => {

    test("GET / should return the welcome message", async () => {
        const response = await request(app).get("/");

        expect(response.statusCode).toBe(200);
        expect(response.text).toBe(
            "Hello Vaibhav! Welcome to DevOps Project 2."
        );
    });

    test("GET /health should return the health message", async () => {
        const response = await request(app).get("/health");

        expect(response.statusCode).toBe(200);
        expect(response.text).toBe("Application is healthy.");
    });

});