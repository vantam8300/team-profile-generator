const Engineer = require("../lib/engineer");

describe("Engineer", () => {
    it("getName function", () => {
        const engineer = new Engineer("example", 1, "example.com", "Github name");

        const result = engineer.getName();

        expect(result).toEqual("example");
    });

    it("getId function", () => {
        const engineer = new Engineer("example", 1, "example.com", "Github name");

        const result = engineer.getId();

        expect(result).toEqual(1);
    });

    it("getEmail function", () => {
        const engineer = new Engineer("example", 1, "example.com", "Github name");

        const result = engineer.getEmail();

        expect(result).toEqual("example.com");
    });

    it("getRole function", () => {
        const engineer = new Engineer("example", 1, "example.com", "Github name");

        const result = engineer.getRole();

        expect(result).toEqual("Engineer");
    });

    it("getGithub function", () => {
        const engineer = new Engineer("example", 1, "example.com", "Github name");

        const result = engineer.getGithub();

        expect(result).toEqual("Github name");
    });
});