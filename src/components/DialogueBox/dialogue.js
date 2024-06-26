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
    { id: 14, scene: 1, text: "I have no choice.. wait for me..", action: 'fadeOut', next: 15 },
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
    { id: 33, scene: 2, text: "...", next: 26 }, // Loop back to remain silent choice
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
    { id: 39, scene: 2, text: "*you grab your bag and run for the street*", next: 40 },
    { id: 40, scene: 2, text: "Haaa huh haa! huh haa!", next: 41 },
    { id: 41, scene: 2, text: "...raaahh!...", next: 42 },
    { id: 42, scene: 2, text: "...", next: 43 },
    { id: 43, scene: 2, text: "haahhh dammit...", next: '' }, // End of dialogue
    { id: 45, scene: 2, text: "Gah!!", next: 46 },
    { id: 46, scene: 2, text: "NOO!!", next: 47 },
    { id: 47, scene: 2, text: "...", next: 48 },
    { id: 48, scene: 2, text: "...you failed to survive..", action: 'restart' }
];
