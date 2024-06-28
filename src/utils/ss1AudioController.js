class Ss1AudioController {
    constructor() {
        this.audio = new Audio('/media/slideshow1audio1.mp3'); // Ensure the path is correct
    }

    play() {
        this.audio.play();
    }

    pause() {
        this.audio.pause();
    }

    fadeOut() {
        let fadeAudio = setInterval(() => {
            if (this.audio.volume > 0.05) {
                this.audio.volume -= 0.05;
            } else {
                this.pause();
                this.audio.volume = 1; // Reset the volume after pausing
                clearInterval(fadeAudio);
            }
        }, 200);
    }
}

const ss1AudioController = new Ss1AudioController();
export default ss1AudioController;
