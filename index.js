'use strict';

//recursion
// function recursion(number) {
//     if(number===5){  //базовый случай
//         return;
//     }
//     console.log(number)
//     recursion(number+1);
// }

// recursion(0); //0,1,2,3,4 когда доходим до 5 - выходим тк прописан базовый случай

// function getPowerNumber (number, exp){
// let result = 1;
// for (let i = 0; i < exp; i++){
//     result *= number;
// }
// return result;
// }
// getPowerNumber(2, 3); //8

//Task рекурсия для нахождения степени числа
// function getPowerNumberRecursion(number, exp){
//     if(exp === 0){
//         return 1;
//     }
//     if(exp === 1){
//         return number;
//     }
//     return number * getPowerNumberRecursion(number, exp - 1); //exp - 1 это не модифицированное значение, а новое
// }
// console.log(getPowerNumberRecursion(2, 4)); 

// //Task стрелочная функция
// const getPowerNumberRecursion = (number, exp) => (exp === 0) ? 1: number * getPowerNumberRecursion(number, exp - 1);

// console.log(getPowerNumberRecursion(2, 3)); 

//throw
/**
 * 
//  * @param {number} number 
//  * @param {number} exp 
//  * @returns 
//  */

// function getPowerNumberRecursion(number, exp){
//         if(typeof number !== 'number' || typeof exp !== 'number'){
//             throw new TypeError('type incorrect'); //создаем ошибку с помощью throw
//         }
//         if(exp < 0 || exp >= 100){
//             throw new RangeError('exp must be positive less 100');
//         }
//         if(exp === 0){
//             return 1;
//         }
//         if(exp === 1){
//             return number;
//         }
//         return number * getPowerNumberRecursion(number, exp - 1); //exp - 1 это не модифицированное значение, а новое
//     }
//     console.log(getPowerNumberRecursion(2, 4)); 
    
//     //как ловить ошибки и обрабатывать их, try catch finally
//     try{
//         console.log(getPowerNumberRecursion(2, 'qwe'));
//     } catch (error) {
//         console.log('error -', error)
//         if(error instanceof RangeError){
//             alert('check exp!')
//         } else if(error instanceof TypeError){
//             alert('check type!')
//         } else{
//             alert('error')
//         }
//     } finally {
//         console.log('finally')
//     }

//     console.log('more code');

//HOMEWORK Recursion_try_catch
//Написати рекурсивну функцію, яка обчислює факторіал числа (number).
//*Функція повинна приймати ціле число з типом данних number або bigint
//Кидатися посилками і викликати функцію в конструкції try/catch/finally

//если использовать цикл for вместо рекурсии
// function getFactorialNumber(number){
//    let sum = 1;

//    for (let i = 2; i <= number; i++) {
//     sum = sum * i;
//    }

//    return sum;
// }

/**
 * @param {number} number
 * @returns
 */ 

function getFactorialNumber(number){
    if(typeof number !== 'number'){
        throw new TypeError('type incorrect'); 
    }
    if(number < 0){
        throw new RangeError('number must be positive');
    }
    if (number === 0){
        return 1;
    }
    return number * getFactorialNumber(number - 1);
 }

 try{
            console.log(getFactorialNumber(5));
        } catch (error) {
            console.log('error -', error)
            if(error instanceof RangeError){
                alert('check number!')
            } else if(error instanceof TypeError){
                alert('check type!')
            } else{
                alert('error')
            }
        }
