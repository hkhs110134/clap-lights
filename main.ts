input.onSound(DetectedSound.Loud, function () {
    if (lightsOn) {
        lightsOn = !(lightsOn)
        basic.showLeds(`
            # # # # #
            # . . . #
            # . . . #
            # . . . #
            # # # # #
            `)
    } else {
        basic.clearScreen()
    }
})
let lightsOn = false
input.setSoundThreshold(SoundThreshold.Loud, 150)
