class CreditsAudioController {
  constructor() {
    this.audio = new Audio('/public/media/credits_audio.mp3'); // Ensure the path is correct
  }

  play() {
    this.audio.volume = 0.5;
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
        this.audio.volume = 1;
        clearInterval(fadeAudio);
      }
    }, 200);
  }

  setVolume(volume) {
    this.audio.volume = volume;
  }
}

const creditsAudioController = new CreditsAudioController();
export default creditsAudioController;
