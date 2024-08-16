//let x = 10;

//console.log(x);

// let x;
// x = 10;
// x = 20;
// console.log(x);

// const y = 3;
// y = 30;
// console.log(y);

// let x = 10;
// let y = 20;

// let a = x + y;
// console.log(a);

// let b = x - y;
// console.log(b);

// let c = x * y;
// console.log(c);

// let d = x / y;
// console.log(d);

// let x = 11;
// let y = 8;

// console.log(x ** y);
// console.log(x % y);

// let a = 10;
// a = a - 1; //იგივეა რაც a--;
// a--;
// a++; //იგივეა რაც a = a + 1;

// console.log(a)

// let x = 20;

// x += 10; //იგივეა რაც x = x + 10;
// console.log(x);

// x -= 10; //იგივეა რაც x = x - 10;
// console.log(x);

// x *= 10; //იგივეა რაც x = x * 10;
// console.log(x);

// x /= 10; //იგივეა რაც x = x / 10;
// console.log(x);

// let x = '20';
// let y = 20;

// console.log(x === y);
// console.log(x == y);

// console.log(x > y);
// console.log(x < y);
// console.log(x >= y);
// console.log(x <= y);

// console.log(20 !== '20');

// let x = 20;
// let y = 10;

// let a = x > y && y < x; // true
// let b = x < y || y < x; // true
// console.log(b);

// let x = 10; //Number

// let y = 'hello guys'; //String

// let a = true; //Boolean
// let b = false; //Boolean

// let c; // Undefined
// let d = null; // Null

// // console.log(d);

// console.log(10 === '10'); //strict equality
// console.log(10 == '10'); //loose equality

// let str = 'Hello Guys';
// let str2 = "Hello Guys";
// let str3 = `Hello Guys`;

// console.log(str, str2, str3);

// let str = 'Hello "Guys"';
// let str2 = "Hello 'Guys'";
// let str3 = "Hello \"Guys\"";
// let str4 = "Hello \nGuys";
// console.log(str4);

//concatenation
// let x = "hello";
// let y = "guys";

// console.log(x + y);

// let username = 'Giori Beridze Sulamanidze';

// let nameLength = username.length;
// console.log(nameLength);

// let username = 'Giorgisdidfhdaoisaosiag'; //სიგრძე - 5; მაქს. ინდექსი - 4;
// // console.log(username.charAt(0));
// // console.log(username.charAt(1));
// // console.log(username.charAt(2));
// // console.log(username.charAt(3));
// // console.log(username.charAt(4));
// // console.log(username.charAt(5));
// let lastSymbol = username.charAt(username.length - 1);
// console.log(lastSymbol);

// let myName = "Luka";

// console.log(myName);

// let myName = "Giorgi Beridze";

// let slicedName = myName.slice(7, 14);
// let slicedNameMinusIndx = myName.slice(-7);
// console.log(slicedName);

// let fruit = "Apple Mango Banana";
// console.log(fruit.substr(2, 8));
// console.log(fruit.slice(2, 8));

// let x = "Hello Guys";
// console.log(x.toUpperCase());
// console.log(x.toLowerCase());

// let text1 = "Hello";
// let text2 = "World";
// let text3 = text1.concat(" ", text2, "!!!");
// console.log(text3);

// let str = "Apple Mango Banana Mango";

// console.log(str.indexOf("Mango"));
// console.log(str.lastIndexOf("Mango"));
// console.log(str.includes("Banana"));

// let x = 10;
// let y = 5;
// let str = `Hello guys ${x + y} times!!!`;

// let userAge = 17;

// if (userAge > 18) {
//   console.log("Access granted!");
// } else if (userAge > 16 && userAge <= 18) {
//   console.log("Access granted partially!");
// } else {
//   console.log("Access rejected!");
// }

// for (let i = 100; i >= 0; i--) {
//   if (i % 2 == 0) {
//     console.log("ეს რიცხვი ლუწია: ", i);
//   } else {
//     console.log("ეს რიცხვი კენტია: ", i);
//   }
// }

// object properties -> key: value

// const car = {
//   color: "red",
//   brand: "BMW",
//   engine: 1.8,
//   wheel: true, // true - მარცხენა; false - მარჯვენა
//   mileage: 54000,
// };

// console.log(car);

// console.log(car.engine);

// console.log(car["engine"]);

// const { mileage, color, brand } = car;

// const mileage = car.mileage; იგივეა რაც ზედა ჩანაწერი
// const color = car.color;

// console.log(mileage, color, brand);

// const car = {
//   color: "red",
//   brand: "BMW",
//   engine: 1.8,
//   wheel: true,
//   mileage: 54000,
// };

// console.log(Object.keys(car));
// console.log(Object.values(car));
// console.log(Object.entries(car));

// function sum(){}

//arrow function

// const sum = () => {
//   console.log("hi");
// };

// sum();
// sum();
// sum();
// sum();
// sum();

// const calculator = (x, y, sign) => {
//   if (sign == "+") {
//     console.log(x + y);
//   } else if (sign == "-") {
//     console.log(x - y);
//   } else if (sign == "*") {
//     console.log(x * y);
//   } else if(sign == "/"){
//     console.log(x / y);
//   }
// };

// calculator(10, 7, "/");

// const sum = (a, b) => {
//   let x = a + b;
//   return { name: "car", price: x };
// };

// console.log(sum(5, 7));

// const calculator = (x, y, sign) => {
//   let result;
//   if (sign == "+") {
//     result = x + y;
//   } else if (sign == "-") {
//     result = x - y;
//   } else if (sign == "*") {
//     result = x * y;
//   } else if (sign == "/") {
//     result = x / y;
//   }
//   return `თქვენ მიერ შეყვანილი არითმეტიკული ოპერაციის შედეგი არის ${result}`;
// };

// console.log(calculator(3, 7, "/"));

//******************************************************/

// Write a function isEven that takes a number as an argument
//and returns true if the number is even and false if it's odd.

// const isEven = (num) => {
//   if (num % 2 == 0) {
//     return true;
//   } else {
//     return false;
//   }
// };

// let x = isEven(3);
// let y = isEven(100);

// console.log(x, y);

///Write a function maxOfThree that takes three numbers as arguments
//and returns the largest of them.

// const maxOfThree = (x, y, z) => {
//   if (x > y && x > z) {
//     return x;
//   } else if (y > x && y > z) {
//     return y;
//   } else if (z > x && z > y) {
//     return z;
//   }
// };

// let maxNumber = maxOfThree(37, 11, 19);
// console.log(maxNumber);

// Write a function fizzBuzz that prints numbers from 1 to n.
// But for multiples of three print “Fizz” instead of the number
// and for the multiples of five print “Buzz”.
// For numbers which are multiples of both three and five print “FizzBuzz”.

// const fizzBuzz = (n) => {
//   for (let i = 1; i <= 100; i++) {
//     if (i % 3 == 0 && i % 5 == 0) {
//       console.log("FizzBuzz");
//     } else if (i % 3 == "0") {
//       console.log("Fizz");
//     } else if (i % 5 == "0") {
//       console.log("Buzz");
//     } else {
//       console.log(i);
//     }
//   }
// };

// fizzBuzz(100);

//generate 20 easy js function exercises without answers, consider that I'm begginer.

// array - მასივი
// const car = {
//   year: 2010,
//   color: "black",
// };

// Object.keys(car);
// Object.values(car);
// console.log(car.year);

// const car1 = [
//   2010,
//   "black",
//   true,
//   null,
//   undefined,
//   { name: "BMW", year: 2012 },
// ];

// const fruits = ["apple", "mango", "banana", "lemon"];

// console.log(fruits[3]);

// const product = {
//   image:
//     "https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg",
//   title: "ყურსასმენი Apple",
//   price: 300,
// };

// const products = [
//   {
//     image:
//       "https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg",
//     title: "ყურსასმენი Apple",
//     price: 300,
//   },
//   {
//     image:
//       "https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg",
//     title: "საქართველოს დროშა",
//     price: 30,
//   },
//   {
//     image:
//       "https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg",
//     title: "ხარაჩო 1 მეტრიანი",
//     price: 0.2,
//   },
// ];

// const fruits = [
//   { name: "apple", amount: 10, price: { old: 0.8, new: 0.7 } },
//   {
//     name: "mango",
//     amount: 8,
//     price: { old: 1.2, new: 1.1 },
//     customers: ["Lasha", "Giorgi", "Beka"],
//   },
//   { name: "lemon", amount: 2, price: { old: 3, new: 2.5 } },
// ];

// console.log(fruits[1].price.old);
// console.log(fruits[1].customers[2]);

// const fruits = ["apple", "mango", "banana", "lemon"];

// console.log(fruits[fruits.length - 1]);

//****მეთოდების 3 კრიტერიუმი:
//1) ცვლის თუ არა ორიგინალ მასივის
//2) რას აკეთებს
//3) რას აბრუნებს
//

// const products = [
//   {
//     image: "https://img.freepik.com/free-photo.jpg",
//     title: "ყურსასმენი Apple",
//     price: 300,
//   },
//   {
//     image: "https://img.freepik.com/free-photo.jpg",
//     title: "საქართველოს დროშა",
//     price: 30,
//   },
//   {
//     image: "https://img.freepik.com/free-photo.jpg",
//     title: "ხარაჩო 1 მეტრიანი",
//     price: 0.2,
//   },
// ];
// //ანონიმური ფუნქცია == უსახელო ფუნქციას
// products.map((product, index = 2, array) => {
//   return console.log(product.price);
// });

// const numbers = [2, 8, 3, 4, 5];

// const newNumbers = numbers.map((number, index, array) => {
//   return number ** 2;
// });

// console.log(numbers);
// console.log(newNumbers);

// ***SCOPE****

// {
//   let x = 100;
//   {
//     console.log(x);
//   }
// }

// console.log(x);

// *** Array Methods

//****მეთოდების 3 კრიტერიუმი:
//1) ცვლის თუ არა ორიგინალ მასივის
//2) რას აკეთებს
//3) რას აბრუნებს
//

// const names = ["Luka", "Giorgi", "Nikolozi", "Dimitri"];

// console.log(names.at(-2));

// const names = ["Luka", "Giorgi", "Nikolozi", "Dimitri"];

// console.log(names);
// console.log(names.pop());
// console.log(names);

// const names = ["Luka", "Giorgi", "Nikolozi", "Dimitri"];

// console.log(names);
// console.log(names.push('Sandro'));
// console.log(names);

// const names = ["Luka", "Giorgi", "Nikolozi", "Dimitri"];

// console.log(names);
// console.log(names.push('Sandro'));
// console.log(names);

// const names = ["Luka", "Giorgi", "Nikolozi", "Dimitri"];

// console.log(names);
// console.log(names.splice(2, 1, "Sandro", "Beka"));
// console.log(names);

// const names = ["Luka", "Giorgi", "Nikolozi", "Dimitri"];

// console.log(names);
// console.log(names.toSpliced(2, 1, "Sandro", "Beka"));
// console.log(names);

// const names = ["Luka", "Giorgi", "Nikolozi", "Dimitri"];

// console.log(names);
// console.log(names.slice(1, 3));
// console.log(names);

// const names = ["Luka", "Giorgi", "Nikolozi", "Dimitri", "Giorgi"];

// console.log(names.indexOf("Giorgi"));
// console.log(names.lastIndexOf("Giorgi"));
// console.log(names.includes("Gio"));

// const nums = [12, 80, 13, 78, 24, 25, 45, 35];

// console.log(
//   nums.find((number, index, array) => {
//     return number > 18;
//   })
// );

// const names = ["Luka", "Giorgi", "Nikolozi", "Dimitri", "Giorgi"];

// console.log(
//   names.find((name, index, array) => {
//     return name.length == 8;
//   })
// );

// const nums = [12, 180, 123, 78, 24, 25, 45, 35];

// nums.sort((a, b) => {
//   return a - b;
// });

// console.log(
//   nums.toSorted((a, b) => {
//     return b - a;
//   })
// );

// console.log(nums)

// const nums = [
//   { number: 20 },
//   { number: 2 },
//   { number: 0 },
//   { number: 21 },
//   { number: 10 },
// ];

// nums.sort((a, b) => {
//   return a.number - b.number;
// });
// console.log(nums);

// const nums = [12, 180, 123, 8, 9, 2, 3, 78, 24, 25, 45, 35];

// const filteredNums = nums
//   .filter((number, index, array) => {
//     return number > 18;
//   })
//   .sort((a, b) => {
//     return a - b;
//   });

// console.log(filteredNums);

// const cars = [
//   { brand: "BMW", price: 800 },
//   { brand: "Mercedes", price: 3800 },
//   { brand: "Volvo", price: 1800 },
//   { brand: "Mitsubishi", price: 1000 },
//   { brand: "Jaguar", price: 8000 },
//   { brand: "BMW", price: 18000 },
// ];

// const filteredCars = cars
//   .filter((car, index, array) => {
//     return car.price > 1000 && car.price < 10000;
//   })
//   .sort((a, b) => {
//     return a.price - b.price;
//   });

// const filteredCars = cars.filter((car, index, array) => {
//   return car.brand == "BMW";
// });

// console.log(filteredCars);

// const prices = [12, 180, 123, 8, 9, 3, 78, 24, 25, 45, 35];

// const totalPrice = prices.reduce((total, price, index, array) => {
//   return total + price;
// }, 100);

// console.log(totalPrice);

// const cars = [
//   { brand: "BMW", price: 20 },
//   { brand: "BMW", price: 40 },
//   { brand: "BMW", price: 50 },
// ];

// const totalPrice = cars.reduce((total, car, index, array) => {
//   return total + car.price;
// }, 0);

// console.log(totalPrice);

const nums = [10, 29, 8, 20];

console.log(
  nums.some((num, index, array) => {
    return num > 10;
  })
);
