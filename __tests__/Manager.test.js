const Manager = require("../lib/Manager");

test("creates a manager object", () => {
  const manager = new Manager("Employed", 1, "manager@gmail.com", 22);

  expect(manager.name).toBe("Employed");
  expect(manager.id).toBe(1);
  expect(manager.email).toBe("manager@gmail.com");
  expect(manager.officeNumber).toBe(22);
});

test("gets a manager's name", () => {
  const manager = new Manager("Employed", 1, "manager@gmail.com", 22);

  expect(manager.getName()).toBe("Employed");
});

test("gets a manager's id", () => {
  const manager = new Manager("Employed", 1, "manager@gmail.com", 22);

  expect(manager.getId()).toBe(1);
});

test("gets a manager's email", () => {
  const manager = new Manager("Employed", 1, "manager@gmail.com", 22);

  expect(manager.getEmail()).toBe("manager@gmail.com");
});

test("gets a manager's office number", () => {
  const manager = new Manager("Employed", 1, "manager@gmail.com", 22);

  expect(manager.getOfficeNumber()).toBe(22);
});

test("gets a manager's role", () => {
  const manager = new Manager("Employed", 1, "manager@gmail.com", 22);

  expect(manager.getRole()).toBe("Manager");
});
