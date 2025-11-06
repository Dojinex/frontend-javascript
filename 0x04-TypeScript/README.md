# 📘 TypeScript Project - Student Interface

## 🎯 Project Overview
This project introduces **TypeScript** fundamentals through the creation of an interface named `Student`.  
The goal is to define a `Student` interface, instantiate two student objects, and render their information in a simple HTML table using **Vanilla JavaScript** compiled from **TypeScript**.

---

## 🧩 Requirements
- Allowed editors: `vi`, `vim`, `emacs`, `Visual Studio Code`
- All files must end with a new line
- Code will be transpiled on **Ubuntu 18.04**
- TypeScript code will be checked with **Jest (v24.9.\*)**
- `README.md` file is mandatory
- Files must use the `.ts` extension when possible
- TypeScript compiler must not show any warnings or errors when compiling

---

## 🧱 Files Structure
frontend-javascript/
└── 0x04-TypeScript/
└── task_0/
├── js/
│ └── main.ts
├── package.json
├── .eslintrc.js
├── tsconfig.json
├── webpack.config.js
└── README.md


---

## ✨ Features
- Defines a **TypeScript interface** named `Student` with:
  - `firstName` (string)
  - `lastName` (string)
  - `age` (number)
  - `location` (string)
- Creates two student objects.
- Stores the students in an array called `studentsList`.
- Uses **Vanilla JavaScript** to dynamically generate and display a table of students, showing:
  - `firstName`
  - `location`

---

## 🧠 Example Code (main.ts)
```typescript
interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Alice",
  lastName: "Johnson",
  age: 22,
  location: "Lagos"
};

const student2: Student = {
  firstName: "Bob",
  lastName: "Smith",
  age: 24,
  location: "Abuja"
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");
const tbody = document.createElement("tbody");

studentsList.forEach((student) => {
  const row = document.createElement("tr");
  const nameCell = document.createElement("td");
  const locationCell = document.createElement("td");

  nameCell.textContent = student.firstName;
  locationCell.textContent = student.location;

  row.appendChild(nameCell);
  row.appendChild(locationCell);
  tbody.appendChild(row);
});

table.appendChild(tbody);
document.body.appendChild(table);
⚙️ Setup Instructions
1️⃣ Clone the repository
git clone https://github.com/Dojinex/frontend-javascript.git
cd frontend-javascript/0x04-TypeScript/task_0

2️⃣ Install dependencies
npm install

3️⃣ Compile TypeScript
npm run build

4️⃣ Run Webpack
npm start

5️⃣ Open the project

The compiled project will be available in the browser with the rendered student table.

✅ Expected Output

A simple web page displaying a table like this:

First Name	Location
Alice	Lagos
Bob	Abuja
🚀 Technologies Used

TypeScript

JavaScript (Vanilla JS)

Webpack

ESLint

Jest

👨‍💻 Author

Bitrus Dauda
