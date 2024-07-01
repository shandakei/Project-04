class Ss3AudioController {
    constructor() {
        this.audio = new Audio('/media/s3_drama_audio.mp3'); // Ensure the path is correct
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

    setVolume(volume) {
        this.audio.volume = volume;
    }
}

const ss3AudioController = new Ss3AudioController();
export default ss3AudioController;
