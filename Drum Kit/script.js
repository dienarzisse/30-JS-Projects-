// Global variables
let dur = 0;

// Play sound from the "Sounds" folder
function PlaySound(melody) {
    var snd = new Audio("Sounds/" + melody + ".mp3");
    snd.onloadedmetadata = function() {
         dur = 1000* snd.duration / 2 ;
       
    };
    snd.volume = 0.3;
    snd.play();


    snd.onended = function(){
        this.currentSrc = null;
        this.src = "";
        this.srcObject = null;
        this.remove();
    };
    
    
}



// Add event listener on keydown
document.addEventListener('keydown', (event) => {
    var name = event.key;
    var code = event.code;


    if(event.code == 'KeyA')
       { 
        PlaySound("a");
        var key = document.getElementById("A");
        key.focus();
        setTimeout(function() {
            key.blur();
          }, dur);
       }


    if(event.code == 'KeyS')
    { 
        PlaySound("b");
        var key = document.getElementById("S");
        key.focus();
        setTimeout(function() {
            key.blur();
          }, dur);
       }

    if(event.code == 'KeyD')
    { 
        PlaySound("c");
        var key = document.getElementById("D");
        key.focus();
        setTimeout(function() {
            key.blur();
          }, dur);
       }

    if(event.code == 'KeyF')
    { 
        PlaySound("d");
        var key = document.getElementById("F");
        key.focus();
        setTimeout(function() {
            key.blur();
          }, dur);
       }

    if(event.code == 'KeyJ')
    { 
        PlaySound("e");
        var key = document.getElementById("J");
        key.focus();
        setTimeout(function() {
            key.blur();
          }, dur);
       }

    if(event.code == 'KeyK')
    { 
        PlaySound("f");
        var key = document.getElementById("K");
        key.focus();
        setTimeout(function() {
            key.blur();
          }, dur);
       }
    if(event.code == 'KeyL')
    { 
        PlaySound("g");
        var key = document.getElementById("L");
        key.focus();
        setTimeout(function() {
            key.blur();
          }, dur);
       }

  }, false);

  