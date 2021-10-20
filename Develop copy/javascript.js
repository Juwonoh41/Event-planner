var containerElement = document.querySelectorAll('#container')
var currentDayElement = document.getElementById('currentDay')
var timeBlockElement = document.getElementsByClassName('time-block')
var dayInputElement = document.getElementsById('dayInput1')
currentDayElement.textContent =  moment().format('MMMM Do YYYY')


$( function() {
    $( "#container" ).selectable();
  } );

function checkTime(){
    var currentTime = moment().format('LT');  
    
    if(timeBlockElement < currentTime ){
        timeBlockElement.appendChild('Hi')
    }
}

function timeblock(){

}
