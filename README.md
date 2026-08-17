# 🎓 Student Record Management System

<p align="center">
  <img src="https://img.shields.io/badge/C-Programming-00599C?style=for-the-badge&logo=c&logoColor=white"/>
  <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white"/>
  <img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white"/>
  <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"/>
  <img src="https://img.shields.io/badge/LocalStorage-Browser%20Data-8B5CF6?style=for-the-badge"/>
</p>

<p align="center">
  <b>📚 Manage Student Records. Simplify Student Data.</b>
</p>

<p align="center">
  A student record management project combining a browser-based dashboard with a C command-line application for storing and managing student information.
</p>

---

## 🧠 About The Project

**Student Record Management System** is a simple academic project designed to demonstrate how student information can be created, stored, viewed and managed using both **web technologies and C programming**.

The project contains two parts:

### 🌐 Web Application

A browser-based dashboard built with:

* HTML
* CSS
* JavaScript
* Browser LocalStorage

### 💻 C Application

A command-line student record manager implemented in C with file-based data storage.

---

## ✨ Key Features

| Feature            | Description                            |
| ------------------ | -------------------------------------- |
| ➕ Add Student      | Add new student records                |
| 👀 View Records    | Display stored student information     |
| ✏️ Manage Data     | Work with existing student records     |
| 💾 LocalStorage    | Store browser records locally          |
| 📁 File Storage    | C application stores records in a file |
| 🖥️ Web Dashboard  | Modern browser-based interface         |
| 💻 CLI Application | Command-line implementation in C       |
| 📱 Responsive UI   | Designed for different screen sizes    |

---

## 🏗️ Project Architecture

```text
                    🎓 STUDENT RECORD SYSTEM
                              │
                 ┌────────────┴────────────┐
                 │                         │
                 ▼                         ▼
          🌐 WEB APPLICATION          💻 C APPLICATION
                 │                         │
        ┌────────┼────────┐                │
        ▼        ▼        ▼                ▼
      HTML      CSS      JS          C Program
                          │                │
                          ▼                ▼
                    LocalStorage     File Storage
                          │                │
                          └───────┬────────┘
                                  ▼
                         📚 Student Records
```

---

## 🌐 Web Application

The frontend provides a browser-based interface for managing student records.

### Technologies

```text
HTML5
CSS3
JavaScript
LocalStorage
```

### Frontend Workflow

```text
Open Dashboard
      │
      ▼
Add Student
      │
      ▼
Enter Student Details
      │
      ▼
Save Record
      │
      ▼
Browser LocalStorage
      │
      ▼
Display Student Records
```

---

## 💻 C Application

The repository also contains a command-line student record manager written in C.

The program demonstrates:

* Structures
* Functions
* File handling
* User input
* Record management
* Persistent data storage

Student records are stored using a file-based approach.

---

## 📁 Project Structure

```text
student-record/
│
├── README.md
├── index.html
├── styles.css
├── script.js
│
├── student_records.c
├── student_records
│
└── students.txt
```

> The exact generated files may vary depending on how the C program is compiled and executed.

---

## 🧩 Student Record Flow

```text
             ┌─────────────────┐
             │ Student Details │
             └────────┬────────┘
                      │
                      ▼
             ┌─────────────────┐
             │ Validate Input  │
             └────────┬────────┘
                      │
                      ▼
             ┌─────────────────┐
             │ Create Record   │
             └────────┬────────┘
                      │
             ┌────────┴────────┐
             ▼                 ▼
       🌐 LocalStorage     💾 File Storage
             │                 │
             └────────┬────────┘
                      ▼
             📚 Student Records
```

---

## 🚀 Run the Web Application

### Option 1 — Open Directly

Open:

```text
index.html
```

in a modern web browser.

### Option 2 — VS Code Live Server

Open the project in VS Code and launch `index.html` using **Live Server**.

---

## 💻 Run the C Program

Compile the C source file:

```bash
gcc student_records.c -o student_records
```

Run:

**macOS / Linux**

```bash
./student_records
```

**Windows**

```bash
student_records.exe
```

---

## 🛠️ Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript

### Programming

* C

### Storage

* Browser LocalStorage
* File handling in C

### Tools

* Git
* GitHub
* VS Code

---

## 🧠 Concepts Demonstrated

```text
              PROGRAMMING CONCEPTS
                       │
        ┌──────────────┼──────────────┐
        ▼              ▼              ▼
     C Language     JavaScript       Web UI
        │              │              │
        ▼              ▼              ▼
    Structures     LocalStorage      HTML/CSS
    Functions      DOM Logic         Dashboard
    File I/O       Events            Styling
        │              │              │
        └──────────────┼──────────────┘
                       ▼
              🎓 RECORD MANAGEMENT
```

---

## 📊 Web vs C Implementation

| Area        | Web Version             | C Version                |
| ----------- | ----------------------- | ------------------------ |
| Interface   | Browser UI              | Command Line             |
| Language    | HTML/CSS/JavaScript     | C                        |
| Storage     | LocalStorage            | File                     |
| Interaction | Buttons & Forms         | Terminal Input           |
| Purpose     | User-friendly dashboard | Programming fundamentals |

---

## 🔮 Future Improvements

* [ ] 🔍 Search students by ID/name
* [ ] ✏️ Edit existing records
* [ ] 🗑️ Delete records
* [ ] 📊 Student statistics dashboard
* [ ] 📥 Export records to CSV
* [ ] 📤 Import student data
* [ ] 🔐 Add authentication
* [ ] 🗄️ Connect to a database
* [ ] 🌐 Deploy the web application
* [ ] 📱 Improve mobile UI

---

## 🎯 Learning Outcomes

Through this project, I practiced:

* Building interactive web interfaces
* JavaScript DOM manipulation
* Browser-based data storage
* C structures and functions
* File handling in C
* CRUD-style record management
* Separating frontend and backend-style logic
* Organizing a software project

---

## 👨‍💻 Author

### Lalit Mohan Pant

**Computer Science & Engineering Student**

Interested in:

* 💻 Software Development
* 🧠 Data Structures & Algorithms
* 🌐 Web Development
* 🔐 Cybersecurity
* 🤖 Machine Learning

---

<p align="center">
  <b>🎓 Learn. Build. Manage. Improve.</b>
</p>

---

## 📜 License

This project is intended for **educational and learning purposes**.
