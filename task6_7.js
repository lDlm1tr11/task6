//Напишите конструкцию switch case, которая будет принимать числовую оценку grade (с 2 по 5) и выводить словесную форму оценки: "Отлично", "Хорошо", "Удовлетворительно", "Неудовлетворительно" или "Неизвестно", если оценка не входит в допустимый диапазон.

let grade = 4;

switch(grade){
    case 2:
        console.log('Неудовлетворительно');
        break;
        case 3:
        console.log('Удовлетворительно');
        break;
        case 4:
        console.log('Хорошо');
        break;
        case 5:
        console.log('Отлично');
        break;
default:
    console.log('Неизвестно');
}