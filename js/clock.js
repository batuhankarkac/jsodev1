 function askName() {
 let myName = prompt('Adınız nedir?') 
 let info = document.querySelector('#myName')
 info.innerHTML = `${myName}`
 }

 function showTime() {
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    let session = date.getDay();
if (session == 1)
    {
    session = "Pazartesi";
  } else if (session == 2) {
    session = "Salı";
  } else if (session == 3) {
    session = "Çarşamba";
  } else if (session == 4) {
    session = "Perşembe";
  } else if (session == 5) {
    session = "Cuma";
  } else if (session == 6) {
    session = "Cumartesi";
  } else if (session == 7) {
    session = "Pazar";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  let time = h + ":" + m + ":" + s + " " + session;
  document.querySelector("#myClock").innerText = time;
  document.querySelector("#myClock").textContent = time;

  setTimeout(showTime, 1000);
 }


askName();
showTime();
