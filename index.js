  


document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll(".drum");

    function handleEvents(event) {
        var key;
        if (event.type === "click") {
            key = this.innerHTML.toLowerCase();
        } else if (event.type === "keydown") {
            key = event.key.toLowerCase();
        }

        playSound(key);
        buttonAnimation(key);
    }

    // Loop to add click event listeners to all drum buttons
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", handleEvents);
    }

    // Add keydown event listener to the document
    document.addEventListener("keydown", handleEvents);

    function playSound(key) {
        var audioSrc;
        switch (key) {
            case 'w':
                audioSrc = "sounds/tom-1.mp3";
                break;
            case 'a':
                audioSrc = "sounds/tom-2.mp3";
                break;
            case 's':
                audioSrc = "sounds/tom-3.mp3";
                break;
            case 'd':
                audioSrc = "sounds/tom-4.mp3";
                break;
            case 'j':
                audioSrc = "sounds/snare.mp3";
                break;
            case 'k':
                audioSrc = "sounds/crash.mp3";
                break;
            case 'l':
                audioSrc = "sounds/kick-bass.mp3";
                break;
            default:
                return; // Exit the function if the key is not recognized
        }

        // Create a new audio object and set its source
        var audio = new Audio(audioSrc);
        audio.currentTime = 0;
        audio.play();
    }

    function buttonAnimation(Key) {
        var activeButton = document.querySelector("." + Key);
        if (activeButton) { // Check if the button exists
            activeButton.classList.add("pressed");
            setTimeout(function() { activeButton.classList.remove("pressed"); }, 100); // Remove the class after 100ms 
        } 
        else {
            console.error("No button found for key:", Key);
        }
    }
     
});
