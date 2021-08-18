// Call functions periodically
setInterval(setTime, 1000);
setInterval(sepAnimation, 1000);

// Get the time elements
const currentSeconds = document.getElementById("sec");
const currentMinutes = document.getElementById("min");
const currentHours = document.getElementById("hour");
const currentDay = document.getElementById("day");
const currentDateFormat = document.getElementById("date-format");
const separator = document.getElementById("separator");


function setTime(){
    const date = new Date();
    const sec = date.getSeconds(), min = date.getMinutes(), hours = date.getHours(), day = date.getDay(),
    month = date.getMonth(), year = date.getFullYear(), curDay = date.getDate();
    currentSeconds.innerHTML = sec < 10 ? '0' + sec : sec;
    currentMinutes.innerHTML = min  < 10 ? '0' + min : min;
    currentHours.innerHTML = hours  ;
    currentDay.innerHTML = dayWeek(day);
    currentDateFormat.innerHTML = `${curDay}\\ ${month + 1} \\ ${year.toString().substr(-2)}`;

}


function dayWeek(day)
{
    switch (day) {
        case 0:
          return "Sun";
        case 1:
            return"Mon";
        case 2:
            return "Tues";

        case 3:
            return "Wed";

        case 4:
            return"Thurs";

        case 5:
            return "Fri";

        case 6:
          return "Sat";
      }
}  

function sepAnimation()
{
    if(separator.style.opacity != 0)
        separator.style.opacity = 0;
    else
        separator.style.opacity = 1;

}

console.log(separator)
setTime();