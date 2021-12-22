/*
Задание №1. Скрыть элемент по нажатию кнопки
Добавьте JavaScript к кнопке button, чтобы при нажатии элемент <div id="text"> исчезал.
Содержимое документа index.html:
<!DOCTYPE HTML>
<html>
<head>
<meta charset="utf-8">
</head>
<body>
<input type="button" id="hider" value="Нажмите, чтобы спрятать
текст" />
<div id="text">Текст</div>
<script>
</script>
</body>
</html>
Задание
*/

let div = document.querySelector('div');
console.log('div :>> ', div);
let ul = document.querySelector('ul');
console.log('ul :>> ', ul);
let li2 = document.querySelector('ul li:last-child');
console.log('li2 :>> ', li2);

/*
Задание №2. Какой обработчик запустится?
В переменной button находится кнопка. Изначально на ней нет обработчиков.
Который из обработчиков запустится? Что будет выведено при клике после выполнения
кода?
button.addEventListener("click", () => alert("1"));
button.removeEventListener("click", () => alert("1"));
button.onclick = () => alert(2);
*/

//Ответ:
// Запустится вот этот код стрелочной функции:
// button.onclick = () => alert(2);

/*
Задание №3. Скопировать и отсортировать массив
У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr
неизменённым.
Создайте функцию copySorted(arr), которая будет возвращать такую копию.
let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (без изменений)
*/

let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
alert( sorted ); // CSS, HTML, JavaScript
alert( arr ); // HTML, JavaScript, CSS (без изменений)

function copySorted(arr) {
  let newArr = arr.map(item=>item);
  return newArr.sort();
}

/*
Задание №4. Вычислить факториал
Факториал натурального числа – это число, умноженное на "себя минус один", затем на
"себя минус два", и так далее до 1. Факториал n обозначается как n!
Определение факториала можно записать как:
n! = n * (n - 1) * (n - 2) * ...*1
Примеры значений для разных n:
1! = 1
2! = 2 * 1 = 2
3! = 3 * 2 * 1 = 6
4! = 4 * 3 * 2 * 1 = 24
5! = 5 * 4 * 3 * 2 * 1 = 120
Задача – написать функцию factorial(n), которая возвращает n!, используя рекурсию.
alert( factorial(5) ); // 120
P.S. Подсказка: n! можно записать как n * (n-1)! Например: 3! = 3*2! = 3*2*1! = 6
*/

alert( factorial(5) ); // 120

function factorial(n) {
  if (n != 1) {
    return n * factorial(n - 1);
  } else return 1;
}

/*
Задание №5. Числа Фибоначчи
Последовательность чисел Фибоначчи определяется формулой Fn = Fn-1 + Fn-2. То
есть, следующее число получается как сумма двух предыдущих.
Первые два числа равны 1, затем 2(1+1), затем 3(1+2), 5(2+3) и так далее: 1, 1, 2, 3, 5,
8, 13, 21....
Числа Фибоначчи тесно связаны с золотым сечением и множеством природных
явлений вокруг нас.
Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.
Пример работы:
function fib(n) {  ваш код  }
alert(fib(3)); // 2
alert(fib(7)); // 13
alert(fib(77)); // 5527939700884757
P.S. Все запуски функций из примера выше должны работать быстро. Вызов fib(77)
должен занимать не более доли секунды.
*/

function fib(n) {
  let first = 1;
  let res = 1;
  for (let i = 3; i <= n; i++) {
    let temp = first + res;
    first = res;
    res = temp;
  }
  return res;
}

alert(fib(3)); // 2
alert(fib(7)); // 13
alert(fib(77)); // 5527939700884757