// let send = document.getElementById("send");

let checkbox = document.getElementById("checkbox");
let captch = document.getElementById("captch");
let checkLabel = document.getElementById("checkLabel");

let checkbox2 = document.getElementById("checkbox2");
let captch2 = document.getElementById("captch2");
let checkLabel2 = document.getElementById("checkLabel2");

/*
function checkFile(input) {
  let fileTypes = [
    "image/jpeg",
    "image/pjpeg",
    "image/png",
    "image/gif",
    "text/plain"
  ];
  let file1 = document.getElementById("file");
  let file = input.files[0];
  for (let i = 0; i < fileTypes.length; i++) {
    if (file.type === fileTypes[i]) {
      break;
    } else if (i === fileTypes.length - 1) {
      let errorFile = document.getElementById("errorFile");
      errorFile.textContent = "Not a valid file type";
      file1.value = "";
    }
  }
  if (file.type === fileTypes[4]) {
    if (file.size > 102400) {
      let errorFile = document.getElementById("errorFile");
      errorFile.textContent = "Not a valid file size, max 100 kB";
      file1.value = "";
    } else {
      let errorFile = document.getElementById("errorFile");
      errorFile.textContent = "";
    }
  }
}
*/

/*
function sendData() {
  // let name = document.getElementById("name");
  // let email = document.getElementById("email");
  // let message = document.getElementById("message");
  // let checkbox = document.getElementById("checkbox");

  let baseUrl = window.location.protocol + "//" + window.location.host;
  location.href = baseUrl + "/index.php";
}
*/

function clickCheck() {
  if (checkbox.checked) {
    captch.style.display = "block";
  } else {
    captch.style.display = "none";
  }
}

checkLabel.addEventListener("click", clickCheck);
checkbox.addEventListener("click", clickCheck);

function clickCheck2() {
  if (checkbox2.checked) {
    captch2.style.display = "block";
  } else {
    captch2.style.display = "none";
  }
}

checkLabel2.addEventListener("click", clickCheck2);
checkbox2.addEventListener("click", clickCheck2);
// send.addEventListener("click", sendData);


