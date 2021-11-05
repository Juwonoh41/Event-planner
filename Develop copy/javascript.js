var currentDayEl = document.getElementById('currentDay')


var buttonEl = document.querySelector('.saveBtn')
var hour = moment().hours();
var nineEl = document.querySelector('#text9')
var tenEl = document.querySelector('#text10')
var elevenEl = document.querySelector('#text11')
var twelveEl = document.querySelector('#text12')
var oneEl = document.querySelector('#text1')
var twoEl = document.querySelector('#text2')
var threeEl = document.querySelector('#text3')
var fourEl = document.querySelector('#text4')
var eventDayEl = document.querySelector('.eventDay')


//Current Day
currentDayEl.textContent = moment().format("dddd, MMMM Do")

//Btn event 
// buttonEl.addEventListener('click', save())
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
    if(hour > 1){
        oneEl.setAttribute('style', 'background-color: grey')
    }
    if(hour > 2){
        twoEl.setAttribute('style', 'background-color: grey')
    }
    if(hour > 3){
        threeEl.setAttribute('style', 'background-color: grey')
    }
    if(hour > 4){
        fourEl.setAttribute('style', 'background-color: grey')
    }
    //equals
    if(hour == 9){
        nineEl.setAttribute('style', 'background-color: red')
    }
    if(hour == 10){
        nineEl.setAttribute('style', 'background-color: red')
    }
    if(hour == 11){
        nineEl.setAttribute('style', 'background-color: red')
    }
    if(hour == 12){
        nineEl.setAttribute('style', 'background-color: red')
    }
    if(hour == 1){
        nineEl.setAttribute('style', 'background-color: red')
    }
    if(hour == 2){
        nineEl.setAttribute('style', 'background-color: red')
    }
    if(hour == 3){
        nineEl.setAttribute('style', 'background-color: red')
    }
    if(hour == 4){
        nineEl.setAttribute('style', 'background-color: red')
    }

}
 function save(e){
    e.preventDefault()
    localStorage.setItem("Day", dayInputEl)

 }




