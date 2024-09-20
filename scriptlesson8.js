// Получаем массив оценок из localStorage
function getGrades() {
    const grades = localStorage.getItem('grades');
    return grades ? JSON.parse(grades) : [];
}

// Сохраняем массив оценок в localStorage
function saveGrades(grades) {
    localStorage.setItem('grades', JSON.stringify(grades));
}

// Добавление нового студента в массив оценок
function addStudent(name, subject, grade) {
    const newStudent = { name, subject, grade };
    const grades = getGrades();
    grades.push(newStudent);
    saveGrades(grades);
}

// Отображение списка студентов
function renderStudents() {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = ''; // Очищаем содержимое перед выводом новых данных

    const grades = getGrades();

    if (grades.length > 0) {
        grades.forEach((entry, index) => {
            const gradeInfo = document.createElement('p');
            gradeInfo.textContent = `${index + 1}. Студент: ${entry.name}, Предмет: ${entry.subject}, Оценка: ${entry.grade}`;
            outputDiv.appendChild(gradeInfo);
        });
    } else {
        outputDiv.textContent = 'Нет сохранённых данных.';
    }
}

// Обработчик формы для сохранения студента
const studentForm = document.getElementById('studentForm');
studentForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const studentName = document.getElementById('studentName').value;
    const subject = document.getElementById('subject').value;
    const studentGrade = document.getElementById('studentGrade').value;

    if (studentName && subject && studentGrade) {
        addStudent(studentName, subject, studentGrade);
        alert('Оценка сохранена!');
        studentForm.reset();
    } else {
        alert('Пожалуйста, заполните все поля.');
    }
});

// Обработчик кнопки для загрузки и отображения студентов
document.getElementById('loadBtn').addEventListener('click', () => {
    renderStudents();
});