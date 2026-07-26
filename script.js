const storageKey = 'studentRecordsApp';
const addStudentBtn = document.getElementById('addStudentBtn');
const modalOverlay = document.getElementById('modalOverlay');
const closeModal = document.getElementById('closeModal');
const cancelModal = document.getElementById('cancelModal');
const studentForm = document.getElementById('studentForm');
const studentTableWrapper = document.getElementById('studentTableWrapper');
const studentTableBody = document.querySelector('#studentTable tbody');
const totalStudentsEl = document.getElementById('totalStudents');
const departmentsCountEl = document.getElementById('departmentsCount');
const topPerformersCountEl = document.getElementById('topPerformersCount');
const studentSummary = document.getElementById('studentSummary');
const searchInput = document.getElementById('searchInput');
const navItems = document.querySelectorAll('.nav-item');
const dashboardSection = document.getElementById('dashboardSection');
const studentsSection = document.getElementById('studentsSection');
const emptyDashboardState = document.getElementById('emptyDashboardState');
const emptyStudentState = document.getElementById('emptyStudentState');
const detailsModalOverlay = document.getElementById('detailsModalOverlay');
const closeDetailsModal = document.getElementById('closeDetailsModal');

let students = [];
let editIndex = null;

function openModal() {
  modalOverlay.classList.remove('hidden');
  document.getElementById('studentName').focus();
}

function openAddModal() {
  editIndex = null;
  document.getElementById('modalTitle').textContent = 'Add Student';
  openModal();
}

function closeModalWindow() {
  modalOverlay.classList.add('hidden');
  studentForm.reset();
  document.getElementById('modalTitle').textContent = 'Add Student';
  editIndex = null;
}

function openDetailsModal(student) {
  detailsModalOverlay.classList.remove('hidden');
  document.getElementById('detailRoll').textContent = student.roll || '-';
  document.getElementById('detailName').textContent = student.name;
  document.getElementById('detailEmail').textContent = student.email;
  document.getElementById('detailPhone').textContent = student.phone || '-';
  document.getElementById('detailDepartment').textContent = student.department;
  document.getElementById('detailYear').textContent = student.year || '-';
  document.getElementById('detailGpa').textContent = student.gpa || '0.00';
  document.getElementById('detailGender').textContent = student.gender || '-';
  document.getElementById('detailDob').textContent = student.dob || '-';
  document.getElementById('detailFather').textContent = student.father || '-';
  document.getElementById('detailFatherPhone').textContent = student.fatherPhone || '-';
  document.getElementById('detailAddress').textContent = student.address || '-';
}

function saveStudents() {
  localStorage.setItem(storageKey, JSON.stringify(students));
}

function loadStudents() {
  const saved = localStorage.getItem(storageKey);
  if (saved) {
    try {
      students = JSON.parse(saved);
    } catch (error) {
      students = [];
    }
  }
}

function getDepartmentsCount() {
  const unique = new Set(students.map((student) => student.department.trim().toLowerCase()));
  return unique.size;
}

function getTopPerformersCount() {
  return students.filter((student) => parseFloat(student.gpa) >= 3.7).length;
}

function updateStats() {
  totalStudentsEl.textContent = students.length;
  departmentsCountEl.textContent = getDepartmentsCount();
  topPerformersCountEl.textContent = getTopPerformersCount();
}

function renderStudents() {
  const query = searchInput?.value.trim().toLowerCase() || '';
  const filtered = students.reduce((acc, student, index) => {
    const matches = !query || [
      student.roll,
      student.name,
      student.department,
      student.email,
      student.phone,
      student.father,
      student.fatherPhone,
      student.address,
      student.gender,
    ]
      .filter(Boolean)
      .some((value) => value.toString().toLowerCase().includes(query));

    if (matches) {
      acc.push({ student, index });
    }
    return acc;
  }, []);

  studentTableBody.innerHTML = '';

  if (filtered.length === 0) {
    studentTableWrapper.classList.add('hidden');
    emptyStudentState.classList.remove('hidden');
  } else {
    studentTableWrapper.classList.remove('hidden');
    emptyStudentState.classList.add('hidden');

    filtered.forEach(({ student, index }) => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${student.roll || '-'}</td>
        <td>${student.name}</td>
        <td><span class="badge">${student.department}</span></td>
        <td>${student.year || '-'}</td>
        <td class="gpa-value">${student.gpa}</td>
        <td>${student.email}</td>
        <td>
          <button class="icon-button" data-action="view" data-index="${index}" title="View details">👁</button>
          <button class="icon-button" data-action="edit" data-index="${index}" title="Edit">✏️</button>
          <button class="icon-button" data-action="delete" data-index="${index}" title="Delete">🗑️</button>
        </td>
      `;
      studentTableBody.appendChild(row);
    });
  }

  studentSummary.textContent = `${students.length} total students`;
  emptyDashboardState.classList.toggle('hidden', students.length !== 0);
  updateStats();
}

function handleTableClick(event) {
  const button = event.target.closest('button');
  if (!button) return;

  const action = button.dataset.action;
  const index = Number(button.dataset.index);
  if (action === 'view') {
    const student = students[index];
    openDetailsModal(student);
    return;
  }

  if (action === 'edit') {
    editIndex = index;
    const student = students[index];
    document.getElementById('studentName').value = student.name;
    document.getElementById('studentRoll').value = student.roll;
    document.getElementById('studentEmail').value = student.email;
    document.getElementById('studentPhone').value = student.phone;
    document.getElementById('studentDept').value = student.department;
    document.getElementById('studentGender').value = student.gender;
    document.getElementById('studentYear').value = student.year;
    document.getElementById('studentGpa').value = student.gpa;
    document.getElementById('studentDob').value = student.dob;
    document.getElementById('studentFather').value = student.father;
    document.getElementById('studentFatherPhone').value = student.fatherPhone;
    document.getElementById('studentAddress').value = student.address;
    document.getElementById('modalTitle').textContent = 'Edit Student';
    openModal();
    return;
  }

  if (action === 'delete') {
    students.splice(index, 1);
    saveStudents();
    renderStudents();
  }
}

const openAddButtons = document.querySelectorAll('.openAddStudent');
openAddButtons.forEach((button) => button.addEventListener('click', openAddModal));
closeModal.addEventListener('click', closeModalWindow);
cancelModal.addEventListener('click', closeModalWindow);
modalOverlay.addEventListener('click', (event) => {
  if (event.target === modalOverlay) closeModalWindow();
});

closeDetailsModal.addEventListener('click', () => detailsModalOverlay.classList.add('hidden'));
detailsModalOverlay.addEventListener('click', (event) => {
  if (event.target === detailsModalOverlay) {
    detailsModalOverlay.classList.add('hidden');
  }
});

navItems.forEach((item) => {
  item.addEventListener('click', () => {
    navItems.forEach((nav) => nav.classList.toggle('active', nav === item));
    const page = item.dataset.page;
    dashboardSection.classList.toggle('hidden', page !== 'dashboard');
    studentsSection.classList.toggle('hidden', page !== 'students');
    if (page === 'students') {
      renderStudents();
    }
  });
});

searchInput.addEventListener('input', renderStudents);

studentForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.getElementById('studentName').value.trim();
  const roll = document.getElementById('studentRoll').value.trim();
  const email = document.getElementById('studentEmail').value.trim();
  const phone = document.getElementById('studentPhone').value.trim();
  const department = document.getElementById('studentDept').value.trim();
  const gender = document.getElementById('studentGender').value.trim();
  const year = document.getElementById('studentYear').value.trim();
  const gpa = document.getElementById('studentGpa').value.trim();
  const dob = document.getElementById('studentDob').value.trim();
  const father = document.getElementById('studentFather').value.trim();
  const fatherPhone = document.getElementById('studentFatherPhone').value.trim();
  const address = document.getElementById('studentAddress').value.trim();

  if (!name || !roll || !email || !department) return;

  const record = {
    name,
    roll,
    email,
    phone,
    department,
    gender,
    year: year || '1',
    gpa: gpa ? parseFloat(gpa).toFixed(2) : '0.00',
    dob,
    father,
    fatherPhone,
    address,
    createdAt: new Date().toISOString(),
  };

  if (editIndex !== null) {
    students[editIndex] = record;
  } else {
    students.unshift(record);
  }

  saveStudents();
  renderStudents();
  closeModalWindow();
});

studentTableBody.addEventListener('click', handleTableClick);

loadStudents();
renderStudents();
