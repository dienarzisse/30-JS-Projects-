setInterval(setTime, 1000);


const sec = document.getElementById("second");
const min = document.getElementById("minute");
const hour = document.getElementById("hour");

function setTime(){
    const date = new Date();
    const currentSec = date.getSeconds()
    const currentMin = date.getMinutes()
    const currentHour = date.getHours()

    setRotation(sec, currentSec / 60)
    setRotation(min, (currentSec / 60 + currentMin) / 60)
    setRotation(hour, (currentMin / 60 + currentHour) / 12)

}

function setRotation(element, rotationRatio)
{
    element.style.setProperty('--rotation', rotationRatio * 360)
}

setTime();