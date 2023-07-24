// //функция конструтор для прототипа
// логический функционал
function PrototypeMyArray(){
    this.push = function(){
        for (let index = 0; index < arguments.length; index++) {
            this[this.length] = arguments[index];
        this.length++;
    }
    return this.length;
}
    this.toString = function(){
        let stringArray = '';
        for (let index = 0; index < this.length; index++){
            if(index === this.length - 1){ //чтобы в последнем не ставилась ','
                 stringArray += this[index];
                 break;
            }   
                 stringArray += this[index] + ',';
            
        }
        return stringArray;
    }

    this.pop = function(){ //прописываем метод pop
        if(this.length === 0){
            return; //возвращает undefined если массив this пустой
        }
        const lastElem = this[this.length-1]; 
        delete this[this.length-1];
        return this[this.length-1];
        this.length--;
        return lastElem; //сохраняет значение последнего элемента массива, потом удаляет его и изменяет длину 
        
    }

    this.forEach = function(callbackFn){
        for(let index = 0; index < this.length; index++){
            callbackFn(this[index]);
        }
    }

    this.some = function(checkFn){
        for(let index = 0; index < this.length; index++){
            if(checkFn(this[index])){
                return true;
            }
        }
        return false;
    }

    this.every = function(checkFn){
        for(let index = 0; index < this.length; index++){
            if(checkFn(this[index]) === false){
                return false;
            }
        }
        return true;
    }

    this.filter = function(checkFn){
        const result = new MyArray();
        for(let index = 0; index < this.length; index++){
            if(checkFn(this[index])){
                result.push(this[index]);
            }
        }
        return result;
    }
}

// данные
// function MyArray(){
//     this.length = 0;
// }

//связываем данные с логическим функционалом
MyArray.prototype = new PrototypeMyArray();

// const myArr1 = new MyArray();
// myArr1.push(12);
// myArr1.push(34);
// myArr1.push(23);
// console.log(myArr1);
// console.log(myArr1.toString());


//аргументы функции
// const arr1 = new Array(7, 4, 5);
// function f(num1, num2) {
    // console.log('num1 = ', num1); //100
    // console.log('num2 = ', num2); //5
    // console.log(arguments);
// }
// f(100, 5, 6, 8);

//нужно положить аргументы в функцию
function MyArray(){
        this.length = 0;
        if(arguments.length ===1){
            for (let index = 0; index < arguments[0]; index++){
                this.push(); //если значение только 1 как в const myArr2, то будет undefined
            }
        } else{
            for (let index = 0; index < arguments.length; index++) {
                this.push(arguments[index]); //метод push уже описан выше, если больше 1 значения
            }
        }
        
    }

// const myArr1 = new MyArray(4, 8, 6);
// const myArr2 = new MyArray(3);