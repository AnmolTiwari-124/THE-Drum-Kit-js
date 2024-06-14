document.addEventListener("DOMContentLoaded", function() {
    // Select all buttons with the class 'drum'
    var buttons = document.querySelectorAll(".drum");

    // Loop through each button using a for loop
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function() {
            // Get the class name (which corresponds to the key) from the button
            var key = this.classList[0];
            // we can use innerhtml instead of this.class[0];
            // like this var buttonhtml  = this.innerhtml 
            // and then pass the value of innerhtml in the switch statement 


            // Use a switch statement to get the corresponding audio file
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

            // Reset audio playback and play the sound
            audio.currentTime = 0;
            audio.play();
        });
    }
});

document.addEventListener("keydown", function(event) {
    // Use a switch statement to get the corresponding audio file
    // 
    var audioSrc;
    switch (event.key) {
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

    // Reset audio playback and play the sound
    audio.currentTime = 0;
    audio.play();
});

