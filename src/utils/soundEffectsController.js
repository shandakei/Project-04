class SoundEffectController {
  constructor() {
    this.sounds = {
      DT: {},
      girl: {
        gasp1: new Audio('/soundeffects/gasp_1-girl.wav'),
        gasp2: new Audio('/soundeffects/gasp_2-girl.wav'),
        helpMe1: new Audio('/soundeffects/help_me-girl.wav'),
        hurt1: new Audio('/soundeffects/hurt_1-girl.wav'),
        scream1: new Audio('/soundeffects/scream_1-girl.wav'),
        scream2: new Audio('/soundeffects/scream_2-girl.wav'),
        scream3: new Audio('/soundeffects/scream_3-girl.wav'),
        scream4: new Audio('/soundeffects/scream_4-girl.wav'),
        whimper: new Audio('/soundeffects/whimper_1-girl.wav'),
      },
      boy: {
        grunt1: new Audio('/soundeffects/grunt_1-boy.wav'),
        grunt2: new Audio('/soundeffects/grunt_2-boy.wav'),
        grunt3: new Audio('/soundeffects/grunt_3-boy.wav'),
        helpMe1: new Audio('/soundeffects/help_me-girl.wav'),
        hurt1: new Audio('/soundeffects/hurt_1-boy.wav'),
        sigh1: new Audio('/soundeffects/sigh_1-boy.wav'),
        sigh2: new Audio('/soundeffects/sigh_2-boy.wav'),
        sigh3: new Audio('/soundeffects/sigh_3-boy.wav'),
      },
      zombie: {
        breath: new Audio('/soundeffects/breath_1-zom.wav'),
        croak: new Audio('/soundeffects/croak_1-zom.wav'),
        snarl1: new Audio('/soundeffects/snarl_1-zom.wav'),
        snarl2: new Audio('/soundeffects/snarl_2-zom.wav'),
        snarl3: new Audio('/soundeffects/snarl_3-zom.wav'),
        snarl4: new Audio('/soundeffects/snarl_4-zom.wav'),
        snarl5: new Audio('/soundeffects/snarl_5-zom.wav'),
        distantRoar1: new Audio('/soundeffects/distant_roar_1-zom.wav'),
        distantRoar2: new Audio('/soundeffects/distant_roar_2-zom.wav'),
        distantScream1: new Audio('/soundeffects/distant_scream_1-zom.wav'),
        eating1: new Audio('/soundeffects/eating_1-zom.wav'),
        eating2: new Audio('/soundeffects/eating_2-zom.wav'),
        growl1: new Audio('/soundeffects/growl_1-zom.wav'),
        growl2: new Audio('/soundeffects/growl_2-zom.wav'),
        roar1: new Audio('/soundeffects/roar_1-zom.wav'),
        roar2: new Audio('/soundeffects/roar_2-zom.wav'),
        splat1: new Audio('/soundeffects/splat_1-zom.wav'),
      },
      env: {
        breakingGlass1: new Audio('/soundeffects/breaking_glass_1.wav'),
        breakingGlass2: new Audio('/soundeffects/breaking_glass_2.wav'),
        distantBoom: new Audio('/soundeffects/distant_boom_1.wav'),
        footsteps1: new Audio('/soundeffects/footsteps_snow_1.wav'),
        running1: new Audio('/soundeffects/running_1.wav'),
        running2: new Audio('/soundeffects/running_2.wav'),
        runningFade1: new Audio('/soundeffects/running_fade_1.wav'),
        misc1: new Audio('/soundeffects/misc_noise_1.wav'),
      },
    };

    
    Object.values(this.sounds).forEach(category => {
      Object.values(category).forEach(audio => {
        audio.load();
      });
    });

    this.playingSounds = {};
  }

  play(category, sound) {
    if (this.sounds[category] && this.sounds[category][sound]) {
      const audio = this.sounds[category][sound];
      audio.currentTime = 0;
      audio.play().catch(error => {
        console.error(`Error playing sound: ${sound} for category: ${category}`, error);
      });
      this.playingSounds[`${category}-${sound}`] = audio;
    } else {
      console.error(`Effect ${sound} for ${category} error`);
    }
  }

  stop(category, sound) {
    if (this.playingSounds[`${category}-${sound}`]) {
      const audio = this.playingSounds[`${category}-${sound}`];
      audio.pause();
      audio.currentTime = 0; 
      delete this.playingSounds[`${category}-${sound}`];
    } else {
      console.error(`Effect ${sound} for ${category} error`);
    }
  }

  fadeOut(category, sound) {
    if (this.playingSounds[`${category}-${sound}`]) {
      const audio = this.playingSounds[`${category}-${sound}`];
      let fadeAudio = setInterval(() => {
        if (audio.volume > 0.05) {
          audio.volume -= 0.05;
        } else {
          audio.pause();
          audio.volume = 1;
          clearInterval(fadeAudio);
          delete this.playingSounds[`${category}-${sound}`];
        }
      }, 200);
    } else {
      console.error(`Effect ${sound} for ${category} error`);
    }
  }
}

export default SoundEffectController;
