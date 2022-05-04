PlanetX_Basic.buttonEvent(PlanetX_Basic.DigitalRJPin.J1, PlanetX_Basic.ButtonStateList.CD, function () {
    Number2 = 0
})
let a2 = 0
let 状态 = ""
let y = 0
let x = 0
let z = 0
let Number2 = 0
Number2 = 0
let a1 = input.acceleration(Dimension.X)
basic.forever(function () {
    z = input.acceleration(Dimension.Z)
    x = input.acceleration(Dimension.X)
    y = input.acceleration(Dimension.Y)
})
basic.forever(function () {
    PlanetX_Display.showUserText(1, "Hello,world!")
    PlanetX_Display.showUserText(2, "State:" + 状态)
    PlanetX_Display.showUserText(3, "Number:" + Number2)
    PlanetX_Display.showUserText(4, "A1:" + a1 + " " + ("A2:" + a2))
})
basic.forever(function () {
    a2 = input.acceleration(Dimension.X)
    if (Math.abs(a1 - a2) > 400) {
        Number2 += 1
        状态 = "True"
    } else {
        状态 = "False"
    }
    basic.pause(500)
    a1 = a2
})
