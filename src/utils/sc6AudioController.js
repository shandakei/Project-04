class Sc6AudioDefault {
    constructor() {
      this.audio = new Audio('public/media/sc6_default_audio.mp3'); // Ensure the path is correct
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
          this.audio.volume = 1;
          clearInterval(fadeAudio);
        }
      }, 200);
    }
  
    setVolume(volume) {
      this.audio.volume = volume;
    }
  }
  
  const sc6AudioDefault = new Sc6AudioDefault();
  export default sc6AudioDefault;
  