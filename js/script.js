//select a paragraph & button 
var tripInfoButton = document.querySelector(".trip-info");
var dailyBudget = document.querySelector(".daily-budget");

//write a function to get user input
var tripInfo = function () {
    var totalBudget = Number(prompt('What is the todal budget?'));
    var accommodation = Number(prompt('What are your accomomodation costs?'));
    var numDays = Number(prompt('How many days does your trip last?'));

    //call the function 
    calcuateDailyBudget(totalBudget, accommodation, numDays);
};

//write a function to calcuate your daily budget
var calcuateDailyBudget = function (totalBudget, accommodation, numDays) {
    var daily = ((totalBudget - accommodation) / numDays).toFixed(2);
    dailyBudget.innerText = `You can spend $${daily} a day on food and fun!`;
};

//add a click event
tripInfoButton.addEventListener("click", tripInfo);