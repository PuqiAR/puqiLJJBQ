a2 = 0
y = 0
x = 0
z = 0
Number2 = 0
a1 = input.acceleration(Dimension.X)

def on_forever():
    global z, x, y, a2
    z = input.acceleration(Dimension.Z)
    x = input.acceleration(Dimension.X)
    y = input.acceleration(Dimension.Y)
    a2 = input.acceleration(Dimension.X)
basic.forever(on_forever)

def on_forever2():
    状态 = 0
    PlanetX_Display.show_user_text(1, "Hello,world!")
    PlanetX_Display.show_user_text(2, "State:" + str(状态))
    PlanetX_Display.show_user_text(3, "Number:" + str(Number2))
    PlanetX_Display.show_user_text(3, "A1：" + str(a1) + ("A2：" + str(a2)))
basic.forever(on_forever2)

def on_forever3():
    basic.show_number(Number2)
basic.forever(on_forever3)

def on_forever4():
    global Number2
    if True:
        Number2 += 1
basic.forever(on_forever4)
