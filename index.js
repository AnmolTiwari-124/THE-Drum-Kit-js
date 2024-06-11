

document.addEventListener("DOMContentLoaded", function() {
    // Create an object that maps each button class to its corresponding audio file
    const audioFiles = {
        w: "sounds/tom-1.mp3",
        a: "sounds/tom-2.mp3",
        s: "sounds/tom-3.mp3",
        d: "sounds/tom-4.mp3",
        j: "sounds/snare.mp3",
        k: "sounds/crash.mp3",
        l: "sounds/kick-bass.mp3"
    };
    // Select all buttons with the class 'drum'
    var buttons = document.querySelectorAll(".drum");

    // Loop through each button using a for loop
    for (var i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", function() {
            // Get the class name (which corresponds to the key) from the button
            var key = this.classList[0];

            // Get the corresponding audio file from the audioFiles object
            var audioSrc = audioFiles[key];

            // Create a new audio object and set its source
            var audio = new Audio(audioSrc);


            audio.currentTime = 0;
            // Play the audio
            audio.play();
        });
    }
});
