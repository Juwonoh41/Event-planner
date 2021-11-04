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


//Current Day
currentDayEl.textContent = moment().format("dddd, MMMM Do")

//Btn event 
buttonEl.addEventListener('click', save())
//checking the time

function localTime(){
    if(hour > 9){
        nineEl.setAttribute('style', 'background-color: grey')
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
}
function save(e){
    e.preventDefault()
    localStorage.setItem("Day", dayInputEl)

}




