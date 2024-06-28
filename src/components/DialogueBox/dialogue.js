import cycleCutsceneOne from "../cutscenes/cutscene1_1.jsx";

export const dialogues = [
    { id: 1, scene: 1, text: "... ", next: 2 },
    { id: 2, scene: 1, text: "(snow continues falling...)", next: 3 },
    { id: 3, scene: 1, text: "...", next: 4},
    { id: 4, scene: 1, text: "*Hahhhh...*", next: 5 },
    { id: 5, scene: 1, text: "*crunch*...*crunch*...*crunch*..", next: 6 },
    { id: 6, scene: 1, text: "(snow intensifies)", next: 7 },
    { id: 7, scene: 1, text: "Haa..this cold...", next: 8 },
    { id: 8, scene: 1, text: "...", next: 9 },
    { id: 9, scene: 1, text: "Must keep going...", next: 10 },
    { id: 10, scene: 1, text: "*crunch*...*crunch*...", next: 11 },
    { id: 11, scene: 1, text: "... Xiao'Er..", action: 'fadeOut', next: 12 },
    {
        id: 12,
        scene: 1,
        text: "I have to keep moving. But it'll be night soon..",
        choices: [
            { id: 1, scene: 1, text: "Keep going", next: 13 },
            { id: 2, scene: 1, text: "Find shelter", next: 14 }
        ]
    },
    { id: 13, scene: 1, text: "I should push a little longer..he's waiting for me..", action: 'fadeOut', next: 15 },
    { id: 14, scene: 1, text: "I have no choice.. wait for me..", action: 'fadeOut', next: 15 }, // -> /scene2


    { id: 15, scene: 2, text: "zzz..", next: 16 },
    { id: 16, scene: 2, text: "...", next: 17 },
    { id: 17, scene: 2, text: "zzz..", next: 18 },
    { id: 18, scene: 2, text: "...", next: 19 },
    { id: 19, scene: 2, text: "rrr..", next: 20 },
    { id: 20, scene: 2, text: "...", next: 21 },
    { id: 21, scene: 2, text: ".!..", next: 22 },
    { id: 22, scene: 2, text: "rrr...rR! *thud*", next: 23 },
    { id: 23, scene: 2, text: "...", next: 24 },
    { id: 24, scene: 2, text: "...", next: 25 },
    { id: 25, scene: 2, text: "rrr...", next: 26 },
    {
        id: 26,
        scene: 2,
        text: "",
        choices: [
            { id: 3, scene: 2, text: "remain silent", next: 27 },
            { id: 4, scene: 2, text: "turn on light", next: 34 },
            { id: 5, scene: 2, text: "look outside", next: 35 }
        ]
    },
    { id: 27, scene: 2, text: "....", next: 28 },
    { id: 28, scene: 2, text: "*shuffling noises get quieter*", next: 29 },
    { id: 29, scene: 2, text: "*you hold your breath*", next: 30 },
    { id: 30, scene: 2, text: "...", next: 31 },
    { id: 31, scene: 2, text: "...", next: 32 },
    { id: 32, scene: 2, text: "...", next: 33 },
    { id: 33, scene: 2, text: "...", next: 43 }, 
    { id: 34, scene: 2, text: "You turn on the light and nothing happens.", next: 26 }, // Loop back to initial choice
    { id: 35, scene: 2, text: "Rrah..?", next: 36 },
    { id: 36, scene: 2, text: "RRRAAAAAAHHHHHHHHH!!!", next: 37 },
    {
        id: 37, scene: 2, text: "DAMMIT!",
        choices: [
            { id: 6, scene: 2, text: "run", next: 38 },
            { id: 7, scene: 2, text: "fight", next: 45 }
        ]
    },
    { id: 38, scene: 2, text: "shit!", next: 39 },
    { id: 39, scene: 2, text: "*you grab your bag and run out into the street*", next: 40 },
    { id: 40, scene: 2, text: "Haaa huh haa! huh haa!", next: 41 },
    { id: 41, scene: 2, text: "...raaahh!...", next: 42 },
    { id: 42, scene: 2, text: "...", next: 43 },
    { id: 43, scene: 2, text: "haahhh dammit...every night...", next: '' }, // -> cutscene_1
    { id: 45, scene: 2, text: "Gah!!", next: 46 },
    { id: 46, scene: 2, text: "NOO!!", next: 47 },
    { id: 47, scene: 2, text: "...", next: 48 },
    { id: 48, scene: 2, text: "...you failed to survive..", next: 16 },

    { id: 49, scene: 'cutscene_1', text: "...", next: 50 },
    { id: 50, scene: 'cutscene_1', text: "This world...", next: 51 },
    { id: 51, scene: 'cutscene_1', text: "Is broken...", next: 52 },
    { id: 52, scene: 'cutscene_1', text: "How many years have passed since the fall of civilization", next: 53 },
    { id: 53, scene: 'cutscene_1', text: "Where once there was light and sound", next: 54 },
    { id: 54, scene: 'cutscene_1', text: "Exists only the dark and quiet", next: 55 },
    { id: 55, scene: 'cutscene_1', text: "And fear..", next: 56 },
    { id: 56, scene: 'cutscene_1', text: "The hubris of humanity has always defined its' destiny", next: 57 },
    { id: 57, scene: 'cutscene_1', text: "Everyone knew it would one day bring about destruction", next: 58 },
    { id: 58, scene: 'cutscene_1', text: "...", next: 59 },
    { id: 59, scene: 'cutscene_1', text: "And it did", next: 60 },

    //Slideshow1 -------------------------------------------------

    { id: 60, scene: 'cutscene_1_2', text: "We found out that day", next: 61 },
    { id: 61, scene: 'cutscene_1_2', text: "That we were never meant to touch the realm of God", next: 62 },
    { id: 62, scene: 'cutscene_1_2', text: "Our hands scorched the skies black", next: 63 },
    { id: 63, scene: 'cutscene_1_2', text: "Sacrificing this world to the darkness", next: 64 },
    { id: 64, scene: 'cutscene_1_2', text: "That had slept so peacefully for so long..", next: 65 },


    { id: 65, scene: 3, text: "...", next: 66 },
    { id: 66, scene: 3, text: "...", next: 67 },
    { id: 67, scene: 3, text: "Will I ever be able to sleep again?", next: 68 },
    { id: 68, scene: 3, text: "I can't even remember what it feels like", next: 69 },
    {
        id: 69, 
        scene: 3, 
        text: "What should I do next?",
        choices: [
            { id: 1, scene: 3, text: "Keep walking", next: 70 },
            { id: 2, scene: 3, text: "Have a rest", next: 71 },
            { id: 3, scene: 3, text: "Check your bag", next: 74 }
        ]
    },
    { id: 70, scene: 3, text: "*you keep walking*", next: 78 }, 
    { id: 71, scene: 3, text: "*you sit down on some nearby rubble and take in your surroundings*", next: 72 },
    { id: 72, scene: 3, text: "Everything seems quiet", next: 73 },
    { id: 73, scene: 3, text: "...", next: 76 },
    { id: 74, scene: 3, text: "*inside the bag are a few cans of rations, a blanket, a rope and an old solar powered phone*", next: 75 },
    { id: 75, scene: 3, text: "...thought I had more food left..", next: 76 },
    { id: 76, scene: 3, text: "I better keep going", next: 78 },
    { id: 78, scene: 3, text: "I must be getting closer by now...right?", next: 79 },
    { id: 79, scene: 3, text: "Why did I ever decide to leave..", next: 80 },
    { id: 80, scene: 3, text: "I never even liked business trips..", next: 81 },
    { id: 81, scene: 3, text: "...", next: 82 },
    { id: 82, scene: 3, text: "...", next: 83 },
    { id: 83, scene: 3, text: "..fucking Sydney..", next: 84 },
    {
        id: 84, 
        scene: 3, 
        text: "What now?",
        choices: [
            { id: 4, scene: 3, text: "Keep walking", next: 85 },
            { id: 5, scene: 3, text: "Look for supplies", next: 86 }
        ]
    },
    { id: 85, scene: 3, text: "*you keep walking*", next: 95 }, // Link back to later part of dialogue
    { id: 86, scene: 3, text: "*you see an abandoned car nearby*", next: 87 },
    {
        id: 87, 
        scene: 3, 
        text: "What should I do?",
        choices: [
            { id: 6, scene: 3, text: "Approach the car", next: 88 },
            { id: 7, scene: 3, text: "Go around the car", next: 94 }
        ]
    },
    { id: 88, scene: 3, text: "*you approach the car*", next: 89 },
    { id: 89, scene: 3, text: "Seems alright..", next: 90 },
    { id: 90, scene: 3, text: "*inside the car are various broken objects*", next: 91 },
    { id: 91, scene: 3, text: "*You find nothing of value*", next: 92 },
    { id: 92, scene: 3, text: "Damn..", next: 94 },
    { id: 94, scene: 3, text: "*you continue down the street*", next: 95 },
    { id: 95, scene: 3, text: "...", next: 96 },
    { id: 96, scene: 3, text: "...", next: 97 },
    { id: 97, scene: 3, text: "! ! ...", next: 98 },
    { id: 98, scene: 3, text: "What was that?", next: 99 },
    {
        id: 99, 
        scene: 3, 
        text: "What should I do?",
        choices: [
            { id: 8, scene: 3, text: "Hide", next: 100 },
            { id: 9, scene: 3, text: "Look around", next: 103 }
        ]
    },
    { id: 100, scene: 3, text: "*you take cover behind some nearby rubble*", next: 101 },
    { id: 101, scene: 3, text: "...", next: 102 },
    { id: 102, scene: 3, text: "*nothing in sight*", next: 103 },
    { id: 103, scene: 3, text: "..elp!..", next: 104 },
    { id: 104, scene: 3, text: "...", next: 105 },
    { id: 105, scene: 3, text: "*you strain your ears and listen intently*", next: 106 },
    { id: 106, scene: 3, text: "..", next: 107 },
    { id: 107, scene: 3, text: "..heeEELLP!", next: 108 },
    { id: 108, scene: 3, text: "I can hear something!", next: 109 },
    { id: 109, scene: 3, text: "..someone calling for help? Someone alive..?", next: 111 },
    { id: 111, scene: 3, text: "*you start to run towards an intersection*", next: 112 },
    { id: 112, scene: 3, text: "ROOOOAAAAR", next: 113 },
    {
        id: 113, 
        scene: 3, 
        text: "What should I do?",
        choices: [
            { id: 10, scene: 3, text: "Hide", next: 114 },
            { id: 11, scene: 3, text: "Approach", next: 118 } // Updated to link to the correct next step
        ]
    },
    { id: 114, scene: 3, text: "*you keep listening from behind cover*", next: 115 },
    { id: 115, scene: 3, text: "ROOOAAAARRR", next: 116 },
    { id: 116, scene: 3, text: "I can't just stay here! If they're alive, they might be able to help me find Xiao'Er!", next: 117 },
    { id: 117, scene: 3, text: "*you stop hiding and approach the sounds*", next: 118 },
    { id: 118, scene: 3, text: "Please be in time!", next: 119 },
    { id: 119, scene: 3, text: "ROOOOAAARRRRR!!", next: 120 },
    { id: 120, scene: 3, text: "Help me!", next: 121 },
    { id: 121, scene: 3, text: "*A young woman comes hurtling into view being closely pursued by a towering figure*", next: 122 },
    {
        id: 122, 
        scene: 3, 
        text: "What should I do?",
        choices: [
            { id: 11, scene: 3, text: "Call out to her", next: 123 },//
            { id: 12, scene: 3, text: "Keep going", next: 124 },
            { id: 13, scene: 3, text: "Distract the figure", next: 125 }
        ]
    },
    { id: 123, scene: 3, text: "*the girl fails to hear you over the noise of crashing behind her*", next: 126 },//
    { id: 124, scene: 3, text: "*you keep going*", next: 127 },
    { id: 125, scene: 3, text: "*you pick up a rock mid-run and hurl it at the figure pursuing the girl*", next: 128 },//
    { id: 126, scene: 3, text: "What should I do?", choices: [{ id: 13, scene: 3, text: "Distract the figure", next: 125 }] },
    { id: 127, scene: 3, text: "*the rock hits the figure in the head*", next: 128 },
    { id: 128, scene: 3, text: "RRRRhhh?!", next: 129 },//
    { id: 129, scene: 3, text: "*it turns to you and the girl manages to get some distance*", next: 130 },
    { id: 130, scene: 3, text: "*You catch up to her in a few paces*", next: 131 },
    { id: 131, scene: 3, text: "RUN!", next: 133 },

    { id: 133, scene: 3, text: "*You reach out your hand to her, running as hard as you can*", next: 134 },
    { id: 134, scene: 3, text: "*You manage to grab her wrist*", next: 135 },
    { id: 135, scene: 3, text: "ROOOAAAARRR!!", next: 136 },
    { id: 136, scene: 3, text: "*the figure swings out at you*", next: 137 },
    { id: 137, scene: 3, text: "*you pull her down and duck as the massive arm swoops over your head*", next: 138 },
    { id: 138, scene: 3, text: "RUN!", next: 139 },
    { id: 139, scene: 3, text: "*You both hurtle towards the nearest building*", next: 140 },

    { //////////////////////////////////////////--------------------------check next from here-------------------------------------
        id: 140, 
        scene: 3, 
        text: "What should I do?",
        choices: [
            { id: 14, scene: 3, text: "Enter building", next: 141 },
            { id: 15, scene: 3, text: "Run down the street", next: 158 }
        ]
    },//choice 14 --> SCENE4
    { id: 141, scene: 3, text: "*You scramble through the doorway of an abandoned store*", next: 142 },
    { id: 142, scene: 3, text: "*the aisles are covered in dust and filth, as are the shelves*", next: 143 },
    { id: 143, scene: 3, text: "RRRRAAAAAAA!", next: 144 },
    { id: 144, scene: 3, text: "*you can hear it approaching*", next: 145 },
    { id: 145, scene: 3, text: "CRAAASHH!", next: 146 },
    { id: 146, scene: 3, text: "Come on! He's too big to get through the door!", next: 147 },
    { id: 147, scene: 3, text: "It won't stop him though!", next: 148 }, //class='Ange'
    { id: 148, scene: 3, text: "*her voice sounds familiar...*", next: 149 },
    { id: 149, scene: 3, text: "*you stop and look over your shoulder*", next: 150 },
    { id: 150, scene: 3, text: "*The figure once shrouded in darkness is now illuminated by light reflected off shattered glass*", next: 151 },
    { id: 151, scene: 3, text: "*what could have once been a man was now a grey lumpen mass of torn skin and flesh*", next: 152 },
    { id: 152, scene: 3, text: "*its' scalp is covered in pustules and its' mouth a bloody mess*", next: 153 },
    { id: 153, scene: 3, text: "Look at its eyes...", next: 154 },//class='Ange'
    { id: 154, scene: 3, text: "*The girl was right, its eyes were sunken black holes yet in the depths they gleamed with pure malice...and hunger...*", next: 155 },
    { id: 155, scene: 3, text: "Come on!", next: 156 },
    { id: 156, scene: 3, text: "*You grab the girl and keep running into the depths of the building*", next: 171 }, //-> scene 4
    //choice15 --> SCENE5
    { id: 158, scene: 3, text: "*you change course just before entering and swerve to the right, dragging her behind you down the sidewalk*", next: 159 },
    { id: 159, scene: 3, text: "Why aren't we hiding in there!?", next: 160 },//class='Ange'
    { id: 160, scene: 3, text: "*her voice sounds familiar...*", next: 161 },
    { id: 161, scene: 3, text: "*The figure fails to stop its' pursuit in time and crashes into the frame of the building entrance*", next: 162 },
    { id: 162, scene: 3, text: "*glass shatters everywhere and the figure shakes off the debris*", next: 163 },
    { id: 163, scene: 3, text: "*you stop and look over your shoulder*", next: 164 },
    { id: 164, scene: 3, text: "*The figure once shrouded in darkness is now illuminated by light reflected off shattered glass*", next: 165 },
    { id: 165, scene: 3, text: "*what could have once been a man was now a grey lumpen mass of torn skin and flesh*", next: 166 },
    { id: 166, scene: 3, text: "*its' scalp is covered in pustules and its' mouth a bloody mess*", next: 167 },
    { id: 167, scene: 3, text: "Look at its eyes...", next: 168 },//class='Ange'
    { id: 168, scene: 3, text: "*The girl was right, its eyes were sunken black holes yet in the depths they gleamed with pure malice...and hunger...*", next: 169 },
    { id: 169, scene: 3, text: "Come on!", next: 170 },
    { id: 170, scene: 3, text: "*You grab the girl and keep running down the street*", next: 169 }//-> scene 5
    ];