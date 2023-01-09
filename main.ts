let fugt = 0
basic.showIcon(IconNames.Happy)
basic.pause(2000)
basic.showLeds(`
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    . . . . .
    `)
basic.forever(function () {
    fugt = pins.analogReadPin(AnalogPin.P2)
    if (fugt > 600) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(5000)
        pins.digitalWritePin(DigitalPin.P0, 0)
    } else {
        led.plotBarGraph(
        fugt,
        1024
        )
    }
})
