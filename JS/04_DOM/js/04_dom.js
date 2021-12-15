/*
Задание №1. Дочерние элементы в DOM
Для страницы:
<html>
<body>
<div>Пользователи:</div>
<ul>
<li>Джон</li>
<li>Пит</li>
</ul>
</body>
</html>
Как получить:
• Напишите код, который получит элемент <div>?
• Напишите код, который получит <ul>?
• Напишите код, который получит второй <li> (с именем Пит)?
*/

let div = document.querySelector('div');
console.log('div :>> ', div);
let ul = document.querySelector('ul');
console.log('ul :>> ', ul);
let li2 = document.querySelector('ul li:last-child');
console.log('li2 :>> ', li2);

/*
Задание №2. Выделите ячейки по диагонали
Напишите код, который выделит красным цветом все ячейки в таблице по диагонали.
Вам нужно получить из таблицы <table> все диагональные <td> и выделить их,
используя код:
// в переменной td находится DOM-элемент для тега <td>
td.style.backgroundColor = 'red';
*/

let task2 = document.getElementById("task2");

let table = document.createElement("table");
let tbody = document.createElement("tbody");

for (let i = 1; i < 6; i++) {
  let tr = document.createElement("tr");
  for (let j = 1; j < 6; j++) {
    let td = document.createElement("td");
    td.innerText = `${i}:${j}`;
    if (i === j) {
      td.style.backgroundColor = "red";
    }
    tr.append(td);
  }
  tbody.append(tr);
}

table.append(tbody);
task2.append(table);

/*
Задание №3. Поиск элементов
Вот документ с таблицей и формой. Как найти?…
• Таблицу с id="age-table".
• Все элементы label внутри этой таблицы (их три).
• Первый td в этой таблице (со словом «Age»).
• Форму form с именем name="search".
• Первый input в этой форме.
• Последний input в этой форме.
*/

let ageTable = document.querySelector('#age-table');
console.log('ageTable :>> ', ageTable);

let label = document.querySelectorAll('#age-table label');
console.log('label :>> ', label);

let firstTd = document.querySelector('#age-table tr > td');
console.log('firstTd :>> ', firstTd);

let formNameSearch = document.querySelector('form[name="search"]');
console.log('formNameSearch :>> ', formNameSearch);

let inputs = document.querySelectorAll('form[name="search"] input');
console.log('first input :>> ', inputs[0]);
console.log('last Input :>> ', inputs[inputs.length - 1]);


/*
Задание №4. Очистите элемент
Создайте функцию clear(elem), которая удаляет всё содержимое из elem.
<ol id="elem">
<li>Привет</li>
<li>Мир</li>
</ol>
<script>
function clear(elem) {
// ваш код
}
clear(elem); // очищает список
</script>
*/

let elem = document.getElementById('elem');

function clear(elem) {
  elem.innerText = '';
}
clear(elem);

/*
Задание №5. Создайте список
Напишите интерфейс для создания списка.
Для каждого пункта:
1. Запрашивайте содержимое пункта у пользователя с помощью prompt.
2. Создавайте элемент <li> и добавляйте его к <ul>.
3. Процесс прерывается, когда пользователь нажимает Esc или вводит пустую
строку.
Все элементы должны создаваться динамически.
Если пользователь вводит HTML-теги -– пусть в списке они показываются как обычный
текст.
*/
let ul2 = document.getElementById('ul2');

while (true) {
  let str = prompt("Введите содержимое пункта li");
  if (str === null) {
    break;
  } else if (str === '') {
    break;
  }
  let li = document.createElement('li');
  li.innerText = str;
  ul2.append(li);
}

/*
Задание №6. Вставьте HTML в список
Напишите код для вставки <li>2</li><li>3</li> между этими двумя <li>:
<ul id="ul">
<li id="one">1</li>
<li id="two">4</li>
</ul>
*/

let lis = "<li>2</li><li>3</li>";
let one = document.getElementById('one');

one.insertAdjacentHTML('afterend', lis);

// есть ещё
// 'beforebegin': до самого element (до открывающего тега).
// 'afterbegin': сразу после открывающего тега  element (перед первым потомком).
// 'beforeend': сразу перед закрывающим тегом element (после последнего потомка).
// 'afterend': после element (после закрывающего тега).

/*
Задание №7. Создать уведомление
Напишите функцию showNotification(options), которая создаёт уведомление: <div
class="notification"> с заданным содержимым. Уведомление должно автоматически
исчезнуть через 1,5 секунды.
Пример объекта options:
// показывает элемент с текстом "Hello" рядом с правой верхней частью окна.
showNotification({
top: 10, // 10px от верхней границы окна (по умолчанию 0px)
right: 10, // 10px от правого края окна (по умолчанию 0px)
html: "Hello!", // HTML-уведомление
className: "welcome" // дополнительный класс для div (необязательно)
});
*/

function showNotification({top = 0, right = 0, className, html}) {
  let task7 = document.getElementById('task7');
  task7.style.position = "relative";
  let div = document.createElement("div");
  div.className = "notification";
  div.innerText = html;
  div.style.top = `${top}px`;
  div.style.right = `${right}px`;
  div.classList.add(className);
  div.style.position = "absolute";
  div.style.backgroundColor = "red";
  div.style.color = "white";
  div.style.fontSize = "20px";
  task7.prepend(div);
  setTimeout(function () {
    div.style.display = 'none';
  }, 1500);
}
let options = {
  top: 10,
  right: 10,
  html: "Hello",
  className: "welcome"
}
showNotification(options);