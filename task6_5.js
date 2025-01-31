//Создайте две переменные num1 и num2, и напишите условие, которое сравнивает их значения и выводит в консоль "num1 больше num2", если num1 больше, "num2 больше num1", если num2 больше, и "num1 и num2 равны", если они равны.

let num1 = 6;
let num2 = -5;

if (num1 > num2) {
    console.log('num1 больше num2');
} else if (num2 > num1) {
    console.log('num2 больше num1');
} else {
    console.log('num1 и num2 равны');
}