// let endYear = new Date("Oct 29, 2021 00:00:00").getTime();
// let counter = setInterval(() => {
//   let dateNow = new Date().getTime();
//   let dataDiffernce = endYear - dateNow;
//   let day = Math.floor(dataDiffernce / (1000 * 60 * 60 * 24));
//   document.querySelector("#days").innerHTML = day < 10 ? `0${day}` : day;
//   let hour = Math.floor((dataDiffernce % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   document.querySelector("#hours").innerHTML = hour < 10 ? `0${hour}` : hour;
//   let minute = Math.floor((dataDiffernce % (1000 * 60 * 60)) / (1000 * 60));
//   document.querySelector("#minutes").innerHTML = minute < 10 ? `0${minute}` : minute;
//   let second = Math.floor((dataDiffernce % (1000 * 60)) / 1000);
//   document.querySelector("#seconds").innerHTML = second < 10 ? `0${second}` : second;
//   if ((dataDiffernce < 0)) {
//     clearInterval(counter);
//     document.querySelector(".counter__container").innerHTML = `<div style="color: #f00; font-size: 36px;">Event expired!</div>`;
//   }
// }, 1000);

let endYear = new Date().getFullYear();
console.log(endYear);
let endOfYear = new Date(`Dec 31, ${endYear} 23:59:59`);
let counter = setInterval(() => {
  let dateNow = new Date().getTime();
  let diff = endOfYear - dateNow;
  let days  = Math.floor(diff / (1000 * 60 * 60 * 24));
  document.querySelector("#days").innerHTML = days < 10 ? `0${days}` : days;
  let hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  document.querySelector("#hours").innerHTML = hours < 10 ? `0${hours}` : hours;
  let minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
  document.querySelector("#minutes").innerHTML = minutes < 10 ? `0${minutes}` : minutes;
  let seconds = Math.floor((diff % (1000 * 60)) / (1000));
  document.querySelector("#seconds").innerHTML = seconds < 10 ? `0${seconds}` : seconds;
}, 1000);