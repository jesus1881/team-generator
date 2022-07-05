const Employee = require("../lib/Employee");

test("creates a employee object", () => {
  const employee = new Employee("Employed", 1, "employee1@gmail.com");

  expect(employee.name).toBe("Employed");
  expect(employee.id).toBe(1);
  expect(employee.email).toBe("employee1@gmail.com");
});

test("gets a employee's name", () => {
  const employee = new Employee("Employed", 1, "employee1@gmail.com");

  expect(employee.getName()).toBe("Employed");
});

test("gets a employee's id", () => {
  const employee = new Employee("Employed", 1, "employee1@gmail.com");

  expect(employee.getId()).toBe(1);
});

test("gets a employee's email", () => {
  const employee = new Employee("Employed", 1, "employee1@gmail.com");

  expect(employee.getEmail()).toBe("employee1@gmail.com");
});

test("gets a employee's role", () => {
  const employee = new Employee("Employed", 1, "employee1@gmail.com");

  expect(employee.getRole()).toBe("Employee");
});
