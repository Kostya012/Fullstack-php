let index = document.getElementById("index");
let information = document.getElementById("information");
let settings = document.getElementById("settings");
let signIn = document.getElementById("signIn");
let signUp = document.getElementById("signUp");

let article = document.getElementById("article");

let groupMain = document.getElementById("groupMain");
let green = document.getElementById("green");
let aboutMain = document.getElementById("aboutMain");
let aboutSignIn = document.getElementById("aboutSignIn");
let aboutSignUp = document.getElementById("aboutSignUp");

let groupSet = document.getElementById("groupSet");
let groupInfo = document.getElementById("groupInfo");
let groupAdd = document.getElementById("groupAdd");

let plusAdd = document.getElementById("plusAdd");

// Buttons

let send = document.getElementById("send");
let send2 = document.getElementById("send2");
let buttonSaveSettings = document.getElementById("saveSettings");
let buttonSaveData = document.getElementById("buttonSaveData");

plusAdd.addEventListener("click", showAdd);

function showAdd() {
  groupAdd.style.display = "flex";
  plusAdd.removeEventListener("click", showAdd);
  plusAdd.style.display = "none";
}

index.addEventListener("click", choiceHeader);
information.addEventListener("click", choiceHeader);
settings.addEventListener("click", choiceHeader);
signIn.addEventListener("click", choiceHeader);
signUp.addEventListener("click", choiceHeader);

function choiceHeader() {
  index.className = "blog-nav-item";
  information.className = "blog-nav-item";
  settings.className = "blog-nav-item";
  signIn.className = "blog-nav-item";
  signUp.className = "blog-nav-item";
  let borderSignUp = document.querySelector('.border-sign-up');
  borderSignUp.style.border = "2px solid black";
  article.style.animationDuration = "1s";
  article.style.animationName = "none";
  green.innerText = "";
  groupMain.style.display = "none";
  aboutMain.style.display = "none";
  aboutSignIn.style.display = "none";
  aboutSignUp.style.display = "none";

  groupSet.style.display = "none";
  groupInfo.style.display = "none";
  groupAdd.style.display = "none";

  if (this === index) {
    index.className = "blog-nav-item active";
    article.innerText = "Home page";
    setTimeout(() => article.style.animationName = "slidein", 1);
    green.innerText = "Проект Fullstack работа с файлами, БД, регистрация, авторизация";
    aboutMain.style.display = "block";
  } else if (this === information) {
    information.className = "blog-nav-item active";
    article.innerText = "Information from DB, CSV, TXT";
    setTimeout(() => article.style.animationName = "slidein", 1);
    groupInfo.style.display = "flex";
  } else if (this === settings) {
    settings.className = "blog-nav-item active";
    article.innerText = "Settings DB, CSV, TXT";
    setTimeout(() => article.style.animationName = "slidein", 1);
    groupSet.style.display = "flex";
  } else if (this === signIn) {
    signIn.className = "blog-nav-item active";
    article.innerText = "Authorization";
    setTimeout(() => article.style.animationName = "slidein", 1);
    green.innerText = "Please Log in";
    aboutSignIn.style.display = "block";
    groupMain.style.display = "flex";
  } else if (this === signUp) {
    signUp.className = "blog-nav-item active";
    article.innerText = "Registration";
    borderSignUp.style.border = "2px solid #ddbe86";
    setTimeout(() => article.style.animationName = "slidein", 1);
    green.innerText = "Please Register";
    aboutSignUp.style.display = "block";
    groupMain.style.display = "flex";
  }
}

send.addEventListener("click", login);

function login() {
  send.disabled = true;
  console.log('login Click :>> ');
  let url = "./login.php";
  let name = document.getElementById('name');
  let password = document.getElementById('password');
  let rememberMe = document.getElementById('rememberMe');
  let captcha = document.getElementById('captcha');

  function checkBoxed(name) {
    if (name.checked) {
      return true;
    } else {
      return false;
    }
  }

  let obj = {
    name: name.value,
    pass: password.value,
    remember: checkBoxed(rememberMe),
    captcha: captcha.value
  };
  console.log('obj :>> ', obj);

  // async function submit() {
  //   try {
  //     const response = await fetch(url, {
  //       method: "POST", // или 'PUT'
  //       body: JSON.stringify(myData), // данные могут быть 'строкой' или {объектом}!
  //       headers: {
  //         Accept: "application/json",
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     const json = await response.json();
  //     console.log("Успех:", json);
  //     send.disabled = false;
  //   } catch (error) {
  //     console.error("Ошибка:", error);
  //   }
  // }
  // submit();
}

send2.addEventListener("click", registr);

function registr() {
  send2.disabled = true;
  let url = "./registr.php";
  let name2 = document.getElementById('name2');
  let email = document.getElementById('email');
  let password1 = document.getElementById('password1');
  let password2 = document.getElementById('password2');
  let captcha2 = document.getElementById('captcha2');

  let errName2 = document.getElementById('errName2');
  errName2.innerText = "";
  let errEmail = document.getElementById('errEmail');
  errEmail.innerText = "";
  let errPassword1 = document.getElementById("errPassword1");
  errPassword1.innerText = "";
  let errPassword2 = document.getElementById("errPassword2");
  errPassword2.innerText = "";
  let errCaptcha2 = document.getElementById('errCaptcha2');
  errCaptcha2.innerText = "";

  if (password1.value !== password2.value) {
    errPassword2.innerText = "The password is different";
    send2.disabled = false;
    return true;
  } else if (password1.value == "") {
    errPassword1.innerText = "field is empty";
    send2.disabled = false;
    return true;
  }
  let obj2 = {
    name: name2.value,
    email: email.value,
    pass: password1.value,
    captcha: captcha2.value
  };
  console.log('obj2 :>> ', obj2);

  async function submit() {
    try {
      const response = await fetch(url, {
        method: "POST", // или 'PUT'
        body: JSON.stringify(obj2), // данные могут быть 'строкой' или {объектом}!
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      console.log("Успех:", json);
      send2.disabled = false;
    } catch (error) {
      console.error("Ошибка:", error);
    }
  }
  submit();
}
buttonSaveSettings.addEventListener("click", saveSettings);

function saveSettings() {
  let url1 = "./settings.php";
  let url2 = "./files.php";
  let dbUser = document.getElementById("dbUser");
  let dbHost = document.getElementById("dbHost");
  let dbPwd = document.getElementById("dbPwd");
  let dbName = document.getElementById("dbName");
  let tableName = document.getElementById("tableName");
  let errorDb = document.getElementById("errorDb");
  errorDb.innerText = "";

  let objSet = {
    dbUser: dbUser.value,
    dbHost: dbHost.value,
    dbPwd: dbPwd.value,
    dbName: dbName.value,
    tableName: tableName.value,
    errorDb: errorDb.value
  };
  console.log('objSet :>> ', objSet);

  async function submit() {
    try {
      const response = await fetch(url1, {
        method: "POST", // или 'PUT'
        body: JSON.stringify(objSet), // данные могут быть 'строкой' или {объектом}!
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      console.log("Успех:", json);
      // function next page
    } catch (error) {
      console.error("Ошибка:", error);
    }
  }
  submit();

  const formData = new FormData();
  const fileCsv = document.getElementById('fileCsv');
  const fileTxt = document.getElementById('fileTxt');
  // const fileTxt = document.querySelector('input[type="file"][multiple]');
  // const fileTxt = document.querySelector('input[type="file"][multiple]');

  if (fileCsv.value) {
    formData.append('csv', fileCsv);
  }
  if (fileTxt.value) {
    formData.append('txt', fileTxt);
  }
  if (fileCsv.value && fileTxt.value) {
    console.log('файлов нет :>> ');
    return true;
  }

  formData.append('title', 'csv and txt');
  // for (let i = 0; i < photos.files.length; i++) {
  //   formData.append('photos', photos.files[i]);
  // }
  async function sendData() {
    try {
      const response = await fetch(url2, {
        method: 'POST',
        body: formData
      });
      const result = await response.json();
      console.log('Успех:', JSON.stringify(result));
    } catch (error) {
      console.error('Ошибка:', error);
    }
  }
}

function saveInf() {
  console.log('ckick :>> ');
  // let url = "saveinfo.php";
  // let errorMessage = document.getElementById("errorMessage");
  // errorMessage.innerText = "";
  // let message = document.getElementById("message");
  // let source = document.getElementById("source");
  // let index = source.selectedIndex;

  // console.log('index :>> ', index);

  // let objInfo = {
  //   message: message.value,
  //   index: index
  // };

  // console.log('objInfo :>> ', objInfo);
/*
  async function sendData() {
    try {
      const response = await fetch(url, {
        method: "POST", // или 'PUT'
        body: JSON.stringify(objInfo), // данные могут быть 'строкой' или {объектом}!
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      console.log("Успех:", json);
      // function next page
    } catch (error) {
      console.error("Ошибка:", error);
    }
  }
  sendData();
  */
}

buttonSaveData.addEventListener("click", saveInf);






/*
function choiceCalc() {
  index.className = "blog-nav-item";
  random.className = "blog-nav-item";
  calc.className = "blog-nav-item active";
  lucky.className = "blog-nav-item";
  aboutRandom.style.display = "none";
  aboutCalculator.style.display = "none";
  aboutLucky.style.display = "none";
  contRandom.style.display = "none";
  contCalc.style.display = "block";
  contLucky.style.display = "none";
  article.style.animationName = "none";
  article.innerText = "Calculator";
  setTimeout(() => article.style.animationName = "slidein", 10);
}
function choiceLucky() {
  index.className = "blog-nav-item";
  random.className = "blog-nav-item";
  calc.className = "blog-nav-item";
  lucky.className = "blog-nav-item active";
  aboutRandom.style.display = "none";
  aboutCalculator.style.display = "none";
  aboutLucky.style.display = "none";
  contRandom.style.display = "none";
  contCalc.style.display = "none";
  contLucky.style.display = "block";
  article.style.animationName = "none";
  article.innerText = "Oh lucky";
  setTimeout(() => article.style.animationName = "slidein", 10);
}

min.addEventListener("input", checkNum);
max.addEventListener("input", checkNum);

function checkNum() {
  if (this.value >= 0) {
    this.value = this.value;
  } else {
    this.value = 0;
  }
}

generate.addEventListener("click", generNum);

function generNum() {
  if (+min.value >= 0) {
    min.value = +min.value;
  } else {
    min.value = "";
  }

  if (+max.value >= 0) {
    max.value = +max.value;
  } else {
    max.value = "";
  }

  let rand = Number(min.value) + Math.random() * (Number(max.value) + 1 - Number(min.value));
  let random = Math.floor(rand);

  result.innerText = random;
}

// Calculator

let keys = document.querySelectorAll('#calculator span');
let inputCalc = document.getElementById('inputCalc');

let len = keys.length;

for (let i = 0; i < len; i++) {
  keys[i].addEventListener("click", clickSpan);
}

function clickSpan(event) {
  checkInput(this.innerHTML);
}

function checkInput(str) {
  switch (str) {
    case "C":
      inputCalc.value = "";
      break;
    case "=":
      inputCalc.value += str + getRes();
      break;
    case "+":
      checkEquals();
      inputCalc.value += str;
      break;
    case "-":
      checkEquals();
      inputCalc.value += str;
      break;
    case "÷":
      checkEquals();
      inputCalc.value += str;
      break;
    case "x":
      checkEquals();
      inputCalc.value += str;
      break;
    default:
      inputCalc.value += str;
  }
}

function checkEquals() {
  let tmp = inputCalc.value;
  if (tmp.split('=').length > 1) {
    let arr = tmp.split('=');
    inputCalc.value = arr[1];
  }
}

function getRes() {
  let tmp = inputCalc.value;
  let temp = '';
  if (tmp.split('+').length > 1) {
    let temp = 0;
    let arr = tmp.split('+');
    for (let val of arr) {
      if (isNaN(Number(val))) {
        return "введите числа";;
      } else {
        temp += Number(val);
      }
    }
    return temp;
  } else if (tmp.split('-').length > 1) {
    let arr = tmp.split('-');
    let len = arr.length;
    let temp;
    if (isNaN(Number(arr[0]))) {
      return "введите числа";
    } else {
      temp = Number(arr[0]);
    }
    for (let i = 1; i < len; i++) {
      if (isNaN(Number(arr[i]))) {
        return "введите числа";;
      } else {
        temp -= Number(arr[i]);
      }
    }
    return temp;
  } else if (tmp.split('÷').length > 1) {
    let arr = tmp.split('÷');
    let temp;
    let len = arr.length;
    if (isNaN(Number(arr[0]))) {
      return "введите числа";
    } else {
      temp = arr[0];
    }
    for (let i = 1; i < len; i++) {
      if (isNaN(Number(arr[i]))) {
        return "введите числа";
      } else if (Number(arr[i]) === 0) {
        return "на ноль делить нельзя!";
      } else {
        temp /= Number(arr[i]);
      }
    }
    return temp;
  } else if (tmp.split('x').length > 1) {
    let temp = 1;
    let arr = tmp.split('x');
    for (let val of arr) {
      if (isNaN(Number(val))) {
        return "введите числа";;
      } else {
        temp *= Number(val);
      }
    }
    return temp;
  }
  return temp;
}

// Oh lucky

let startGame = document.getElementById('startGame');
let resultat = document.getElementById('resultat');
let ohLucky = document.getElementById('ohLucky');

let curRes = 0;
let quest = 0;
let countSumWin = 14;
let variable = ["A: ", "B: ", "C: ", "D: "];
let checkFifty = true;
let checkFriend = true;
let checkZal = true;

let arrQuestion = [
  'Существуют следующие парадигмы программирования: (выберите лишнее)',
  'Выберите лишнюю концепцию функционального программирования',
  'Функции высших порядков это?',
  'Основные принципы структурирования ООП: (выберите лишнее)',
  'Полиморфизм это?',
  'This в ООП php это?',
  'Абстрактным классом называется?',
  'В отличие от абстрактного класса, интерфейсы: (выберите лишнее)',
  'SOLID принципы (выберите лишнее)',
  'Какое количество магических методов в OOП php?',
  'Какого нет магического метода в OOП php?',
  'Основные виды шаблонов проектирования: (выберите лишнее)',
  'Есть 6 классических порождающих шаблонов проектирования: (выберите лишнее)',
  'Поведенческие шаблоны проектирования, в отличие от структурных, не только определяют варианты взаимного использования объектов и сущностей, но и пытаются описывать способы их взаимодействия, их реализацию. Десятка классических поведенческих шаблонов проектирования: (выберите лишнее)',
  'Promise возвращает?',
];
let arrAnswer = [
  {
    "3": true,
    "answer0": "Императивная, cтруктурная",
    "answer1": "Модульная, объектно-ориентированная",
    "answer2": "Декларативная, функциональная",
    "answer3": "Козырная, зелёная"
  },
  {
    "3": true,
    "answer0": "Функции высших порядков",
    "answer1": "Чистые функции",
    "answer2": "Рекурсия",
    "answer3": "ООП"
  },
  {
    "0": true,
    "answer0": "это такие функции, которые могут принимать в качестве аргументов и возвращать другие функции.",
    "answer1": "которые не имеют побочных эффектов ввода-вывода и памяти (они зависят только от своих параметров и возвращают только свой результат)",
    "answer2": "вызывают сами себя",
    "answer3": "делают асинхронный запрос методом GET или POST"
  },
  {
    "3": true,
    "answer0": "абстракция",
    "answer1": "инкапсуляция",
    "answer2": "наследование и полиморфизм",
    "answer3": "вскрытие"
  },
  {
    "1": true,
    "answer0": "принцип в котором необходимо включать в класс, а соответственно и в объекты этого класса, только те свойства объекта, которые исользуются, абстрагируясь от лишней информации",
    "answer1": "способность функции обрабатывать данные разных типов",
    "answer2": "принцип ООП, позволяющий скрывать детали реализации некоторых действий (методов) и доступы к ряду свойств объектов или классов",
    "answer3": "принцип ООП, позволяющий одному классу приобрести все свойства и методы другого класса без их копирования"
  },
  {
    "2": true,
    "answer0": "описательное понятие, обобщающее несколько конкретных реализаций этого понятия.",
    "answer1": "программная реализация сущности, описание сущности на языке программирования. This также называют конструкцией для создания нового типа данных, поскольку на основе существующих данных классы позволяют создавать новые. Так же this называют чертежом, описывающим конкретную реализацию, но не реализующим",
    "answer2": "переменная, которая есть у каждого метода класса. В this попадает объект, для работы с которым вызывался метод",
    "answer3": "реализация описанного в классе, конкретный экземпляр описанного в классе"
  },
  {
    "0": true,
    "answer0": "класс, объект которого нельзя создать и любой класс, содержащий хотя бы один абстрактный метод, должен быть определён как абстрактный. Методы, объявленные абстрактными, несут, по существу, лишь описательный смысл и не могут включать реализацию.",
    "answer1": "класс, который позволяет создавать код, который указывает, какие методы должен реализовать класс, без необходимости определять, как именно они должны быть реализованы. Абстрактные классы разделяют пространство имён с классами и трейтами, поэтому они не могут называться одинаково.",
    "answer2": "класс, который не имеет магические методы",
    "answer3": "класс, который позволяет клонировать другой класс вместе с private ключами"
  },
  {
    "3": true,
    "answer0": "не позволяют включать в себя ничего кроме абстрактных методов и констант, тогда как в абстрактном классе могут быть и абстрактные и обычные методы;",
    "answer1": "не требуют ключевого слова abstract перед методами, поскольку все методы в интерфейсе всегда абстрактны; не наследуются, а имплементируется (не extends, а implements);",
    "answer2": "могут имплементироваться в класс в любом количестве, в отличие от наследования, которое в PHP позволяет унаследоваться лишь от одного класса;",
    "answer3": "могут добавить свои магические методы в класс в любом количестве."
  },
  {
    "0": true,
    "answer0": "Save transfer state",
    "answer1": "Single responsibility and Open/Closed principle",
    "answer2": "Liskov substitution and Interface Segregation principle",
    "answer3": "Dependency Inversion principle"
  },
  {
    "3": true,
    "answer0": "10",
    "answer1": "12",
    "answer2": "15",
    "answer3": "17"
  },
  {
    "3": true,
    "answer0": "__construct, __destruct, __get, __set, __isset, __unset",
    "answer1": "__toString, __sleep, __wakeup, __call, __clone, __invoke",
    "answer2": "__serialize, __unserialize, __set_state, __debugInfo, __callStatic",
    "answer3": "__toNumber, __delete, __create, __exit, __copy"
  },
  {
    "1": true,
    "answer0": "порождающие (Порождающие шаблоны проектирования управляют процессом создания новых объектов. Применяются в случае, если классическое создание объекта не эффективно или противоречит общей задаче)",
    "answer1": "музейные",
    "answer2": "структурные и поведенческие",
    "answer3": "архитектурные"
  },
  {
    "2": true,
    "answer0": "Простая фабрика и Фабричный метод",
    "answer1": "Абстрактная фабрика и Строитель",
    "answer2": "Интеофейсный завод и Монтажник",
    "answer3": "Прототип и Одиночка(Singleton)"
  },
  {
    "1": true,
    "answer0": "Цепочка ответственности, Команда, Итератор",
    "answer1": "Заказчик, Корзина, Администратор",
    "answer2": "Посредник, Хранитель, Наблюдатель",
    "answer3": "Посетитель, Стратегия, Состояние, Шаблонный метод"
  },
  {
    "3": true,
    "answer0": "Head",
    "answer1": "Body",
    "answer2": "Boolean",
    "answer3": "Promise"
  },
];

startGame.addEventListener("click", start);

function start() {
  ohLucky.innerText = "";
  startGame.innerText = "Заново";
  let resultat = document.getElementById('resultat');
  resultat.innerText = "";
  resultat.style.display = 'none';
  curRes = 0;
  quest = 0;
  countSumWin = 14;
  checkFifty = true;
  checkFriend = true;
  checkZal = true;

  let div0 = document.createElement('div');
  div0.className = "item ohLucky";
  let div1 = document.createElement('div');
  div1.className = "space";
  div0.append(div1);
  let div2 = document.createElement('div');
  div2.className = "bar";
  let div21 = document.createElement('div');
  div21.className = "as-main";
  let div211 = document.createElement('div');
  div211.className = "fifty";
  div211.addEventListener("click", fiftyfifty);
  let div212 = document.createElement('div');
  div212.className = "friend";
  div212.addEventListener("click", callFriend);
  let div213 = document.createElement('div');
  div213.className = "zal";
  div213.addEventListener("click", helpZal);
  div21.append(div211);
  div21.append(div212);
  div21.append(div213);
  div2.append(div21);
  let ul = document.createElement('ul');
  ul.id = "winnerSum";
  let arr = [1000000, 500000, 250000, 125000, 64000, 32000, 16000, 8000, 4000, 2000, 1000, 500, 300, 200, 100];
  for (let i = 0; i < 15; i++) {
    let li = document.createElement('li');
    li.innerText = arr[i];
    if (i == 14) {
      li.className = "choiceLi";
    }
    ul.append(li);
  }
  div2.append(ul);
  div0.append(div2);
  ohLucky.append(div0);
  let div3 = document.createElement('div');
  div3.className = "item question";
  div3.id = "question";
  div3.innerText = arrQuestion[0];
  ohLucky.append(div3);
  let div4 = document.createElement('div');
  div4.className = "item answers";
  for (let i = 0; i < 4; i++) {
    let div = document.createElement('div');
    div.className = "answer";
    div.id = "answer" + i;
    div.addEventListener("click", choiceAnswer);
    div.innerText = variable[i] + arrAnswer[0][`answer${i}`];
    div4.append(div);
  }
  ohLucky.append(div4);
}

function fiftyfifty(event) {
  this.style.backgroundPositionY = "0px";
  console.log("fiftyfifty start");
  let arrNum = getRand(0, 3);
  console.log("arrNum", arrNum);
  let temp1 = "answer" + arrNum[0];
  let temp2 = "answer" + arrNum[1];
  let none1 = document.querySelector(`#${temp1}`);
  let none2 = document.querySelector(`#${temp2}`);
  console.log("none1", none1);
  console.log("none2", none2);
  none1.style.display = "none";
  none2.style.display = "none";
  console.log("50x50");
  this.removeEventListener("click", fiftyfifty);
  checkFifty = false;
}

function getRand(min, max) {
  let tempNum;
  let tempArr = [];
  if ("0" in arrAnswer[quest]) {
    tempNum = "0";
  } else if ("1" in arrAnswer[quest]) {
    tempNum = "1";
  } else if ("2" in arrAnswer[quest]) {
    tempNum = "2";
  } else if ("3" in arrAnswer[quest]) {
    tempNum = "3";
  }
  function getRandomNum(notNum1, notNum2, min, max) {
    // debugger;
    let rand2 = min + Math.random() * (max + 1 - min);
    let random2 = Math.floor(rand2);
    if (random2 != notNum1 && random2 != notNum2) {
      return random2;
    } else {
      return getRandomNum(notNum1, notNum2, min, max);
    }
  }

  let rand = min + Math.random() * (max + 1 - min);
  let random = Math.floor(rand);
  if (random == tempNum) {
    return getRand(min, max);
  } else {
    tempArr.push(String(random));
    let tem = getRandomNum(tempNum, tempArr[0], min, max);
    tempArr.push(String(tem));
    return tempArr;
  }
}

function callFriend() {
  this.style.backgroundPositionY = "0px";
  let resultat = document.getElementById('resultat');
  let answer0 = document.getElementById('answer0');
  let answer1 = document.getElementById('answer1');
  let answer2 = document.getElementById('answer2');
  let answer3 = document.getElementById('answer3');
  let arrNotNum = [];
  if (answer0.style.display == 'none') {
    arrNotNum.push("0");
  }
  if (answer1.style.display == 'none') {
    arrNotNum.push("1");
  }
  if (answer2.style.display == 'none') {
    arrNotNum.push("2");
  }
  if (answer3.style.display == 'none') {
    arrNotNum.push("3");
  }
  if (arrNotNum.length > 1) {
    function getRandomNum(notNum1, notNum2, min, max) {
      let rand2 = min + Math.random() * (max + 1 - min);
      let random2 = Math.floor(rand2);
      if (random2 != notNum1 && random2 != notNum2) {
        return random2;
      } else {
        return getRandomNum(notNum1, notNum2, min, max);
      }
    }
    let min = 0;
    let max = 3;
    let answer = getRandomNum(arrNotNum[0], arrNotNum[1], min, max)
    let text = document.querySelector(`#answer${answer}`).innerHTML;
    let div = document.createElement('div');
    div.innerText = `Друг считает, что правильный ответ: "${text}"`;
    resultat.append(div);
    resultat.style.display = "block";
  } else {
    let min = 0;
    let max = 3;
    let rand = min + Math.random() * (max + 1 - min);
    let random = Math.floor(rand);
    let text = document.querySelector(`#answer${random}`).innerHTML;
    let div = document.createElement('div');
    div.innerText = `Друг считает, что правильный ответ: "${text}"`;
    resultat.append(div);
    resultat.style.display = "block";
  }
  this.removeEventListener("click", callFriend);
  checkFriend = false;
}

function helpZal() {
  this.style.backgroundPositionY = "0px";
  let resultat = document.getElementById('resultat');
  let answer0 = document.getElementById('answer0');
  let answer1 = document.getElementById('answer1');
  let answer2 = document.getElementById('answer2');
  let answer3 = document.getElementById('answer3');
  let arrNotNum = [];
  if (answer0.style.display == 'none') {
    arrNotNum.push("0");
  }
  if (answer1.style.display == 'none') {
    arrNotNum.push("1");
  }
  if (answer2.style.display == 'none') {
    arrNotNum.push("2");
  }
  if (answer3.style.display == 'none') {
    arrNotNum.push("3");
  }
  if (arrNotNum.length > 1) {
    function getRandomNum(notNum1, notNum2, min, max) {
      let rand2 = min + Math.random() * (max + 1 - min);
      let random2 = Math.floor(rand2);
      if (random2 != notNum1 && random2 != notNum2) {
        return random2;
      } else {
        return getRandomNum(notNum1, notNum2, min, max);
      }
    }
    let min = 0;
    let max = 3;
    let answer = getRandomNum(arrNotNum[0], arrNotNum[1], min, max)
    let text = document.querySelector(`#answer${answer}`).innerHTML;
    let div = document.createElement('div');
    div.innerText = `Зал считает, что правильный ответ: "${text}"`;
    resultat.append(div);
    resultat.style.display = "block";
  } else {
    let min = 0;
    let max = 3;
    let rand = min + Math.random() * (max + 1 - min);
    let random = Math.floor(rand);
    let text = document.querySelector(`#answer${random}`).innerHTML;
    let div = document.createElement('div');
    div.innerText = `Зал считает, что правильный ответ: "${text}"`;
    resultat.append(div);
    resultat.style.display = "block";
  }
  console.log("helpZal");
  this.removeEventListener("click", helpZal);
  checkZal = false;
}

function choiceAnswer() {
  this.style.backgroundColor = 'blue';
  let fifty = document.querySelector('.fifty');
  console.log(fifty);
  fifty.removeEventListener("click", fiftyfifty);
  let friend = document.querySelector('.friend');
  friend.removeEventListener("click", callFriend);
  let zal = document.querySelector('.zal');
  zal.removeEventListener("click", helpZal);

  let answer0 = document.getElementById('answer0');
  let answer1 = document.getElementById('answer1');
  let answer2 = document.getElementById('answer2');
  let answer3 = document.getElementById('answer3');

  answer0.removeEventListener("click", choiceAnswer);
  answer1.removeEventListener("click", choiceAnswer);
  answer2.removeEventListener("click", choiceAnswer);
  answer3.removeEventListener("click", choiceAnswer);

  answer0.removeEventListener("mouseover", changeColor);
  answer1.removeEventListener("mouseover", changeColor);
  answer2.removeEventListener("mouseover", changeColor);
  answer3.removeEventListener("mouseover", changeColor);

  answer0.removeEventListener("mouseout", changeColorOut);
  answer1.removeEventListener("mouseout", changeColorOut);
  answer2.removeEventListener("mouseout", changeColorOut);
  answer3.removeEventListener("mouseout", changeColorOut);

  // div211.className = "about fifty";
  // div211.addEventListener("click", fiftyfifty);
  // let div212 = document.createElement('div');
  // div212.className = "about friend";
  // div212.addEventListener("click", callFriend);
  // let div213 = document.createElement('div');
  // div213.className = "about zal";
  // div213.addEventListener("click", helpZal);

  let id = this.id[6]; // string
  console.log("choiceAnswer", id);

  setTimeout(() => {
    if (`${id}` in arrAnswer[quest]) {
      this.style.backgroundColor = 'green';
      if (quest == 4) {
        curRes = 1000;
      }
      if (quest == 9) {
        curRes = 32000;
      }
      if (quest == 14) {
        let resultat = document.getElementById('resultat');
        resultat.innerText = "";
        resultat.innerText = "Поздравляем Вы выиграли 1000000!!!";
        resultat.style.display = "block";
      }
      if (quest < 14) {
        --countSumWin;
        ++quest;
        nextQuest();
      }
    } else {
      this.style.backgroundColor = 'red';
      let resultat = document.getElementById('resultat');
      resultat.innerText = "";
      resultat.innerText = `Вы выиграли ${curRes}`;
      resultat.style.display = "block";
    }
  }, 2500)
}

function nextQuest() {
  setTimeout(() => {
    let li = document.querySelectorAll('#winnerSum li');
    let temp = countSumWin + 1;
    console.log("countSumWin", countSumWin);
    console.log("temp", temp);

    li[countSumWin].className = "choiceLi";
    li[temp].className = "";

    let resultat = document.getElementById('resultat');
    resultat.innerText = "";
    resultat.style.display = "none";

    if (checkFifty) {
      let fifty = document.querySelector('.fifty');
      fifty.addEventListener("click", fiftyfifty);
    }
    if (checkFriend) {
      let friend = document.querySelector('.friend');
      friend.addEventListener("click", callFriend);
    }
    if (checkZal) {
      let zal = document.querySelector('.zal');
      zal.addEventListener("click", helpZal);
    }

    let answer0 = document.getElementById('answer0');
    let answer1 = document.getElementById('answer1');
    let answer2 = document.getElementById('answer2');
    let answer3 = document.getElementById('answer3');

    answer0.style.display = '';
    answer1.style.display = '';
    answer2.style.display = '';
    answer3.style.display = '';

    answer0.addEventListener("click", choiceAnswer);
    answer1.addEventListener("click", choiceAnswer);
    answer2.addEventListener("click", choiceAnswer);
    answer3.addEventListener("click", choiceAnswer);

    answer0.addEventListener("mouseover", changeColor);
    answer1.addEventListener("mouseover", changeColor);
    answer2.addEventListener("mouseover", changeColor);
    answer3.addEventListener("mouseover", changeColor);

    answer0.addEventListener("mouseout", changeColorOut);
    answer1.addEventListener("mouseout", changeColorOut);
    answer2.addEventListener("mouseout", changeColorOut);
    answer3.addEventListener("mouseout", changeColorOut);

    let question = document.getElementById('question');
    question.innerText = arrQuestion[quest];

    answer0.innerText = variable[0] + arrAnswer[quest][`answer${0}`];
    answer1.innerText = variable[1] + arrAnswer[quest][`answer${1}`];
    answer2.innerText = variable[2] + arrAnswer[quest][`answer${2}`];
    answer3.innerText = variable[3] + arrAnswer[quest][`answer${3}`];
    answer0.style.backgroundColor = '#3b3b3b';
    answer1.style.backgroundColor = '#3b3b3b';
    answer2.style.backgroundColor = '#3b3b3b';
    answer3.style.backgroundColor = '#3b3b3b';
  }, 1500)
}

function changeColor() {
  this.style.backgroundColor = "#750075";
}

function changeColorOut() {
  this.style.backgroundColor = "#3b3b3b";
}
*/