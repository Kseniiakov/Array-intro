// 1. Создать массив в переменную  
// и после заполнить его числами последовательно от 5 до 15

// const array = [];

// for (let num = 5; num <= 15; num++) {
//   array.push (num);
// }
// console.log(array);

// 2. Создать массив и заполнить его 10ю нечетными числами

// const array = [];
// let num = -1;

// for (counter = 1; counter <= 10; counter++) {
//   array.push (num += 2);
// }

// console.log(array);

// 3. С помощью функции конструктора User 
// создать 10 пользователей и поместить их в массив

// function User(firstname, lastname, age) {
//   this.firstname = firstname,
//   this.lastname = lastname,
//   this.age = age
// }

// const user1 = new User ('Olivia', 'Smith',28);
// const user2 = new User ('Ethan', 'Moore',25);
// const user3 = new User ('Jack', 'Walker',27);
// const user4 = new User ('Emily', 'Lewis',29);
// const user5 = new User ('Sophie', 'Young',35);
// const user6 = new User ('Oscar', 'Harris',31);
// const user7 = new User ('George', 'Taylor',16);
// const user8 = new User ('Chloe', 'Harris',18);
// const user9 = new User ('Heidi', 'Moore',21);
// const user10 = new User ('Ethan', 'Smith',23);

// const users = [];

// users.push (user1, user2, user3, user4, user5, user6, user7, user8, user9, user10);

// console.log(users);

// 4. * массив (с примитивными типами) перевести в строку с разделителем & или @

// const arr = [1,2,3,4,5,6];

// let strArr = String();

// for (let i = 0; i < arr.length; i++) {
//   strArr += arr[i];
//   if (i !== arr.length - 1) {
//     strArr += '@';
//   }
// }

// console.log(strArr);

// 5. * Переменную хранящей обьект преобразовать в массив

// const obj = {
//   0: 'Joe',
//   1: 'Smit',
//   2: 29,
//   length: 3
// }

// const arr = Array.from(obj);

// console.log(arr);