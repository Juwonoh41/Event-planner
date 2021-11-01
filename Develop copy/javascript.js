var containerElement = document.querySelectorAll('#container')
var currentDayElement = document.getElementById('currentDay')
var timeBlockElement = document.getElementsByClassName('time-block')
var dayInputElement = document.getElementsById('dayInput1')



currentDayElement.textContent =  moment().format('MMMM Do YYYY')



