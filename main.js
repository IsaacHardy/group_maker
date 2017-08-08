let students = [
  "Sean",
  "Imani",
  "Mike",
  "Joe",
  "Shakira",
  "Tori",
  "Cornelia",
  "Roman",
  "Will",
  "Bernie",
  "Bernadette",
  "Aaron",
  "Bethany"
];
let currentStudents = [
  "Sean",
  "Imani",
  "Mike",
  "Joe",
  "Shakira",
  "Tori",
  "Cornelia",
  "Roman",
  "Will",
  "Bernie",
  "Bernadette",
  "Aaron",
  "Bethany"
];

let num = 3; // Change me based on Students Per Group Needed

let studentsPerGroup = num;
let group = [];
let groups = [];
for (let i = 0; i < students.length; i++) {
  if (studentsPerGroup === 0) {
    if (currentStudents.length === 1) {
      group.push(currentStudents[0]);
    }
    groups.push(group);
    group = [];
    studentsPerGroup = num;
  }

  let rdm = Math.floor(Math.random() * currentStudents.length)
  group.push(currentStudents[rdm]);
  currentStudents.splice(rdm, 1);
  studentsPerGroup--;
}

let container = document.getElementById("container");

for (let j = 0; j < groups.length; j++) {
  let group = groups[j];
  let groupEl = document.createElement("div");
  groupEl.classList.add("group")
  for (let k = 0; k < group.length; k++) {
    let temp = `
      <p>${group[k]}</p>
    `;
    groupEl.innerHTML += temp;
  }
  container.appendChild(groupEl);
}
