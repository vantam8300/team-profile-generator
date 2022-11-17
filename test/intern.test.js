const Intern = require("../lib/intern");

describe("Intern", () => {
    it("getName function", () => {
        const intern = new Intern("example", 1, "example.com", "UCB");

        const result = intern.getName();

        expect(result).toEqual("example");
    });

    it("getId function", () => {
        const intern = new Intern("example", 1, "example.com", "UCB");

        const result = intern.getId();

        expect(result).toEqual(1);
    });

    it("getEmail function", () => {
        const intern = new Intern("example", 1, "example.com", "UCB");

        const result = intern.getEmail();

        expect(result).toEqual("example.com");
    });

    it("getRole function", () => {
        const intern = new Intern("example", 1, "example.com", "UCB");

        const result = intern.getRole();

        expect(result).toEqual("Intern");
    });

    it("getSchool function", () => {
        const intern = new Intern("example", 1, "example.com", "UCB");

        const result = intern.getSchool();

        expect(result).toEqual("UCB");
    });
});