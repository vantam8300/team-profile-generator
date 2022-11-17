const Employee = require("../lib/employee");

describe("Employee", () => {
    it("getName function", () => {
        const employee = new Employee("example", 1, "example.com");

        const result = employee.getName();

        expect(result).toEqual("example");
    });

    it("getId function", () => {
        const employee = new Employee("example", 1, "example.com");

        const result = employee.getId();

        expect(result).toEqual(1);
    });

    it("getEmail function", () => {
        const employee = new Employee("example", 1, "example.com");

        const result = employee.getEmail();

        expect(result).toEqual("example.com");
    });

    it("getRole function", () => {
        const employee = new Employee("example", 1, "example.com");

        const result = employee.getRole();

        expect(result).toEqual("Employee");
    });
});