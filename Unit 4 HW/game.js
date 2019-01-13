var wins = 0
var losses = 0
var goalNumber = Math.floor(Math.random() * 120)
var userNumber = Math.add(ruby + sapphire + amethyst + emerald)
var ruby = Math.floor(Math.random() * 5)
var sapphire = Math.floor(Math.random() * 15)
var amethyst = Math.floor(Math.random() * 10)
var emerald = Math.floor(Math.random() * 20)

$("#ruby").on("click", ruby);
$("#sapphire").on("click", sapphire);
$("#amethyst").on("click", amethyst);
$("#emerald").on("click", emerald);
$("#secret").on("click", wins++);

if (goalNumber === userNumber) {
    wins++
}
else {
    losses++
}

if (wins++) {
    //reset the game with an alert
}

