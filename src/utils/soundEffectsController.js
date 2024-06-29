// SoundEffectController.js
class SoundEffectController {
  constructor() {
    this.sounds = {
      DT: {
        grunt: new Audio('/media/DT_grunt.mp3'),
        grunt2: new Audio('/media/DT_grunt2.mp3'),
        run: new Audio('/media/DT_run.mp3')
      },
      girl: {
        run: new Audio('/media/Ange_run.mp3'),
        scream: new Audio('/media/Ange_scream.mp3'),
        grunt: new Audio('/media/Ange_grunt.mp3'),
        gasp: new Audio('/media/Ange_gasp.mp3')
      },
      zombie: {
        shuffle: new Audio('/media/zombie_shuffle.mp3'),
        groan1: new Audio('/media/zombie_groan1.mp3'),
        groan2: new Audio('/media/zombie_groan2.mp3'),
        roar: new Audio('/media/zombie_roar.mp3'),
        roar2: new Audio('/media/zombie_roar2.mp3')
      },
      environment: {
        thunder: new Audio('/media/thunder.mp3'),
        wind: new Audio('/media/wind.mp3'),
        footsteps: new Audio('/media/footsteps.mp3')
      }
    };
  }

  play(category, sound) {
    if (this.sounds[category] && this.sounds[category][sound]) {
      this.sounds[category][sound].play();
    } else {
      console.error(`Sound ${sound} for category ${category} not found`);
    }
  }

  stop(category, sound) {
    if (this.sounds[category] && this.sounds[category][sound]) {
      this.sounds[category][sound].pause();
      this.sounds[category][sound].currentTime = 0; // Reset to start
    } else {
      console.error(`Sound ${sound} for category ${category} not found`);
    }
  }

  fadeOut(category, sound) {
    if (this.sounds[category] && this.sounds[category][sound]) {
      let audio = this.sounds[category][sound];
      let fadeAudio = setInterval(() => {
        if (audio.volume > 0.05) {
          audio.volume -= 0.05;
        } else {
          audio.pause();
          audio.volume = 1;
          clearInterval(fadeAudio);
        }
      }, 200);
    } else {
      console.error(`Sound ${sound} for category ${category} not found`);
    }
  }
}

const soundEffectController = new SoundEffectController();
export default soundEffectController;
