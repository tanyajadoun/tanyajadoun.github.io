let hrs=document.querySelector("#hrs");
let min=document.querySelector("#min");
let sec=document.querySelector("#sec");

//to get the date and time we need to use the date object of javascript
// let time=new Date();
// console.log(time); -> this will give the current  time and date 
// console.log(time.getHours());
// console.log(time.getMinutes());
// console.log(time.getSeconds());



// to update the time after every minutes or second we will use set interval
setInterval(function() {
    let time=new Date();
    hrs.innerHTML=(time.getHours()<10?"0":"") +time.getHours();
    min.innerHTML=(time.getMinutes()<10?"0":"")+time.getMinutes();
    sec.innerHTML=(time.getSeconds()<10?"0":"")+time.getSeconds();
},1000)





