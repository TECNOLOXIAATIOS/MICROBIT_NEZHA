basic.forever(function () {
    PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J3, true)
    basic.pause(5000)
    PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J3, false)
    for (let index = 0; index < 10; index++) {
        PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J2, true)
        basic.pause(200)
        PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J2, false)
        basic.pause(200)
    }
    PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J1, true)
    basic.pause(5000)
    PlanetX_Display.ledBrightness(PlanetX_Display.DigitalRJPin.J1, false)
})
