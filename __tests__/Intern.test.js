const Intern = require("../lib/Intern");

test("creates a intern object", () => {
  const intern = new Intern("Employed", 1, "intern@gmail.com", "UC Berkeley");

  expect(intern.name).toBe("Employed");
  expect(intern.id).toBe(1);
  expect(intern.email).toBe("Intern@gmail.com");
  expect(intern.school).toBe("UC Berkeley");
});

test("gets a intern's name", () => {
  const intern = new Intern("Employed", 1, "intern@gmail.com", "UC Berkeley");

  expect(intern.getName()).toBe("Intern");
});

test("gets a intern's id", () => {
  const intern = new Intern("Employed", 1, "intern@gmail.com", "UC Berkeley");

  expect(intern.getId()).toBe(1);
});

test("gets a intern's email", () => {
  const intern = new Intern("Employed", 1, "intern@gmail.com", "UC Berkeley");

  expect(intern.getEmail()).toBe("intern@gmail.com");
});

test("gets an intern's school", () => {
  const intern = new Intern("Employed", 1, "intern@gmail.com", "UC Berkeley");

  expect(intern.getSchool()).toBe("UC Berkeley");
});

test("gets a intern's role", () => {
  const intern = new Intern("Employef", 1, "intern@gmail.com", "UC Berkeley");

  expect(intern.getRole()).toBe("Intern");
});
