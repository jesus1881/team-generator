const Engineer = require("../lib/Engineer");

test("creates a engineer object", () => {
  const engineer = new Engineer("Employed", 1, "engineer@gmail.com", "engineergithub");

  expect(engineer.name).toBe("Employed");
  expect(engineer.id).toBe(1);
  expect(engineer.email).toBe("engineer@gmail.com");
  expect(engineer.github).toBe("engineergithub");
});

test("gets a engineer's name", () => {
  const engineer = new Engineer("Employed", 1, "engineer@gmail.com", "engineergithub");

  expect(engineer.getName()).toBe("Employed");
});

test("gets a engineer's id", () => {
  const engineer = new Engineer("Employed", 1, "engineer@gmail.com", "enginneergithub");

  expect(engineer.getId()).toBe(1);
});

test("gets a engineer's email", () => {
  const engineer = new Engineer("Employed", 1, "engineer@gmail.com", "engineergithub");

  expect(engineer.getEmail()).toBe("engineer@gmail.com");
});

test("gets an engineer's github", () => {
  const engineer = new Engineer("Employed", 1, "engineer@gmail.com", "engineergithub");

  expect(engineer.getGithub()).toBe("engineergithub");
});

test("gets a engineer's role", () => {
  const engineer = new Engineer("Employed", 1, "engineer@gmail.com");

  expect(engineer.getRole()).toBe("Engineer");
});
