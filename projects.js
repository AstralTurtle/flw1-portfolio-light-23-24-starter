let projects = [];
let projectDropdown = document.getElementById("project-dropdown");
// games by id
// SFoRS = 1
// PsuedoSneak = 2
// Drill Deeper = 3
// Slime Slayer = 4

gameFrame = document.getElementById("gameFrame");


const projectArr =[
    "",
    "https://itch.io/embed-upload/8740303?color=000000",
    "https://itch.io/embed-upload/9012549?color=333333",
    "https://itch.io/embed-upload/8578275?color=111111",
    "https://itch.io/embed-upload/7358114?color=132E32",
];


projectDropdown.addEventListener("onchange", () => {
    gameFrame.src = projectArr[projectDropdown.value];
    gameFrame.contentWindow.location.reload();
    console.log(projectDropdown.value);
})
// make a button


