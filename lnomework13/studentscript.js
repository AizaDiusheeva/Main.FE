// 2) Создайте класс Student со свойствами name, age, email и grades(массив с оценками) , а также методы addGrade и getAverageGrade. Метод addGrade должен принимать оценку и добавлять ее в массив grades, если оценка является числом от 0 до 100. Если оценка не является числом или находится вне диапазона 0-100, метод должен выдать ошибку. Метод getAverageGrade должен вычислить средний балл всех оценок в массиве grades и вернуть его.

class Student {
    constructor(name, age, email, grades = []) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.grades = grades;  
    }

 
    addGrade(grade) {
        try {
           
            if (typeof grade !== 'number' || grade < 0 || grade > 100) {
                throw new Error("Оценка должна быть числом от 0 до 100.");
            }
            this.grades.push(grade);  // Добавляем оценку в массив
            console.log(`Оценка ${grade} добавлена. Текущие оценки: ${this.grades}`);
        } catch (error) {
            console.error(`Ошибка при добавлении оценки: ${error.message}`);
        }
    }

  
    getAverageGrade() {
        try {
            if (this.grades.length === 0) {
                throw new Error("Нет оценок для вычисления среднего балла.");
            }
            const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
            const average = sum / this.grades.length;
            console.log(`Средний балл: ${average.toFixed(2)}`);
            return average;
        } catch (error) {
            console.error(`Ошибка при вычислении среднего балла: ${error.message}`);
        }
    }
}


const student1 = new Student("Aiza", 23, "aiza@gmail.com");


student1.addGrade(85);
student1.addGrade(92);
student1.addGrade(78);
student1.addGrade(105); 
student1.addGrade(-10); 


student1.getAverageGrade();
