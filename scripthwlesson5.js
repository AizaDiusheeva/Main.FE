// 1) Увеличить возраст всех людей на 5 лет
const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
];

const updatePeople = people.map(person  => {
    return {name: person.name,
             age: person.age + 5 };  
}
    
);
console.log(updatePeople);

// 2) Получить массив, где только имена (строки), из массива объектов
const students =[
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 35 }
];
const studentsName = students.map(person => {
    return {
      name: person.name
        
    }
})
console.log(studentsName);

// Задачи на filter:
// 1) Отфильтровать массив объектов, чтобы оставить только те, у кого возраст больше 18 лет.
 let Person = [
    { name: 'Alice', age: 16 },
    { name: 'Bob', age: 22 },
    { name: 'Charlie', age: 15 }
];
 const abultPerson = Person.filter(Person => Person.age > 18);
 console.log(abultPerson);
 
//  2) Отфильтровать массив объектов, чтобы оставить только тех, кто проголосовал
const elections =  [
     { name: 'Alice', voted: true },
     { name: 'Bob', voted: false },
     { name: 'Charlie', voted: true },
     { name: 'Dave', voted: false }
 ];
  const chooseElections =elections.filter(elections => elections.voted
       
  );
  console.log(chooseElections);
  
//   3) Отфильтровать массив студентов, чтобы оставить только тех, у кого оценка выше 70.

const Students2 =[
      { name: 'Alice', grade: 85 },
      { name: 'Bob', grade: 62 },
      { name: 'Charlie', grade: 74 },
      { name: 'Dave', grade: 55 }
  ];
   const gradeStudents2 = Students2.filter(Students2 => Students2.grade > 70);
   console.log(gradeStudents2);

//    Задачи на forEach:
// Пройтись по массиву объектов и добавить каждому объекту новое свойство discountedPrice, которое будет равно price * 0.9.

const computers = [
    { name: 'Laptop', price: 1000 },
    { name: 'Phone', price: 500 },
    { name: 'Tablet', price: 300 }
];
 const discountedPrice = computers.forEach(computers => { computers.discountedPrice = computers.price *0.9} ) 
 console.log(computers);
 


   
  