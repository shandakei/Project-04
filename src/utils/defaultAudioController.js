class DefaultAudioController {
    constructor() {
      this.audio = new Audio('/media/default_audio.mp3'); // Ensure the path is correct
    }
  
    play() {
      this.audio.play();
    //   this.audio.volume = 1;
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
  }
  
  const defaultAudioController = new DefaultAudioController();
  export default defaultAudioController;
  