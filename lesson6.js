// 1)Используя метод reduce, посчитайте сколько людей проголосовали.

const voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];
 const Totalvoters = voters.reduce ((count, voter) =>  { return voter.voted ? count + 1: count;}, 0);
 console.log(Totalvoters);
 
//  2)Получив массив всех товаров из вашего списка желаний, прикиньте, сколько будет стоить купить все сразу.

 const wishlist = [
     { title: "Tesla Model S", price: 90000 },
     { title: "4 carat diamond ring", price: 45000 },
     { title: "Fancy hacky Sack", price: 5 },
     { title: "Gold fidgit spinner", price: 2000 },
     { title: "A second Tesla Model S", price: 90000 }
 ];
 
 const Totalprice = wishlist.reduce(( total, item) => {return total + item.price},0);
 console.log(Totalprice);
 
//  3)Создайте массив объектов со свойствами 'name' и 'age'. Вычислите количество совершеннолетних и несовершеннолетних людей.

const people = [
    {name:'Bob' , age: 30 },
    {name:'Jake' , age: 32 },
    {name:'Kate' , age: 25 },
    {name:'Sam' , age: 20 },
    {name:'Phil' , age: 21 },
    {name:'Ed' , age: 16},
    {name:'Tami' , age: 14},
    {name: 'Mary', age: 31 },
    {name: 'Becky', age: 13},
    {name: 'Joey', age: 11 },
    {name: 'Jeff', age: 30 },
    {name: 'Zack', age: 19}
];


const adults = people.filter(person => person.age >= 18); 
    
console.log(adults);

// 4)Создайте массив объектов со свойствами 'name' и 'age'. Используя методы массива, создайте новый массив, содержащий только те объекты, возраст которых больше 30 лет.

const abultsPeople =[
    {name:'Bob' , age: 30},
    {name:'Jake' , age: 32},
    {name:'Kate' , age: 25},
    {name:'Sam' , age: 20},
    {name:'Phil' , age: 21},
    {name:'Ed' , age:55},
    {name:'Tami' , age: 54},
    {name: 'Mary', age: 31},
    {name: 'Becky', age: 43},
    {name: 'Joey', age: 41 },
    {name: 'Jeff', age: 30},
    {name: 'Zack', age: 19}
];

const abultage = abultsPeople.filter(person => person.age >= 30);
console.log(abultage);

