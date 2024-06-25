export const dialogues = [
    { id: 1, scene: 1, text: "... " },
    { id: 2, scene: 1, text: "(snow continues falling...)" },
    { id: 3, scene: 1, text: "...", action: 'show', target: 'DT' },
    { id: 4, scene: 1, text: "*Hahhhh...*" },
    { id: 5, scene: 1, text: "*crunch*...*crunch*...*crunch*.." },
    { id: 6, scene: 1, text: "(snow intensifies)" },
    { id: 7, scene: 1, text: "Haa..this cold..." },
    { id: 8, scene: 1, text: "..." },
    { id: 9, scene: 1, text: "Must keep going..." },
    { id: 10, scene: 1, text: "*crunch*...*crunch*..." },
    { id: 11, scene: 1, text: "... Xiao'Er..", action: 'fadeOut' },
    {
        id: 12,
        scene: 1,
        text: "I have to keep moving. But it'll be night soon..",
        choices: [
            { text: "Keep going", next: 13 },
            { text: "Find shelter", next: 14 }
        ]
    },
    { id: 13, scene: 1, text: "I should push a little longer..he's waiting for me.." },
    { id: 14, scene: 1, text: "I have no choice.. wait for me..", action: 'fadeOut' },
    { id: 15, scene: 2, text: "zzz.." },
    { id: 16, scene: 2, text: "..." },
    { id: 17, scene: 2, text: "zzz.." },
    { id: 18, scene: 2, text: "..." },
    { id: 19, scene: 2, text: "rrr.." },
    { id: 20, scene: 2, text: "..." },
    { id: 21, scene: 2, text: ".!.." },
    { id: 22, scene: 2, text: "rrr...rR! *thud*" },
    { id: 23, scene: 2, text: "..." },
    { id: 24, scene: 2, text: "..." },
    { id: 25, scene: 2, text: "rrr..." },
    {
        id: 26,
        scene: 2,
        text: "",
        choices: [
            {
                text: "remain silent",
                next: 27
            },
            {
                text: "turn on light",
                next: 34
            },
            {
                text: "look outside",
                next: 35
            }
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
            {
                text: "run",
                next: 38
            },
            {
                text: "fight",
                next: 45
            }
        ]
    },
    { id: 38, scene: 2, text: "shit!", next: 39 },
    { id: 39, scene: 2, text: "*you grab your bag and run for the street*", next: 40 },
    { id: 40, scene: 2, text: "Haaa huh haa! huh haa!", next: 41 },
    { id: 41, scene: 2, text: "...raaahh!...", next: 42 },
    { id: 42, scene: 2, text: "...", next: 43 },
    { id: 43, scene: 2, text: "haahhh dammit...", next: ""}, // Loop back to initial choice
    { id: 45, scene: 2, text: "Gah!!", next: 46 },
    { id: 46, scene: 2, text: "NOO!!", next: 47 },
    { id: 47, scene: 2, text: "...", next: 48 },
    { id: 48, scene: 2, text: "...you failed to survive..", action: 'restart' }
];
