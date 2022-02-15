input.onButtonPressed(Button.A, function () {
    horse0 = horse0 + randint(0, 1)
    led.plot(0, horse0)
    horse1 = horse1 + randint(0, 1)
    led.plot(1, horse1)
    horse2 = horse2 + randint(0, 1)
    led.plot(2, horse2)
    horse3 = horse3 + randint(0, 1)
    led.plot(3, horse3)
    horse4 = horse4 + randint(0, 1)
    led.plot(4, horse4)
    basic.pause(1000)
})
input.onGesture(Gesture.Shake, function () {
    number = randint(1, 6)
    if (number == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (number == 2) {
        basic.showLeds(`
            . . . . .
            . . # . .
            . . . . .
            . . # . .
            . . . . .
            `)
    } else if (number == 3) {
        basic.showLeds(`
            . . . . .
            . . . # .
            . . # . .
            . # . . .
            . . . . .
            `)
    } else if (number == 4) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . . . .
            . # . # .
            . . . . .
            `)
    } else if (number == 5) {
        basic.showLeds(`
            . . . . .
            . # . # .
            . . # . .
            . # . # .
            . . . . .
            `)
    } else {
        basic.showLeds(`
            . . . . .
            . # . # .
            . # . # .
            . # . # .
            . . . . .
            `)
    }
})
let number = 0
let horse4 = 0
let horse3 = 0
let horse2 = 0
let horse1 = 0
let horse0 = 0
horse0 = -1
horse1 = -1
horse2 = -1
horse3 = -1
horse4 = -1
