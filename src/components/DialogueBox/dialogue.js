export const dialogues = [
    { id: 1, scene: 1, name: 'DT', text: "... ", next: 2 },
    { id: 2, scene: 1, name: 'sound', text: "*The snow continues falling...*", next: 3 },
    { id: 3, scene: 1, name: 'DT', text: "...", next: 4 },
    { id: 4, scene: 1, name: 'sound', text: "*Hahhhh...*", next: 5 },
    { id: 5, scene: 1, name: 'sound', text: "*crunch*...*crunch*...*crunch*..", next: 6 },
    { id: 6, scene: 1, name: 'sound', text: "*The snow intensifies*", next: 7 },
    { id: 7, scene: 1, name: 'DT', text: "Haa..this cold...", next: 8 },
    { id: 8, scene: 1, name: 'DT', text: "...", next: 9 },
    { id: 9, scene: 1, name: 'DT', text: "Must keep going...", next: 10 },
    { id: 10, scene: 1, name: 'sound', text: "*crunch*...*crunch*...", next: 11 },
    { id: 11, scene: 1, name: 'DT', text: "... Xiao'Er..", action: 'fadeOut', next: 12 },
    {
        id: 12,
        scene: 1,
        name: 'DT',
        text: "I have to keep moving. But it'll be night soon..",
        choices: [
            { id: 1, scene: 1, name: 'DT', text: "Keep going", next: 13 },
            { id: 2, scene: 1, name: 'DT', text: "Find shelter", next: 14 }
        ]
    },
    { id: 13, scene: 1, name: 'DT', text: "I should push a little longer..he's waiting for me..", action: 'fadeOut', next: 15 },
    { id: 14, scene: 1, name: 'DT', text: "I have no choice.. wait for me..", action: 'fadeOut', next: 15 },


    { id: 15, scene: 2, name: 'sound', text: "zzz..", next: 16 },
    { id: 16, scene: 2, name: 'DT', text: "...", next: 17 },
    { id: 17, scene: 2, name: 'sound', text: "zzz..", next: 18 },
    { id: 18, scene: 2, name: 'DT', text: "...", next: 19 },
    { id: 19, scene: 2, name: 'hidden', text: "rrr..", next: 20 },
    { id: 20, scene: 2, name: 'DT', text: "...", next: 21 },
    { id: 21, scene: 2, name: 'sound', text: ".!..", next: 22 },
    { id: 22, scene: 2, name: 'hidden', text: "rrr...rR! *thud*", next: 23 },
    { id: 23, scene: 2, name: 'DT', text: "...", next: 24 },
    { id: 24, scene: 2, name: 'DT', text: "......", next: 25 },
    { id: 25, scene: 2, name: 'hidden', text: "rrr...", next: 26 },
    {
        id: 26,
        scene: 2,
        name: 'DT',
        text: "",
        choices: [
            { id: 3, scene: 2, name: 'DT', text: "remain silent", next: 27 },
            { id: 4, scene: 2, name: 'DT', text: "turn on light", next: 34 },
            { id: 5, scene: 2, name: 'DT', text: "look outside", next: 35 }
        ]
    },
    { id: 27, scene: 2, name: 'DT', text: "....", next: 28 },
    { id: 28, scene: 2, name: 'sound', text: "*shuffling noises get quieter*", next: 29 },
    { id: 29, scene: 2, name: 'sound', text: "*you hold your breath*", next: 30 },
    { id: 30, scene: 2, name: 'DT', text: "...", next: 31 },
    { id: 31, scene: 2, name: 'DT', text: "...", next: 32 },
    { id: 32, scene: 2, name: 'DT', text: "...", next: 33 },
    { id: 33, scene: 2, name: 'DT', text: "...", next: 43 },
    { id: 34, scene: 2, name: 'DT', text: "You turn on the light and nothing happens.", next: 26 },
    { id: 35, scene: 2, name: 'hidden', text: "Rrah..?", next: 36 },
    { id: 36, scene: 2, name: 'zombie', text: "RRRAAAAAAHHHHHHHHH!!!", next: 37 },
    {
        id: 37, scene: 2, name: 'DT', text: "DAMMIT!",
        choices: [
            { id: 6, scene: 2, name: 'DT', text: "run", next: 38 },
            { id: 7, scene: 2, name: 'DT', text: "fight", next: 45 }
        ]
    },
    { id: 38, scene: 2, name: 'DT', text: "shit!", next: 39 },
    { id: 39, scene: 2, name: 'DT', text: "*you grab your bag and run out into the street*", next: 40 },
    { id: 40, scene: 2, name: 'DT', text: "Haaa huh haa! huh haa!", next: 41 },
    { id: 41, scene: 2, name: 'hidden', text: "...raaahh!...", next: 42 },
    { id: 42, scene: 2, name: 'DT', text: "...", next: 43 },
    { id: 43, scene: 2, name: 'DT', text: "haahhh dammit...every night...", next: '' },
    { id: 45, scene: 2, name: 'DT', text: "Gah!!", next: 46 },
    { id: 46, scene: 2, name: 'DT', text: "NOO!!", next: 47 },
    { id: 47, scene: 2, name: 'DT', text: "...", next: 48 },
    { id: 48, scene: 2, name: 'DT', text: "...you failed to survive..", next: 16 },

    { id: 49, scene: 'cutscene_1', name: 'Narrator', text: "...", next: 50 },
    { id: 50, scene: 'cutscene_1', name: 'Narrator', text: "This world...", next: 51 },
    { id: 51, scene: 'cutscene_1', name: 'Narrator', text: "is broken...", next: 52 },
    { id: 52, scene: 'cutscene_1', name: 'Narrator', text: "How many years have passed since the fall of civilization", next: 53 },
    { id: 53, scene: 'cutscene_1', name: 'Narrator', text: "Where once there was light and sound", next: 54 },
    { id: 54, scene: 'cutscene_1', name: 'Narrator', text: "Exists only the dark and quiet", next: 55 },
    { id: 55, scene: 'cutscene_1', name: 'Narrator', text: "And fear..", next: 56 },
    { id: 56, scene: 'cutscene_1', name: 'Narrator', text: "The hubris of humanity has always defined its destiny", next: 57 },
    { id: 57, scene: 'cutscene_1', name: 'Narrator', text: "Everyone knew.. it would one day bring about destruction", next: 58 },
    { id: 58, scene: 'cutscene_1', name: 'Narrator', text: "...", next: 59 },
    { id: 59, scene: 'cutscene_1', name: 'Narrator', text: "And it did..", next: 60 },

    { id: 60, scene: 'cutscene_1_2', name: 'Narrator', text: "We found out that day ", next: 61 },
    { id: 61, scene: 'cutscene_1_2', name: 'Narrator', text: "That we were never meant to touch the realm of God", next: 62 },
    { id: 62, scene: 'cutscene_1_2', name: 'Narrator', text: "Our hands scorched the skies black", next: 63 },
    { id: 63, scene: 'cutscene_1_2', name: 'Narrator', text: "Sacrificing this world to the darkness", next: 64 },
    { id: 64, scene: 'cutscene_1_2', name: 'Narrator', text: "That had slept so peacefully for so long..", next: 65 },

    { id: 65, scene: 3, name: 'DT', text: "....", next: 66 },
    { id: 66, scene: 3, name: 'DT', text: "......", next: 67 },
    { id: 67, scene: 3, name: 'DT', text: "Will I ever be able to sleep again?", next: 68 },
    { id: 68, scene: 3, name: 'DT', text: "When was the last time..? ...", next: 69 },
    {
        id: 69, 
        scene: 3, 
        name: 'DT', 
        text: "What should I do next?",
        choices: [
            { id: 1, scene: 3, name: 'DT', text: "Keep walking", next: 70 },
            { id: 2, scene: 3, name: 'DT', text: "Have a rest", next: 71 },
            { id: 3, scene: 3, name: 'DT', text: "Check your bag", next: 74 }
        ]
    },
    { id: 70, scene: 3, name: 'DT', text: "*you keep walking*", next: 78 }, 
    { id: 71, scene: 3, name: 'DT', text: "*you sit down on some nearby rubble and take in your surroundings*", next: 72 },
    { id: 72, scene: 3, name: 'DT', text: "Everything seems quiet", next: 73 },
    { id: 73, scene: 3, name: 'DT', text: ".....", next: 76 },
    { id: 74, scene: 3, name: 'DT', text: "*inside the bag are a few cans of rations, a blanket, a rope and an old solar powered phone*", next: 75 },
    { id: 75, scene: 3, name: 'DT', text: "...thought I had more food left..", next: 76 },
    { id: 76, scene: 3, name: 'DT', text: "I better keep going", next: 78 },
    { id: 78, scene: 3, name: 'DT', text: "I must be getting closer by now...right?", next: 79 },
    { id: 79, scene: 3, name: 'DT', text: "Why did I have to leave..", next: 80 },
    { id: 80, scene: 3, name: 'DT', text: "Everyone knew I hated business trips..", next: 81 },
    { id: 81, scene: 3, name: 'DT', text: "...", next: 82 },
    { id: 82, scene: 3, name: 'DT', text: "......", next: 83 },
    { id: 83, scene: 3, name: 'DT', text: "..fucking Sydney..", next: 84 },
    {
        id: 84, 
        scene: 3, 
        name: 'DT', 
        text: "What now?",
        choices: [
            { id: 4, scene: 3, name: 'DT', text: "Keep walking", next: 85 },
            { id: 5, scene: 3, name: 'DT', text: "Look for supplies", next: 86 }
        ]
    },
    { id: 85, scene: 3, name: 'DT', text: "*you keep walking*", next: 95 },
    { id: 86, scene: 3, name: 'DT', text: "*you see an abandoned car nearby*", next: 87 },
    {
        id: 87, 
        scene: 3, 
        name: 'DT', 
        text: "What do I do?",
        choices: [
            { id: 6, scene: 3, name: 'DT', text: "Approach the car", next: 88 },
            { id: 7, scene: 3, name: 'DT', text: "Go around the car", next: 94 }
        ]
    },
    { id: 88, scene: 3, name: 'DT', text: "*you approach the car*", next: 89 },
    { id: 89, scene: 3, name: 'DT', text: "Seems alright..", next: 90 },
    { id: 90, scene: 3, name: 'DT', text: "*inside the car are various broken objects*", next: 91 },
    { id: 91, scene: 3, name: 'DT', text: "*You find nothing of value*", next: 92 },
    { id: 92, scene: 3, name: 'DT', text: "Damn..", next: 94 },
    { id: 94, scene: 3, name: 'DT', text: "*you continue down the street*", next: 95 },
    { id: 95, scene: 3, name: 'DT', text: "...", next: 96 },
    { id: 96, scene: 3, name: 'DT', text: "......", next: 97 },
    { id: 97, scene: 3, name: 'DT', text: "! ! ...", next: 98 },
    { id: 98, scene: 3, name: 'DT', text: "What was that?", next: 99 },
    {
        id: 99, 
        scene: 3, 
        name: 'DT', 
        text: "What should I do?",
        choices: [
            { id: 8, scene: 3, name: 'DT', text: "Hide", next: 100 },
            { id: 9, scene: 3, name: 'DT', text: "Look around", next: 103 }
        ]
    },
    { id: 100, scene: 3, name: 'DT', text: "*you take cover behind some nearby rubble*", next: 101 },
    { id: 101, scene: 3, name: 'DT', text: "...", next: 102 },
    { id: 102, scene: 3, name: 'DT', text: "*nothing in sight*", next: 103 },
    { id: 103, scene: 3, name: '', text: "..elp!..", next: 104 },
    { id: 104, scene: 3, name: 'DT', text: "...", next: 105 },
    { id: 105, scene: 3, name: 'DT', text: "*you strain your ears and listen intently*", next: 106 },//reword
    { id: 106, scene: 3, name: 'DT', text: "..", next: 107 },
    { id: 107, scene: 3, name: '', text: "..help me!", next: 108 },
    { id: 108, scene: 3, name: 'DT', text: "There it is!", next: 109 },
    { id: 109, scene: 3, name: 'DT', text: "..a person? They're alive..?", next: 111 },
    { id: 111, scene: 3, name: 'DT', text: "*you start to run towards the end of the street*", next: 112 },
    { id: 112, scene: 3, name: '', text: "ROOOOAAAAR", next: 113 },
    {
        id: 113, 
        scene: 3, 
        name: 'DT', 
        text: "What should I do?",
        choices: [
            { id: 10, scene: 3, name: 'DT', text: "Hide", next: 114 },
            { id: 11, scene: 3, name: 'DT', text: "Approach", next: 118 }
        ]
    },
    { id: 114, scene: 3, name: 'DT', text: "*you keep listening from behind cover*", next: 115 },
    { id: 115, scene: 3, name: '', text: "ROOOAAAARRR", next: 116 },
    { id: 116, scene: 3, name: 'DT', text: "I can't just stay here! If they're alive, they might be able to help me find Xiao'Er!", next: 117 },
    { id: 117, scene: 3, name: 'DT', text: "*you stop hiding and approach the sounds*", next: 118 },
    { id: 118, scene: 3, name: 'DT', text: "Please be in time!", next: 119 },
    { id: 119, scene: 3, name: '', text: "ROOOOAAARRRRR!!", next: 120 },
    { id: 120, scene: 3, name: '', text: "Help me!", next: 121 },
    { id: 121, scene: 3, name: 'Ange', text: "*A young woman staggers into view, a huge figure close behind her*", next: 122 },//reword
    {
        id: 122, 
        scene: 3, 
        name: 'DT', 
        text: "I have to do something!",
        choices: [
            { id: 11, scene: 3, name: 'DT', text: "Call out to her", next: 123 },
            { id: 12, scene: 3, name: 'DT', text: "Keep going", next: 124 }, //------------------------------------
            { id: 13, scene: 3, name: 'DT', text: "Distract the figure", next: 125 }
        ]
    },
    { id: 123, scene: 3, name: 'sound', text: "*the girl fails to hear you over the noise of crashing behind her*", next: 125 },
    { id: 124, scene: 3, name: 'DT', text: "*you keep going*", next: 127 },
    { id: 125, scene: 3, name: 'sound', text: "*you pick up a rock mid-run and hurl it at the figure pursuing the girl*", next: 128 },
    { id: 126, scene: 3, name: 'DT', text: "Take this!", next: 127 },
    { id: 127, scene: 3, name: 'sound', text: "*the rock hits the figure in the head*", next: 128 },
    { id: 128, scene: 3, name: 'hidden', text: "RRRRhhh?!", next: 129 },//no sound? //---------------------//AGAINDBWEUIDUDWDUWDBIQDQW
    { id: 129, scene: 3, name: 'sound', text: "*it turns to you and the girl manages to get some distance*", next: 130 },
    { id: 130, scene: 3, name: 'DT', text: "*You catch up to her in a few paces*", next: 131 },
    { id: 131, scene: 3, name: 'DT', text: "RUN!", next: 133 }, //run sound not walk
    { id: 133, scene: 3, name: 'sound', text: "*You reach out your hand to her*", next: 134 },
    { id: 134, scene: 3, name: 'sound', text: "*You manage to grab her wrist*", next: 135 },
    { id: 135, scene: 3, name: 'hidden', text: "ROOOAAAARRR!!", next: 136 },
    { id: 136, scene: 3, name: 'sound', text: "*the figure reaches out*", next: 137 },
    { id: 137, scene: 3, name: 'sound', text: "*you pull the girl down, the massive hand passes inches overhead*", next: 138 }, 
    { id: 138, scene: 3, name: 'DT', text: "RUN!", next: 139 },
    { id: 139, scene: 3, name: 'sound', text: "*You both hurtle towards the nearest building*", next: 140 },

    {
        id: 140, 
        scene: 3, 
        name: 'DT', 
        text: "Should we go inside?",
        choices: [
            { id: 14, scene: 3, name: 'DT', text: "Enter building", next: 141 },
            { id: 15, scene: 3, name: 'DT', text: "Don't enter the building", next: 157 }
        ]
    },
    { id: 141, scene: 3, name: 'sound', text: "*You scramble through the doorway of an abandoned store*", next: 142 },//------------------------------------ not walk
    { id: 142, scene: 3, name: 'sound', text: "*the aisles are covered in dust and filth, as are the shelves*", next: 143 },
    { id: 143, scene: 3, name: 'hidden', text: "RRRRAAAAAAA!", next: 144 },//--------------------------checked
    { id: 144, scene: 3, name: 'sound', text: "*you can hear it approaching*", next: 145 },
    { id: 145, scene: 3, name: 'sound', text: "CRAAASHH!", next: 146 },//--------------------------------checked
    { id: 146, scene: 3, name: 'DT', text: "Come on! He's too big to get through the door!", next: 147 },
    { id: 147, scene: 3, name: 'Ange', text: "It won't stop him though!", next: 148 },
    { id: 148, scene: 3, name: 'sound', text: "*her voice sounds familiar...*", next: 149 },
    { id: 149, scene: 3, name: 'sound', text: "*you stop and look over your shoulder*", next: 150 },
    { id: 150, scene: 3, name: 'zombie', text: "*The figure once shrouded in darkness is now illuminated by light reflected off shattered glass*", next: 151 },
    { id: 151, scene: 3, name: 'zombie', text: "*what once could have been a man was now a creature of torn skin and flesh*", next: 152 },
    { id: 152, scene: 3, name: 'zombie', text: "*its face full of rage as it turns towards you*", next: 153 },
    { id: 153, scene: 3, name: 'Ange', text: "Look at its eyes...", next: 154 },
    { id: 154, scene: 3, name: 'zombie', text: "*The girl is right, its eyes are black holes yet in the depths.. there is hate...and hunger..*", next: 155 },
    { id: 155, scene: 3, name: 'DT', text: "Come on!", next: 156 },
    { id: 156, scene: 3, name: 'sound', text: "*You grab the girl and keep running into the depths of the building*", next: 171 }, //-> scene 4
    
    { id: 157, scene: 3, name: 'DT', text: "*you stop suddenly and pull the girl back, changing course*", next: 158 }, //run not walkedqwdqwdwdqwdqawdqdqw
    { id: 158, scene: 3, name: 'Ange', text: "Why aren't we hiding in there!?", next: 159 },
    { id: 159, scene: 3, name: 'sound', text: "*her voice sounds familiar...*", next: 160 },
    { id: 160, scene: 3, name: 'sound', text: "*The figure fails to stop its pursuit in time and crashes into the frame of the building entrance*", next: 161 },//crash not walk//---------------------no soundqwdqdqdqwdqwdwdqdwqdqwdqw
    { id: 161, scene: 3, name: 'sound', text: "*glass shatters everywhere and the figure shakes off the debris*", next: 162 },
    { id: 162, scene: 3, name: 'sound', text: "*you look over your shoulder*", next: 163 },
    { id: 163, scene: 3, name: 'zombie', text: "*The figure once shrouded in darkness is now illuminated by light reflected off shattered glass*", next: 164 },
    { id: 164, scene: 3, name: 'zombie', text: "*what once could have been a man was now a creature of torn skin and flesh*", next: 165 },
    { id: 165, scene: 3, name: 'zombie', text: "*its face full of rage as it turns towards you*", next: 166 },
    { id: 166, scene: 3, name: 'Ange', text: "Look at its eyes...", next: 167 }, //no gasp//---------------------
    { id: 167, scene: 3, name: 'zombie', text: "*The girl is right, its eyes are black holes yet in the depths.. there is hate...and hunger..*", next: 168 },
    { id: 168, scene: 3, name: 'DT', text: "Come on!", next: 169 }, //sound is there but slow, 1 line before? or both?
    { id: 169, scene: 3, name: 'DT', text: "*You grab the girl and keep running down the street*", next: 223 }, //-> scene 5

    // Scene 4 (Continuation of hiding in the building)
    { id: 171, scene: 4, name: 'sound', text: " *You and the girl rush deeper into the building, looking for a safe spot*", next: 172 },
    { id: 172, scene: 4, name: 'Ange', text: "Where are we going!?", next: 173 },
    { id: 173, scene: 4, name: 'DT', text: "Anywhere but here!", next: 174 },
    { id: 174, scene: 4, name: 'sound', text: "*The building is eerily silent, but you can still hear distant sounds of chaos from outside*", next: 175 },
    { id: 175, scene: 4, name: 'Ange', text: "Do you even know where we're going?", next: 176 },
    { id: 176, scene: 4, name: 'DT', text: "We just need to find a place to hide, regroup, and think!", next: 177 },
    { id: 177, scene: 4, name: 'sound', text: "*You spot a partially open door leading to a basement*", next: 178 },
    { 
        id: 178, 
        scene: 4, 
        name: 'DT', 
        text: "What do you think?", 
        choices: [
            { id: 179, scene: 4, name: 'DT', text: "Enter the basement", next: 180 },  //basement BG
            { id: 181, scene: 4, name: 'DT', text: "Keep looking for another spot", next: 182 }
        ]
    },
    { id: 180, scene: 4, name: 'sound', text: "*You and the girl scramble into the basement, descending into the darkness below*", next: 183 },
    { id: 182, scene: 4, name: 'sound', text: "*You decide to keep looking, hoping to find a better hiding spot*", next: 207 },

    // Basement path
    { id: 183, scene: 4, name: 'sound', text: " *The basement is damp and dark, but it feels safer than the floors above*", next: 184 },
    { id: 184, scene: 4, name: 'Ange', text: "It's so dark down here...", next: 185 },
    { id: 185, scene: 4, name: 'DT', text: "We should be safe for now...", next: 186 },
    { id: 186, scene: 4, name: 'DT', text: "Let's take a moment to catch our breath.", next: 187 },
    { id: 187, scene: 4, name: 'Ange', text: "What now?", next: 188 },
    { id: 188, scene: 4, name: 'DT', text: "We need to find a way out of the city. Somewhere safe.", next: 189 },
    { id: 189, scene: 4, name: 'Ange', text: "Do you think there is anywhere safe left?", next: 190 },
    { id: 190, scene: 4, name: 'DT', text: " I don't know.. but I'm not dying here..", next: 191 },
    { id: 191, scene: 4, name: 'sound', text: "*Your conversation is interrupted by the distant echo of footsteps above*", next: 192 },
    { id: 192, scene: 4, name: 'Ange', text: "Did you hear that?", next: 193 },
    { id: 193, scene: 4, name: 'DT', text: "Yeah..stay close..", next: 194 },
    { id: 194, scene: 4, name: 'sound', text: "*The sound of footsteps echoes closer*", next: 195 },
    { 
        id: 195, 
        scene: 4, 
        name: 'DT', 
        text: "We need to move, now!", 
        choices: [
            { id: 196, scene: 4, name: 'DT', text: "Stay still", next: 197 },
            { id: 198, scene: 4, name: 'DT', text: "Move away from the sound", next: 200 }
        ]
    },
    { id: 197, scene: 4, name: 'sound', text: "*You cautiously move towards the sound, ready to confront whatever is making it*", next: 213 }, //DEATH
    { id: 200, scene: 4, name: 'sound', text: "*You decide it's safer to move away from the sound and find another way out*", next: 213 },

    // Continue searching path
    { id: 207, scene: 4, name: 'sound', text: "*You find a storage room and decide to hide there*", next: 208 },
    { id: 208, scene: 4, name: 'Ange', text: "Do you think we're safe in here?", next: 209 },
    { id: 209, scene: 4, name: 'DT', text: "For now. Let's barricade the door and take a moment to think.", next: 210 },
    { id: 210, scene: 4, name: 'sound', text: "*You both move some old furniture in front of the door to block it*", next: 211 },
    { id: 211, scene: 4, name: 'Ange', text: "What's our next move?", next: 212 },
    { id: 212, scene: 4, name: 'DT', text: "We need to find a way out of the city. Maybe there's something useful in this building.", next: 213 },

    // Merge paths for common navigation to Scene 6
    { id: 213, scene: 4, name: 'sound', text: "*After a while, you find a map and some supplies*", next: 214 },
    { id: 214, scene: 4, name: 'DT', text: "This map shows a possible shelter on the outskirts of the city. We should head there.", next: 215 },
    { id: 215, scene: 4, name: 'Ange', text: "Alright. Let's move before it gets any more dangerous.", next: 216 },
    { id: 216, scene: 4, name: 'sound', text: "*You gather your things and prepare to leave the building*", next: 217 },
    { id: 217, scene: 4, name: 'DT', text: "Stay close to me. We'll make it out of here.", next: 218 },
    { id: 218, scene: 4, name: 'sound', text: "*You both step out into the streets again, ready to make your way to the shelter*", next: 271 },

    // Scene 5 (Continuation of running down the street)
    { id: 223, scene: 5, name: 'sound', text: "* You continue running down the streets, the sounds of pursuit growing fainter*", next: 224 },
    { id: 224, scene: 5, name: 'Ange', text: "Where are we going!?", next: 225 },
    { id: 225, scene: 5, name: 'DT', text: "Anywhere but here!", next: 226 },
    { id: 226, scene: 5, name: 'sound', text: "*The streets are eerily empty, but the distant sounds of chaos are never far behind*", next: 227 },
    { id: 227, scene: 5, name: 'Ange', text: "Do you even know where we're going?", next: 228 },
    { id: 228, scene: 5, name: 'DT', text: "We need to find a place to hide, regroup, and think!", next: 229 },
    { id: 229, scene: 5, name: 'sound', text: "*You spot a partially open manhole cover nearby*", next: 230 },
    { 
        id: 230, 
        scene: 5, 
        name: 'DT', 
        text: "Over there!", 
        choices: [
            { id: 231, scene: 5, name: 'DT', text: "Enter the manhole", next: 232 },
            { id: 233, scene: 5, name: 'DT', text: "Keep running", next: 234 },
            { id: 235, scene: 5, name: 'DT', text: "Hide in a nearby building", next: 236 }
        ]
    },
    { id: 232, scene: 5, name: 'sound', text: "*You and the girl scramble into the manhole, descending into the darkness below*", next: 237 },
    { id: 234, scene: 5, name: 'sound', text: "*You ignore the manhole and keep running, hoping to find safety elsewhere*", next: 253 },
    { id: 236, scene: 5, name: 'sound', text: "*You quickly duck into a nearby building, pulling the girl along with you*", next: 247 },

    // Manhole path
    { id: 237, scene: 5, name: 'sound', text: "*The sewers are damp and dark, but it feels safer than the streets above*", next: 238 },
    { id: 238, scene: 5, name: 'Ange', text: "It's so dark down here...", next: 239 },
    { id: 239, scene: 5, name: 'DT', text: "We should be safe for now...", next: 240 },
    { id: 240, scene: 5, name: 'DT', text: "Let's take a moment to catch our breath.", next: 241 },
    { id: 241, scene: 5, name: 'Ange', text: "What now?", next: 242 },
    { id: 242, scene: 5, name: 'DT', text: "We need to find a way out of the city. Somewhere safe.", next: 243 },
    { id: 243, scene: 5, name: 'Ange', text: "Do you think there is anywhere safe left?", next: 244 },
    { id: 244, scene: 5, name: 'DT', text: "We have to believe there is.", next: 245 },
    { id: 245, scene: 5, name: 'sound', text: "*Your conversation is interrupted by the distant echo of footsteps in the sewer*", next: 247 },
    { id: 247, scene: 5, name: 'Ange', text: "Did you hear that?", next: 248 },
    { id: 248, scene: 5, name: 'DT', text: "Yes, stay close to me.", next: 249 },
    { id: 249, scene: 5, name: 'sound', text: "*The sound of footsteps echoes closer*", next: 250 },
    { 
        id: 250, 
        scene: 5, 
        name: 'DT', 
        text: "We need to move, now!", 
        choices: [
            { id: 251, scene: 5, name: 'DT', text: "Move towards the sound", next: 252 },
            { id: 254, scene: 5, name: 'DT', text: "Move away from the sound", next: 269 }
        ]
    },
    { id: 252, scene: 5, name: 'sound', text: "*You cautiously move towards the sound, ready to confront whatever is making it*", next: 269 },

    // Continue running path
    { id: 253, scene: 5, name: 'sound', text: "*You continue running, the sounds of pursuit growing fainter*", next: 255 },
    { id: 255, scene: 5, name: 'DT', text: "We need to find shelter soon.", next: 256 },
    { id: 256, scene: 5, name: 'Ange', text: "I can't keep this pace for much longer...", next: 257 },
    { id: 257, scene: 5, name: 'sound', text: "*You spot an old, abandoned house ahead*", next: 258 },
    { id: 258, scene: 5, name: 'DT', text: "Let's try that house over there!", next: 259 },
    { id: 259, scene: 5, name: 'sound', text: "*You and Ange rush into the house, slamming the door behind you*", next: 271 },

    // Hide in building path
    { id: 246, scene: 5, name: 'sound', text: "*The building is dark and dusty, but it feels like a good place to hide*", next: 260 },
    { id: 260, scene: 5, name: 'Ange', text: "Do you think we're safe in here?", next: 261 },
    { id: 261, scene: 5, name: 'DT', text: "For now. Let's barricade the door and take a moment to think.", next: 262 },
    { id: 262, scene: 5, name: 'sound', text: "*You both move some old furniture in front of the door to block it*", next: 263 },
    { id: 263, scene: 5, name: 'Ange', text: "What's our next move?", next: 264 },
    { id: 264, scene: 5, name: 'DT', text: "We need to find a way out of the city. Maybe there's something useful in this building.", next: 265 },

    // Merge paths for common navigation to Scene 6
    { id: 265, scene: 5, name: 'sound', text: "*After a while, you find a map and some supplies*", next: 266 },
    { id: 266, scene: 5, name: 'DT', text: "This map shows a possible safe zone on the outskirts of the city. We should head there.", next: 267 },
    { id: 267, scene: 5, name: 'Ange', text: "Alright. Let's move before it gets any more dangerous.", next: 268 },
    { id: 268, scene: 5, name: 'sound', text: "*You gather your things and prepare to leave the building*", next: 269 },
    { id: 269, scene: 5, name: 'DT', text: "Stay close to me. We'll make it out of here.", next: 270 },
    { id: 270, scene: 5, name: 'sound', text: "*You both step out into the streets again, ready to make your way to the safe zone*", next: 271 },

    // Navigation to Scene 6
    { id: 271, scene: 6, name: 'sound', text: "*The journey to the outskirts of the city is perilous, but you manage to avoid danger*", next: 272 },
    { id: 272, scene: 6, name: 'Ange', text: "Do you think this place will be safe?", next: 273 },
    { id: 273, scene: 6, name: 'DT', text: "It's our best chance. Let's find a way inside and secure the area.", next: 274 },

    // Scene 6 (Common scene for both paths)
    { id: 274, scene: 6, name: 'sound', text: " *The interior of the shelter is dark and quiet, but feels safe*", next: 275 },
    { id: 275, scene: 6, name: 'DT', text: "We made it. Let's secure the entrance and rest for a while.", next: 276 },
    { id: 276, scene: 6, name: 'Ange', text: "Thank you. I don't know what I would have done without you.", next: 277 },
    { id: 277, scene: 6, name: 'DT', text: " We're in this together. We'll find a way to survive.", next: 278 },
    { id: 278, scene: 6, name: 'sound', text: "*You both secure the shelter and settle down, hoping for a moment of peace at last*", next: 279 },
    { id: 279, scene: 6, name: 'sound', text: "*As you sit down, Ange starts to hesitate and eventually starts speaking*", next: 280 },
    { id: 280, scene: 6, name: 'Ange', text: "You're DT... right..? We were wondering what happened to you..it's me..Ange..", next: 281 },
    { id: 281, scene: 6, name: 'DT', text: " ! ... ... Ange...", next: 282 },
    { id: 282, scene: 6, name: 'Ange', text: " you used to teach us, remember? It wasn't too long ago..or maybe it was..", next: 283 },
    { id: 283, scene: 6, name: 'DT', text: " I remember..you said we?..", next: 284 },
    { id: 284, scene: 6, name: 'Ange', text: " The others, after we graduated, we all decided to meet each other..we were all together when the end came... so..", next: 285 },
    { id: 285, scene: 6, name: 'DT', text: "....and you've been here all along..which means, you have somewhere safe we could be staying..", next: 286 },
    { id: 286, scene: 6, name: 'Ange', text: " I didn't mean to hide it!..I just, Leo said we can't trust anyone.. so.. I..", next: 287 },
    { id: 287, scene: 6, name: 'DT', text: "Forget it, if we don't have to leave the city then we might have a chance.... We have to go.. now", next: 288 },
    { id: 288, scene: 6, name: 'Ange', text: "..right..", next: 289 },
 
    { id: 289, scene: 6, name: 'sound', text: "* After a long journey, you reach the third floor of a non-descript building, standing before a door*", next: 290 },
    { id: 290, scene: 6, name: 'sound', text: "*Ange knocks on the door once... twice... thrice... and it opens to reveal a group of familiar faces*", next: 291 },
    { id: 291, scene: 6, name: 'Eric', text: "Ange! You're okay!", next: 292 },
    { id: 292, scene: 6, name: 'Ange', text: "...Yeah... is everyone okay too?..", next: 293 },
    { id: 293, scene: 6, name: 'Eric', text: "It's been tough, but we're managing. Come in, we have some supplies.", next: 294 },
    { id: 294, scene: 6, name: 'sound', text: "*You start to follow Ange closer to the door*", next: 297 },
    { id: 297, scene: 6, name: 'Eric', text: "Guys, look who's here!", next: 298 },
    { id: 298, scene: 6, name: 'Bernie', text: "Ange! We were worried about you!", next: 299 },
    { id: 299, scene: 6, name: 'Georgia', text: "Ange! Come here, let me help with that.", next: 300 },
    { id: 300, scene: 6, name: 'Leo', text: "Stop.", next: 301 },
    { id: 301, scene: 6, name: 'JF', text: "What?..", next: 302 },
    { id: 302, scene: 6, name: 'Ting', text: "...", next: 303 },
    { id: 303, scene: 6, name: 'Georgia', text: "What is it now? She's tired, we can do the report later.", next: 304 },
    { id: 304, scene: 6, name: 'Leo', text: "...", next: 305 },
    { id: 305, scene: 6, name: 'Mark', text: "Leo...?", next: 306 },
    { id: 306, scene: 6, name: 'Leo', text: "Eric, you just let anyone in now?", next: 307 },
    { id: 307, scene: 6, name: 'sound', text: "*DT moves from behind the doorframe into view*", next: 308 },
    { id: 308, scene: 6, name: 'Eric', text: "Wha-! Ange! You-!", next: 309 },
    { id: 309, scene: 6, name: 'Ange', text: "It's okay guys! He's D-", next: 310 },
    { id: 310, scene: 6, name: 'Mark', text: "You brought some random guy here?? What if he's infected!", next: 311 },
    { id: 311, scene: 6, name: 'Bernie', text: "*moves closer to Ange protectively*", next: 312 },
    { id: 312, scene: 6, name: 'JF', text: " Georgia..! ... *..Georgia readies herself*", next: 313 },
    { id: 313, scene: 6, name: 'Leo', text: "Enough!", next: 314 },
    { id: 314, scene: 6, name: 'Leo', text: "*everyone freezes*", next: 315 },
    { id: 315, scene: 6, name: 'Leo', text: "...", next: 316 },
    { id: 316, scene: 6, name: 'Leo', text: "......", next: 317 },
    { id: 317, scene: 6, name: 'Leo', text: "....", next: 318 },
    { id: 318, scene: 6, name: 'Leo', text: "*turns to Ange* Isn't this- ..", next: 319 },
    { id: 319, scene: 6, name: 'Ange', text: "*frustrated now* I was just telling you! It's DT! He found me last night! .. I wouldn't be here otherwise!", next: 320 },
    { id: 320, scene: 6, name: 'sound', text: "*everyone either looks confused or disbelieving*", next: 321 },
    { id: 321, scene: 6, name: 'Ting', text: "Bullshit!", next: 322 },
    { id: 322, scene: 6, name: 'JF', text: "DT lives... lived in Melbourne, there's no way he would be all the way out here..", next: 323 },
    { id: 323, scene: 6, name: 'Eric', text: "Yeah... it takes a week nowadays just to walk down the street... nevermind other cities...", next: 324 },
    { id: 324, scene: 6, name: 'Leo', text: "* moves to the entrance and stands before DT* ...", next: 325 },
    { id: 325, scene: 6, name: 'DT', text: "...", next: 326 },
    { id: 326, scene: 6, name: 'Ange', text: "*looks around before losing patience and hits DT on the arm* Say something!", next: 327 },
    { id: 327, scene: 6, name: 'DT', text: "...sorry... I was just... shocked... to see you all here.", next: 328 },
    { id: 328, scene: 6, name: 'Leo', text: "...", next: 329 },
    { id: 329, scene: 6, name: 'Bernie', text: "DT?.. is that really you?", next: 330 },
    { id: 330, scene: 6, name: 'Georgia', text: "*visibly relaxes her posture* DT?", next: 331 },
    { id: 331, scene: 6, name: 'DT', text: "*everyone gathers closer*", next: 332 },
    { id: 332, scene: 6, name: 'DT', text: "... It's good to see you all again.", next: 333 },
    { id: 333, scene: 6, name: 'Eric', text: "Jesus Chri-...", next: 334 },
    { id: 334, scene: 6, name: 'Mark', text: "No ways bro...", next: 335 },
    { id: 335, scene: 6, name: 'Ting', text: "Hah?..", next: 336 },
    { id: 336, scene: 6, name: 'Ange', text: "*grabs DT by the arm and leads him forward*", next: 337 },
    { id: 337, scene: 6, name: 'Leo', text: "*moves into their path*", next: 338 },
    { id: 338, scene: 6, name: 'Ange', text: "LE-!..", next: 339 },
    { id: 339, scene: 6, name: 'Leo', text: "*looks at Ange then back to DT* ... ... ..It's good to see you again, DT... *extends his hand*", next: 340 },
    { id: 340, scene: 6, name: 'DT', text: "... ... ..*grasps Leo's hand and shakes it firmly* Good to see you again... sorry to impose...", next: 341 },
    { id: 341, scene: 6, name: 'Mark', text: "We've missed you, DT.. things haven't been the same since then..", next: 342 },
    { id: 342, scene: 6, name: 'sound', text: "*everyone rushes forward and greets DT*", next: 343 },
    { id: 343, scene: 6, name: 'sound', text: "*DT seems overwhelmed at first but eventually starts to lower his guard*", next: 344 },
    { id: 344, scene: 6, name: 'sound', text: "*eventually everyone settles down and a few hours later, they are still catching up*", next: 345 },

    { id: 345, scene: 6, name: 'DT', text: "We need to figure out our next steps. We can't stay here forever.", next: 346 },
    { id: 346, scene: 6, name: 'JF', text: "DT's right. Staying here only puts us in more danger.", next: 347 },
    { id: 347, scene: 6, name: 'Bernie', text: "We have some supplies, but we'll need more to last.", next: 348 },
    { id: 348, scene: 6, name: 'DT', text: "Alright, let's organize a group to search for more supplies.", next: 349 },
    { id: 349, scene: 6, name: 'Georgia', text: "The outskirts of the city might be safer. We should plan a route.", next: 350 },
    { id: 350, scene: 6, name: 'JF', text: "I'll help with the route planning. We need to be smart about this.", next: 351 },
    { id: 351, scene: 6, name: 'Mark', text: "We've got to be careful. One wrong move and we could be in serious trouble.", next: 352 },
    { id: 352, scene: 6, name: 'sound', text: "*You and a few students prepare to head out and search for more supplies*", next: 353 },
    { id: 353, scene: 6, name: 'Ting', text: "We need to be careful. The city is beyond dangerous..", next: 354 },
    { id: 354, scene: 6, name: 'DT', text: "I know. We'll stick together and move quickly.", next: 355 },
    { id: 355, scene: 6, name: 'JF', text: "If we move at dawn, we might have a better chance. The infected are less active then.", next: 356 },
    { id: 356, scene: 6, name: 'Mark', text: "And we should have a backup plan. In case things go south.", next: 357 },
    { id: 357, scene: 6, name: 'sound', text: "*With a plan in place, you feel a renewed sense of hope and determination*", next: 358 },
    { id: 358, scene: 6, name: 'DT', text: "We'll get through this. Together.", next: 359 },
    { id: 359, scene: 6, name: 'JF', text: " .. we trust you..", next: 360 },
    { id: 360, scene: 6, name: 'DT', text: "....", next: 361 },
    { id: 361, scene: 6, name: 'DT', text: "Wait for me... ..Son..", next: 1_000_000 },

    { id: 1_000_000, scene: 'credits', name: 'sound', text: "", next: 1_000_001 },
    { id: 1_000_001, scene: 'credits', name: 'sound', text: " End of Chapter 1 ", next: 1_000_002 },
    { id: 1_000_002, scene: 'credits', name: 'sound', text: " End of Chapter 1 ", next: 0 },
];

export default dialogues;

//characters in scene 6
//finish scene 6 meeting //expand comment


// convert new BG's & move to /media
//scene transition audio play bugs

//credit slideshow

//full screen buttons

//finalize css & animations

//review script --!important
//debug ids after review --!important

//xtra
//BGs showing all characters end of scene 6 choices
//unlockable art bonus feature