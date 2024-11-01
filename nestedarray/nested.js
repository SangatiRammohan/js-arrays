// 1.
let nestedArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, [9, 10, [11, 12]]]
];
console.log(nestedArray[2][2][2][0])

//2.
let data = {
    users: [
      { name: "Alice", age: 25, hobbies: ["reading", "swimming"] },
      { name: "Bob", age: 30, hobbies: ["cycling", "hiking"] },
      { name: "Charlie", age: 35, hobbies: ["painting", "traveling"] }
    ]
  };
console.log(data.users[1].hobbies[0])  

// 3.
let complexData = {
  school: {
    name: "Green Valley High",
    students: [
      {
        name: "Emma",
        grades: [95, 88, 92],
        subjects: {
          math: { score: 95, teacher: "Mr. Smith" },
          science: { score: 88, teacher: "Ms. Johnson" }
        }
      },
      {
        name: "Liam",
        grades: [89, 85, 90],
        subjects: {
          math: { score: 89, teacher: "Mr. Smith" },
          science: { score: 85, teacher: "Ms. Johnson" }
        }
      }
    ]
  }
};


//4.
let teams = [
  {
    teamName: "Team Alpha",
    members: [
      { name: "Alex", role: "Developer" },
      { name: "Sara", role: "Designer" }
    ]
  },
  {
    teamName: "Team Beta",
    members: [
      { name: "John", role: "Developer" },
      { name: "Doe", role: "Tester" }
    ]
  }
];




//5.
let company = {
  departments: [
    {
      name: "HR",
      employees: [
        { name: "Maya", age: 28, skills: ["communication", "management"] },
        { name: "Raj", age: 35, skills: ["recruitment", "training"] }
      ]
    },
    {
      name: "IT",
      employees: [
        { name: "Neha", age: 30, skills: ["programming", "networking"] },
        { name: "Sam", age: 32, skills: ["cybersecurity", "cloud computing"] }
      ]
    }
  ]
};

