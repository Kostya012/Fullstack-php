/*
Задание №1. Проверка на пустоту
Напишите функцию isEmpty(obj), которая возвращает true, если у объекта нет свойств,
иначе false.
*/

function isEmpty(obj) {
  let count = 0;
  for (let key in obj) {
    count++;
  }
  if (count > 0) {
    return true;
  } else {
    return false
  }
}

/*
Задание №2. Умножаем все числовые свойства на 2
Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства
объекта obj на 2.
Обратите внимание, что multiplyNumeric не нужно ничего возвращать. Следует
напрямую изменять объект.
P.S. Используйте typeof для проверки, что значение свойства числовое.
*/

function multiplyNumeric(obj) {
  for (let key in obj) {
    objNum[key] *= 2;
  }
}

let objNum = {
  a: 1,
  b: 2,
  c: 3,
};

multiplyNumeric(objNum);
console.log(`objNum`, objNum);

/*
Задание №3. Ввод числового значения
Создайте функцию readNumber, которая будет запрашивать ввод числового значения
до тех пор, пока посетитель его не введёт.
функция должна возвращать числовое значение.
Также надо разрешить пользователю остановить процесс ввода, отправив пустую
строку или нажав «Отмена». В этом случае функция должна вернуть null.
*/

function readNumber() {
  let num;
  let i = true;
  do {
    num = prompt("Введите число");
    if (num === null) {
      return num;
    } else {
      num = +num;
      if (num !== num) {
        i = true;
      } else {
        i = false;
      }
    }
  } while (i);
  return num;
}

// console.log(readNumber());

/*
Задание №4. Случайное число от min до max
Встроенный метод Math.random() возвращает случайное число от 0 (включительно) до
1 (но не включая 1)
Напишите функцию random(min, max), которая генерирует случайное число с
плавающей точкой от min до max (но не включая max).
Пример работы функции:
alert( random(1, 5) ); // 1.2345623452
alert( random(1, 5) ); // 3.7894332423
alert( random(1, 5) ); // 4.3435234525
*/

let min = 1;
let max = 5;


function random(min, max) {
  // max не включается, min включается
  let rand = Math.random() * (max - min) + min;
  return rand;
}

console.log(`rand`, random(min, max));

/*
Задание №5. Случайное целое число от min до max
Напишите функцию randomInteger(min, max), которая генерирует случайное целое
(integer) число от min до max (включительно).
Любое число из интервала min..max должно появляться с одинаковой вероятностью.
Пример работы функции:
alert( randomInteger(1, 5) ); // 1
alert( randomInteger(1, 5) ); // 3
alert( randomInteger(1, 5) ); // 5
*/

function randomInteger(min, max) {
  // число от min до max (включительно)
  let rand = Math.floor(Math.random() * (max - min + 1)) + min;
  return rand;
}

console.log(`rand`, randomInteger(min, max));

/*
Задание №6. Сделать первый символ заглавным
Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым
символом.
Например:
ucFirst("вася") == "Вася";
*/

function ucFirst(str) {
  return str[0].toUpperCase() + str.slice(1);
}

console.log(`ucFirst("вася")`, ucFirst("вася"));

/*
Задание №7. Проверка на спам
Напишите функцию checkSpam(str), возвращающую true, если str содержит 'viagra' или
'XXX', а иначе false.
Функция должна быть нечувствительна к регистру:
checkSpam('buy ViAgRA now') == true
checkSpam('free xxxxx') == true
checkSpam("innocent rabbit") == false
*/

function checkSpam(str) {
  if (str.toLowerCase().includes('viagra')) {
    return true;
  } else if (str.toLowerCase().includes('xxx')) {
    return true;
  } else {
    return false;
  }
}

console.log(`buy ViAgRA now`, checkSpam('buy ViAgRA now'));
console.log(`free xxxxx')`, checkSpam('free xxxxx'));
console.log(`innocent rabbit`, checkSpam("innocent rabbit"));


/*
Задание №8. Усечение строки
Создайте функцию truncate(str, maxlength), которая проверяет длину строки str и, если
она превосходит maxlength, заменяет конец str на "…", так, чтобы её длина стала равна
maxlength.
Результатом функции должна быть та же строка, если усечение не требуется, либо,
если необходимо, усечённая строка.
Например:
truncate("Вот, что мне хотелось бы сказать на эту тему:", 20) = "Вот, что мне
хотело…"
truncate("Всем привет!", 20) = "Всем привет!"
*/

function truncate(str, maxlength) {
  let len = str.length;
  if (len <= maxlength) {
    return str;
  } else {
    return str.substring(0, maxlength) + "...";
  }
}

console.log(`Вот, что мне хотелось бы сказать на эту тему:`, truncate("Вот, что мне хотелось бы сказать на эту тему:", 20));
console.log(`Всем привет!`, truncate("Всем привет!", 20));

/*
Задание №9. Выделить число
Есть стоимость в виде строки "$120". То есть сначала идёт знак валюты, а затем –
число.
Создайте функцию extractCurrencyValue(str), которая будет из такой строки выделять
числовое значение и возвращать его.
Например:
alert( extractCurrencyValue('$120') === 120 ); // true
*/

function extractCurrencyValue(str) {
  let len = str.length;
  if (len >= 2) {
    return str.substring(1, len);
  } else {
    return str;
  }
}

console.log(`extractCurrencyValue('$120')`, extractCurrencyValue('$120'));

/*
Задание №10. Сумма введённых чисел
Напишите функцию sumInput(), которая:
• Просит пользователя ввести значения, используя prompt и сохраняет их в
массив.
• Заканчивает запрашивать значения, когда пользователь введёт не числовое
значение, пустую строку или нажмёт «Отмена».
• Подсчитывает и возвращает сумму элементов массива.
• P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».
*/

function sumInput() {
  let num;
  let arr = [];
  let sum = 0;
  let i = true;
  do {
    num = prompt("Введите число");
    if (num === null) {
      return sum;
    } else if (num === "") {
      return sum;
    } else {
      num = Number(num);
      if (isNaN(num)) {
        i = true;
      } else {
        arr.push(num);
        sum += num;
      }
    }
  } while (i);
  return sum;
}

console.log(`sumInput()`, sumInput());

/*
Задание №11. Подмассив наибольшей суммы
На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.
Функция getMaxSubSum(arr) должна возвращать эту сумму.

Например:
getMaxSubSum([-1, 2, 3, -9]) = 5 (сумма выделенных)
getMaxSubSum([2, -1, 2, 3, -9]) = 6
getMaxSubSum([-1, 2, 3, -9, 11]) = 11
getMaxSubSum([-2, -1, 1, 2]) = 3
getMaxSubSum([100, -9, 2, -3, 5]) = 100
getMaxSubSum([1, 2, 3]) = 6 (берём все)
Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна
«0»:
getMaxSubSum([-1, -2, -3]) = 0
Попробуйте придумать быстрое решение: O(n2), а лучше за О(n) операций.
*/

let arr = [1, -2, 3, 4, -9, 6];

function getMaxSubSum(arr) {
  let maxSum = 0;
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let sum = 0;
    for (let j = i; j < len; j++) {
      sum += arr[j];
      maxSum = (maxSum > sum) ? maxSum : sum;
    }
  }
  return maxSum;
}

console.log(`getMaxSubSum(arr)`, getMaxSubSum(arr));
console.log(`getMaxSubSum([-1, 2, 3, -9])`, getMaxSubSum([-1, 2, 3, -9]));
console.log(`getMaxSubSum([2, -1, 2, 3, -9])`, getMaxSubSum([2, -1, 2, 3, -9]));

/*
Задание №12. Обязателен ли "else"?
Следующая функция возвращает true, если параметр age больше 18.
В ином случае она запрашивает подтверждение через confirm и возвращает его
результат:
function checkAge(age) {
if (age > 18) {
return true;
} else {
// ...
return confirm('Родители разрешили?');
}
}
Будет ли эта функция работать как-то иначе, если убрать else?
function checkAge(age) {
if (age > 18) {
return true;
}
// ...
return confirm('Родители разрешили?');
}
Есть ли хоть одно отличие в поведении этого варианта?
*/


// Функция не будет работать иначе, если убрать else
// Присутствие блока else не является обязательным.
// отличие только в том, там где else { тут тело кода оператора условия} и после второе тело кода функции.

/*
Задание №13. Перепишите функцию, используя оператор '?' или '||'
Следующая функция возвращает true, если параметр age больше 18.
В ином случае она задаёт вопрос confirm и возвращает его результат.
function checkAge(age) {
if (age > 18) {
return true;
} else {
return confirm('Родители разрешили?');
}
}
Перепишите функцию, чтобы она делала то же самое, но без if, в одну строку.
Сделайте два варианта функции checkAge:
Используя оператор ?
Используя оператор ||
*/

function checkAge(age) {
  return (age > 18) ? true : confirm('Родители разрешили?');
}

function checkAge2(age) {
  if ((age > 18) || (age > 21)) {
    return true;
  } else {
    return confirm('Родители разрешили?');
  }
}

/*
Задание №14. Функция min(a, b)
Напишите функцию min(a,b), которая возвращает меньшее из чисел a и b.
Пример вызовов:
min(2, 5) == 2
min(3, -1) == -1
min(1, 1) == 1
*/

function min2(a, b) {
  return Math.min(a, b);
}

console.log(`min(2, 5)`, min2(2, 5));
console.log(`min(3, -1)`, min2(3, -1));
console.log(`min(1, 1)`, min2(1, 1));

/*
Задание №15. Функция pow(x,n)
Напишите функцию pow(x,n), которая возвращает x в степени n. Иначе говоря,
умножает x на себя n раз и возвращает результат.
pow(3, 2) = 3 * 3 = 9
pow(3, 3) = 3 * 3 * 3 = 27
pow(1, 100) = 1 * 1 * ...* 1 = 1
Создайте страницу, которая запрашивает x и n, а затем выводит результат pow(x,n).
Запустить демо
P.S. В этой задаче функция обязана поддерживать только натуральные значения n, т.е.
целые от 1 и выше.
*/

function pow(x, n) {
  return x ** n;
}

console.log(`pow(3, 2)`, pow(3, 2));
console.log(`pow(3, 3)`, pow(3, 3));
console.log(`pow(1, 100)`, pow(1, 100));

/*
Задание №16. Перепишите с использованием функции-стрелки
Замените код Function Expression стрелочной функцией:
function ask(question, yes, no) {
if (confirm(question)) yes()
else no();
}
ask(
"Вы согласны?",
function() { alert("Вы согласились."); },
function() { alert("Вы отменили выполнение."); }
);
*/

let ask = (question, yes, no) => {
  if (confirm(question)) yes()
  else no();
};
ask(
  "Вы согласны?",
  () => alert("Вы согласились."),
  () => alert("Вы отменили выполнение.")
);

/*
Задание №17. Робинзон Крузо
Ваш месячный доход - 3333 попугая. Вы хотите купить пальму за 8000
попугаев. Вычислите, за какой промежуток времени вы насобираете на
пальму, при условии что ваши ежемесячные расходы составляют 1750
попугаев.
*/

let doh = 3333;
let rash = 1750;
let dream = 8000;

let res = Math.ceil(8000 / (3333 - 1750));

console.log(`Пальма будет через `, res, " месяцев");

/*
Задание №18. Вопросы пользователю
1. Спросить у пользователя 10 чисел
2. Если число
- положительное —> ничего не делать
- отрицательная —> получить их сумму
3. Вывести сумму отрицательных чисел, которые ввел пользователь
ВАЖНО: по условиям задачи в вашем коде должен быть только 1 prompt и
только 1 цикл for
*/

function sumOtric() {
  let num;
  let sum = 0;
  for (let i = 0; i < 10; i++) {
    num = prompt("Введите число");
    if (num === null) {
      return sum;
    } else if (num === "") {
      return sum;
    } else {
      num = Number(num);
      if (isNaN(num)) {
        continue;
      } else if (num < 0) {
        sum += num;
      }
    }
  }
  return sum;
}

console.log(`Сумма отрицательных чисел = `, sumOtric());

/*
Задание №19. Скопирован ли массив?
Что выведет следующий код?
let fruits = ["Яблоки", "Груша", "Апельсин"];
// добавляем новое значение в "копию"
let shoppingCart = fruits;
shoppingCart.push("Банан");
// что в fruits?
alert( fruits.length ); // ?
*/

// Ссылка на массив скопирована, а скалярные текстовые значения нет. Чтобы полностью скопировать массив или объект необходимо выполнить глубокое копирование
// alert( fruits.length ); // 4 будет добавлен "Банан".

/*
Задание №20. Операции с массивами
Давайте произведём 5 операций с массивом.
Создайте массив styles с элементами «Джаз» и «Блюз».
Добавьте «Рок-н-ролл» в конец.
Замените значение в середине на «Классика». Ваш код для поиска значения в
середине должен работать для массивов с любой длиной.
Удалите первый элемент массива и покажите его.
Вставьте «Рэп» и «Регги» в начало массива.
Массив по ходу выполнения операций:
Джаз, Блюз
Джаз, Блюз, Рок-н-ролл
Джаз, Классика, Рок-н-ролл
Классика, Рок-н-ролл
Рэп, Регги, Классика, Рок-н-ролл
*/

let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
let len = styles.length;
let middle = Math.floor(len / 2);
styles[middle] = "Классика";
styles.shift();
console.log(`styles[0]`, styles[0]);
styles.unshift("Рэп", "Регги");
console.log(`styles`, styles);

/*
Задание №21. Вызов в контексте массива
Каков результат? Почему?
let arr = ["a", "b"];
arr.push(function() {
alert( this );
})
arr[2](); // ?
*/

let arr2 = ["a", "b"];
arr2.push(function() {
  alert(this);
})
arr2[2](); // этой строчкой вызываем функцию в массиве, затем alertom покажет переменную this, которая ссылается на arr2 и покажет все значения в массиве в виде строки: "a,b,function() {\n  alert(this);\n }", где \n это enter.