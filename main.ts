input.onButtonPressed(Button.A, function () {
    Stuff = 1
})
input.onButtonPressed(Button.AB, function () {
    Reset()
})
input.onButtonPressed(Button.B, function () {
    Stuff = 0
})
function Reset () {
    Seconds = 0
    Minutes = 0
    Hours = 0
}
let Time = ""
let Hours = 0
let Minutes = 0
let Seconds = 0
let Stuff = 0
Reset()
basic.forever(function () {
    Time = "" + Hours + ":" + Minutes + ":" + Seconds
})
basic.forever(function () {
    if (Stuff == 0) {
        basic.pause(990)
        Seconds += 1
    }
})
basic.forever(function () {
    if (Minutes == 59) {
        Minutes = 0
        Hours += 1
    }
})
basic.forever(function () {
    basic.showString(Time)
})
basic.forever(function () {
    if (Seconds == 59) {
        Seconds = 0
        Minutes += 1
    }
})
