# Student Record Management

This project includes:
- `index.html` — a modern front-end dashboard with student records using HTML, CSS, and JavaScript.
- `styles.css` — dark theme styling and responsive layout.
- `script.js` — in-browser student record management using local storage.
- `student_records.c` — a C language command-line student record manager that stores records in `students.txt`.

## Run the Front End
1. Open `index.html` in your browser.
2. Click **+ Add Student** to add new student records.
3. The dashboard updates count values and shows recent students.

## Run the C Program
1. Open the folder in a terminal.
2. Compile with:
   ```bash
   gcc student_records.c -o student_records
   ```
3. Run with:
   ```bash
   ./student_records
   ```
4. Use the menu to add, list, search, or delete student records.

## Notes
- The browser version stores data locally in your browser's local storage.
- The C version stores data in a plain text file named `students.txt`.
# student-record
