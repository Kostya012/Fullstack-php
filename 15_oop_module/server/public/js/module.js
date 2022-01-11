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

function checkUser() {
  let url0 = "./checkuser.php";
  fetch(url0)
    .then(function (response) {
      return response.json();
    })
    .then(function (str) {
      console.log(str);
      let reg = document.getElementById("reg");
      let welcome = document.getElementById("welcome");
      let navbar = document.querySelector(".navbar");
      if (str === 1111 || str === 2222) {
        reg.style.display = "none";
        if (!welcome) {
          let li = document.createElement("li");
          li.className = "blog-nav";
          li.id = "welcome";
          let a = document.createElement("a");
          a.className = "blog-nav-item";
          let div1 = document.createElement("div");
          div1.className = "sign-in";
          let div2 = document.createElement("div");
          let button = document.createElement("button");
          button.addEventListener("click", quitUser);
          button.id = "quit";
          button.innerText = "Quit";
          div2.innerText = "Welcome User";
          div2.append(button);
          div1.append(div2);
          a.append(div1);
          li.append(a);
          navbar.append(li);
        }
      } else if (str === "quit") {
      } else {
        reg.style.display = "flex";
        if (welcome) {
          navbar.removeChild(welcome);
        }
      }
    });
}

checkUser();

function quitUser() {
  let url = "./quit.php";
  fetch(url)
    .then(function (response) {
      return response.json();
    })
    .then(function (str) {
      console.log(str);
      if (str === "quit") {
        checkUser();
      }
    });
}

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
  let borderSignUp = document.querySelector(".border-sign-up");
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
    setTimeout(() => (article.style.animationName = "slidein"), 1);
    green.innerText =
      "Проект Fullstack работа с файлами, БД, регистрация, авторизация";
    aboutMain.style.display = "block";
  } else if (this === information) {
    downloadinfo();
    information.className = "blog-nav-item active";
    article.innerText = "Information from DB, CSV, TXT";
    setTimeout(() => (article.style.animationName = "slidein"), 1);
    groupInfo.style.display = "flex";
  } else if (this === settings) {
    settings.className = "blog-nav-item active";
    article.innerText = "Settings DB, CSV, TXT";
    setTimeout(() => (article.style.animationName = "slidein"), 1);
    groupSet.style.display = "flex";
  } else if (this === signIn) {
    signIn.className = "blog-nav-item active";
    article.innerText = "Authorization";
    setTimeout(() => (article.style.animationName = "slidein"), 1);
    green.innerText = "Please Log in";
    aboutSignIn.style.display = "block";
    groupMain.style.display = "flex";
  } else if (this === signUp) {
    signUp.className = "blog-nav-item active";
    article.innerText = "Registration";
    borderSignUp.style.border = "2px solid #ddbe86";
    setTimeout(() => (article.style.animationName = "slidein"), 1);
    green.innerText = "Please Register";
    aboutSignUp.style.display = "block";
    groupMain.style.display = "flex";
  }
}

function downloadinfo() {
  let url1 = "./getinfo.php";
  // let url1 = "./getinfocsv.php";
  // let url2 = "./getinfotxt.php";
  // let url3 = "./getinfodb.php";
  let infoCsv = document.getElementById("infoCsv");
  infoCsv.innerText = "";
  let infoTxt = document.getElementById("infoTxt");
  infoTxt.innerText = "";
  let infoDb = document.getElementById("infoDb");
  infoDb.innerText = "";

  let objInfo1 = {
    action: "getinfocsv"
  };

  let objInfo2 = {
    action: "getinfotxt"
  };

  let objInfo3 = {
    action: "getinfodb"
  };


  async function getInform(url, obj) {
    try {
      const response = await fetch(url, {
        method: "POST", // or 'PUT'
        body: JSON.stringify(obj), // data can be 'string' or {object}!
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const json = await response.json();
      console.log("Успех getInform:", json);
      if ("getinfocsv" in json) {
        console.log("getinfocsv", json);
        let len = json.getinfocsv.length;
        let table = document.createElement("table");
        table.id = "info-table";
        table.className = "table";
        let thead = document.createElement("thead");
        table.append(thead);
        let tbody = document.createElement("tbody");

        for (let i = 0; i < len; i++) {
          let tr = document.createElement("tr");
          for (let j = 0; j < json.getinfocsv[i].length; j++) {
            let td = document.createElement("th");
            td.textContent = json.getinfocsv[i][j];
            tr.append(td);
            tbody.append(tr);
            table.append(tbody);
          }
        }
        infoCsv.append(table);
      } else if ("getinfotxt" in json) {
        infoTxt.innerHTML = json["getinfotxt"];
      } else if ("getinfodb" in json) {
        console.log(json);
        // infoDb.innerHTML = json["getinfodb"];
      } else if ("error" in json) {
        infoDb.innerHTML = json["error"];
      }
      // function next page
    } catch (error) {
      console.error("Ошибка:", error);
    }
  }
  getInform(url1, objInfo1);
  getInform(url1, objInfo2);
  getInform(url1, objInfo3);

}

send.addEventListener("click", login);

function login() {
  send.disabled = true;
  console.log("login Click :>> ");
  let url = "./login.php";
  let name = document.getElementById("name");
  let password = document.getElementById("password");
  let rememberMe = document.getElementById("rememberMe");
  let captcha = document.getElementById("captcha");

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
    captcha: captcha.value,
  };
  console.log("obj :>> ", obj);
}

send2.addEventListener("click", registr);

function registr() {
  send2.disabled = true;
  let url = "./registr.php";
  let name2 = document.getElementById("name2");
  let email = document.getElementById("email");
  let password1 = document.getElementById("password1");
  let password2 = document.getElementById("password2");
  let captcha2 = document.getElementById("captcha2");

  let errName2 = document.getElementById("errName2");
  errName2.innerText = "";
  let errEmail = document.getElementById("errEmail");
  errEmail.innerText = "";
  let errPassword1 = document.getElementById("errPassword1");
  errPassword1.innerText = "";
  let errPassword2 = document.getElementById("errPassword2");
  errPassword2.innerText = "";
  let errCaptcha2 = document.getElementById("errCaptcha2");
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
    captcha: captcha2.value,
  };
  console.log("obj2 :>> ", obj2);
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
    errorDb: errorDb.value,
  };
  console.log("objSet :>> ", objSet);
}

buttonSaveData.addEventListener("click", saveInf);

function saveInf() {
  buttonSaveData.disabled = true;
  let url = "saveinfo.php";
  let errorMessage = document.getElementById("errorMessage");
  errorMessage.innerText = "";
  let message = document.getElementById("message");
  let source = document.getElementById("source");
  let index = source.selectedIndex;

  console.log("index :>> ", index);

  let objInfo = {
    message: message.value,
    index: index,
  };

  console.log("objInfo :>> ", objInfo);

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
      if (typeof json === 'object') {
        if ("error" in json) {
          errorMessage.innerText = json.error;
        }
      }
      buttonSaveData.disabled = false;
      downloadinfo();
      // function next page
    } catch (error) {
      console.error("Ошибка:", error);
    }
  }
  sendData();
}
