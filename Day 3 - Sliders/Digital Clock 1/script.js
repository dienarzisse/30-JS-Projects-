// Call functions periodically
setInterval(setTime, 1000);
setInterval(sepAnimation, 1000);

// Get the time elements
const currentSeconds = document.getElementById("sec");
const currentMinutes = document.getElementById("min");
const currentHours = document.getElementById("hour");
const currentDay = document.getElementById("day");
const currentDateFormat = document.getElementById("date-format");
const spanScale = document.getElementById("span-scale");
const sliderScale = document.getElementById("slider-scale");
const spanBlur = document.getElementById("span-blur");
const sliderBlur = document.getElementById("slider-blur");
const colorPicker = document.getElementById("favcolor");




function setTime(){
    const date = new Date();
    const sec = date.getSeconds(), min = date.getMinutes(), hours = date.getHours(), day = date.getDay(),
    month = date.getMonth(), year = date.getFullYear(), crdDate = date.getDate();
    currentSeconds.innerHTML = sec < 10 ? '0' + sec : sec;
    currentMinutes.innerHTML = min  < 10 ? '0' + min : min;
    currentHours.innerHTML = hours;
    currentDay.innerHTML = dayWeek(day);
    currentDateFormat.innerHTML = `${crdDate}\\ ${month + 1} \\ ${year.toString().substr(-2)}`;

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


sliderScale.oninput = ( () => {
    let value = sliderScale.value;
    spanScale.innerHTML = value;
    spanScale.style.left = value  + '%';
    spanScale.classList.add("show");
    document.documentElement.style.setProperty('--clock-scale', `${1 + value / 100}`);
});

sliderScale.onblur = (()=>{
    spanScale.classList.remove("show");
  });

sliderBlur.oninput = ( () => {
let value = sliderBlur.value;
spanBlur.innerHTML = value;
spanBlur.style.left = value  + '%';
spanBlur.classList.add("show");
document.documentElement.style.setProperty('--clock-blur', `${value/15}px`);
});

sliderBlur.onblur = (()=>{
    spanBlur.classList.remove("show");
});

colorPicker.oninput = ( () => {
    let value = colorPicker.value;
    document.documentElement.style.setProperty('--clock-background', `${value}`);
});


setTime();

