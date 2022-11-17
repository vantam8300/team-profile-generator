const Manager = require("../lib/manager");

describe("Engineer", () => {
    it("getName function", () => {
        const manager = new Manager("example", 1, "example.com", 1);

        const result = manager.getName();

        expect(result).toEqual("example");
    });

    it("getId function", () => {
        const manager = new Manager("example", 1, "example.com", 1);

        const result = manager.getId();

        expect(result).toEqual(1);
    });

    it("getEmail function", () => {
        const manager = new Manager("example", 1, "example.com", 1);

        const result = manager.getEmail();

        expect(result).toEqual("example.com");
    });

    it("getRole function", () => {
        const manager = new Manager("example", 1, "example.com", 1);

        const result = manager.getRole();

        expect(result).toEqual("Manager");
    });

    it("getOfficeNumber function", () => {
        const manager = new Manager("example", 1, "example.com", 1);

        const result = manager.getOfficeNumber();

        expect(result).toEqual(1);
    });
});