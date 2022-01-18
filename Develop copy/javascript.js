var currentDayEl = document.getElementById('currentDay')


var buttonEl = document.querySelector('.saveBtn')
var nineEl = document.querySelector('#text9')
var tenEl = document.querySelector('#text10')
var elevenEl = document.querySelector('#text11')
var twelveEl = document.querySelector('#text12')
var oneEl = document.querySelector('#text1')
var twoEl = document.querySelector('#text2')
var threeEl = document.querySelector('#text3')
var fourEl = document.querySelector('#text4')
var eventDayEl = document.querySelector('.eventDay')

//loading page
let daysEvent = JSON.parse(localStorage.getItem("Day"))
//time
var hour = moment().format('HH');

//Current Day
currentDayEl.textContent = moment().format("dddd, MMMM Do")

//Btn event 
buttonEl.addEventListener('click', save)

//checking the time
localTime()

function localTime(){
    if(hour > 9){
        nineEl.setAttribute('style', 'background-color: grey')
        console.log("hello")
    }
    if(hour > 10){
        tenEl.setAttribute('style', 'background-color: grey')
    }
    if(hour > 11){
        elevenEl.setAttribute('style', 'background-color: grey')
    }
    if(hour > 12){
        twelveEl.setAttribute('style', 'background-color: grey')
    }
    if(hour > 13){
        oneEl.setAttribute('style', 'background-color: grey')
    }
    if(hour > 14){
        twoEl.setAttribute('style', 'background-color: grey')
    }
    if(hour > 15){
        threeEl.setAttribute('style', 'background-color: grey')
    }
    if(hour > 16){
        fourEl.setAttribute('style', 'background-color: grey')
    }
    //equals
    if(hour == 9){
        nineEl.setAttribute('style', 'background-color: red')
    }
    if(hour == 10){
        tenEl.setAttribute('style', 'background-color: red')
    }
    if(hour == 11){
        elevenEl.setAttribute('style', 'background-color: red')
    }
    if(hour == 12){
        twelveEl.setAttribute('style', 'background-color: red')
    }
    if(hour == 13){
        oneEl.setAttribute('style', 'background-color: red')
    }
    if(hour == 14){
        twoEl.setAttribute('style', 'background-color: red')
    }
    if(hour == 15){
        threeEl.setAttribute('style', 'background-color: red')
    }
    if(hour == 16){
        fourEl.setAttribute('style', 'background-color: red')
    }
    
    //if time passed
    if(hour < 10){
        nineEl.setAttribute('style', 'background-color: wheat')
    }
    if(hour < 11){
        nineEl.setAttribute('style', 'background-color: wheat')
    }
    if(hour < 12){
        nineEl.setAttribute('style', 'background-color: wheat')
    }
    if(hour < 13){
        nineEl.setAttribute('style', 'background-color: wheat')
    }
    if(hour < 14){
        nineEl.setAttribute('style', 'background-color: wheat')
    }
    if(hour < 15){
        nineEl.setAttribute('style', 'background-color: wheat')
    }
    if(hour < 16){
        nineEl.setAttribute('style', 'background-color: wheat')
    }
    
}
 function save(){
    
    localStorage.setItem("Day", JSON.stringify(eventDayEl))
    console.log("hello")
    alert("Saved")

 }

nineEl.innerHTML = localStorage.getItem("Day");
tenEl.innerHTML = localStorage.getItem("Day");
elevenEl.innerHTML = localStorage.getItem("Day");
twelveEl.innerHTML = localStorage.getItem("Day");
oneEl.innerHTML = localStorage.getItem("Day");
twoEl.innerHTML = localStorage.getItem("Day");
threeEl.innerHTML = localStorage.getItem("Day");
fourEl.innerHTML = localStorage.getItem("Day");

