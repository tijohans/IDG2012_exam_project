// Overlay is the overlay itself
const overlay = document.querySelector('.mobile__overlay');

// Overlay toggle is the button to toggle the overlay
const overLayToggle = document.querySelector('.mobile__header__menu--button');


// Listeing for button click, when listening for click on a button, it also registers keyboard presses, space and enter
overLayToggle.addEventListener('click', () => {

    // Checking if the menu is opened by the aria attribute
    const isOpened = overLayToggle.getAttribute('aria-expanded') === 'true';

    // Opening or closing the menu based on the aria label
    isOpened ? closeMenu() : openMenu();
})

// Function for opening menu, setting the aria-expanded and the data-state to signify that it is open
const openMenu = _ => {
    overLayToggle.setAttribute('aria-expanded', 'true');
    overlay.setAttribute('data-state', 'opened');
}

/*
    Function for closing the menu
    setting the aria-expanded to false, but the data state to closing.
    This is because if I set the display to none, the animation will not show.
    Therefore I listen for the animationend, and then when the closing animation is done, the data-state is closed

    The CSS is acting based on the data-state and the aria attributes aswell
*/
const closeMenu = _ => {
    overLayToggle.setAttribute('aria-expanded', 'false');

    // Intermediate step between open and closed to let animation run
    overlay.setAttribute('data-state', 'closing');

    // Listening for animation to end
    overlay.addEventListener('animationend', () => {
        overlay.setAttribute('data-state', 'closed');
    }, { once: true })
}


// ------ Media Controls -------

// Getting all the buttons to be used for the controls
const playPauseButton = document.querySelector('.playpause');
const stopButton = document.querySelector('.stop');
const rewindButton = document.querySelector('.rewind');
const forwardButton = document.querySelector('.forward');

const captionsButton = document.querySelector('.captions');
const transcriptionButton = document.querySelector('.transcription');
const transcriptions = document.querySelector('.recipe__transcriptions');

const timeLabel = document.querySelector('.time');
const media = document.querySelector('.media');

media.removeAttribute("controls");

playPauseButton.addEventListener('click', () => {
    if (media.paused) {
        media.play();
        playPauseButton.textContent = "Pause";
    } else {
        media.pause();
        playPauseButton.textContent = "Play";
    }
})

stopButton.addEventListener('click', () => {
    media.pause();
    media.currentTime = 0;
    playPauseButton.textContent = "Play";
})

rewindButton.addEventListener('click', () => {
    media.currentTime -= 3;
})

forwardButton.addEventListener('click', () => {
    media.currentTime += 3;
    if (media.currentTime >= media.duration || media.paused) {
        media.pause();
        media.currentTime = 0;
        playPauseButton.textContent = "Play";
    }
})

media.addEventListener('timeupdate', () => {
    const minutes = Math.floor(media.currentTime / 60);
    const seconds = Math.floor(media.currentTime - minutes * 60);
    const minuteValue = minutes < 10 ? `0${minutes}` : minutes;
    const secondValue = seconds < 10 ? `0${seconds}` : seconds;

    const mediaTime = `${minuteValue}:${secondValue}`;
    timeLabel.textContent = mediaTime;
})


if(captionsButton) {
    captionsButton.addEventListener('click', () => {
        const track = media.textTracks && media.textTracks[0]
        if (track.mode == 'showing') {
            track.mode = "hidden";
        } else {
            track.mode = "showing"
        }
    })
}
    
if(transcriptionButton){
    transcriptionButton.addEventListener('click', () => {
        if(transcriptions.style.display == "none") {
            transcriptions.style.display = "block";
        } else {
            transcriptions.style.display = "none";
        }
    })
}