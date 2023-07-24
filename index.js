'use strict';

//expression, обычная функция
const test2 = function(){
    console.log(this);
};

// //syntaxis arrow function, стрелочная функция
const test3 = () => {
    console.log(this);
};

test2(1, 2, 3);
test3(1, 2, 3);

console.dir(test2);
console.dir(test3);

//bind
function showHeader(header){
    console.log(this); //undefined
    console.log(header, this.title);
}

const site = {
    title: 'Portfolio',
    headers: ['Welcome', 'About me', 'Contacts'],
    showHeader(){
        this.headers.forEach(showHeader.bind(this)); //this === site, bind возвращает новую функцию в которой вместо this прописался site
    }
}


//Task стрелочная функция 
// const getSqure = (number=1) => number * number; //вычисляем площадь с помощью стрелочной функции

// const logSqure = (number=1) => console.log(number * number);
// const result = logSqure(5);
// console.log(result);

// const returnObject = (value) => ({prop: value})
// const result2 = returnObjects(5);
// console.log(result2);


//...rest
const test4 = (...args) => {
    console.log(args); //помести все аргументы переданные в функцию в массив
}

//Tast ...rest написать функцию которая считает сумму всех переданных параметров
const sum = (...args) => {
    let summa = 0;
    // for (let index = 0; index > args.length; index ++){
    //     summa += args(index);
    // } 
    //или
    args.forEach((arg) => {
        summa += arg
    });
    return summa
};

const result = sum(1, 2, 3, 1); //7
// c использованием reduce
const sumWithReduce = (...args) => args.reduce((summa, arg)=>summa + arg, 0) //accumulitor - это аккумулирующий значение, которое возвращает функция callback после посещения очередного элемента используется только для reduce, summa === accumulitor, 0 === начальный элемент
const result2 = sumWithReduce(1, 2, 3,1); //7
const result3 = sumWithReduce(); //0

//spread, посчитать сумму элементов массива
const arr = [1,2,3,4,5];
const result4 = sum(...arr); // === sum(1,2,3,4,5); //15
