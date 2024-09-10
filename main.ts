namespace SpriteKind {
    export const BigCookie = SpriteKind.create()
    export const Milk = SpriteKind.create()
    export const Upgrade = SpriteKind.create()
    export const GoldenCookie = SpriteKind.create()
    export const CheatMenu = SpriteKind.create()
    export const milkglass = SpriteKind.create()
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Cursor.overlapsWith(BigCookie)) {
        SelectedCookie = randint(1, RandomCookie)
        if (randint(1, 777) == 7) {
            GoldenCookie = sprites.create(img`
                ......999999......
                ....99ffffff99....
                ...9ff555555ff9...
                ..9f5555515555f9..
                .9f551555555555f9.
                .9f555555555555f9.
                9f55555555551555f9
                9f55155515555555f9
                9f55555555555555f9
                9f55555555555555f9
                9f55515555155155f9
                9f55555555555555f9
                .9f555555555555f9.
                .9f555551555555f9.
                ..9f5555555555f9..
                ...9ff555555ff9...
                ....99ffffff99....
                ......999999......
                `, SpriteKind.GoldenCookie)
            GoldenCookie.setPosition(randint(10, 150), 0)
            GoldenCookie.vy = 70
        }
        if (SelectedCookie == 1) {
            Cookie = sprites.create(img`
                . . . . . f f f f f f . . . . . 
                . . . f f 4 4 4 4 4 4 f f . . . 
                . . f 4 4 4 4 4 6 4 4 4 4 f . . 
                . f 4 4 6 4 4 4 4 4 4 4 4 4 f . 
                . f 4 4 4 4 4 4 4 4 4 4 4 4 f . 
                f 4 4 4 4 4 4 4 4 4 4 6 4 4 4 f 
                f 4 4 6 4 4 4 6 4 4 4 4 4 4 4 f 
                f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
                f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
                f 4 4 4 6 4 4 4 4 6 4 4 6 4 4 f 
                f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
                . f 4 4 4 4 4 4 4 4 4 4 4 4 f . 
                . f 4 4 4 4 4 6 4 4 4 4 4 4 f . 
                . . f 4 4 4 4 4 4 4 4 4 4 f . . 
                . . . f f 4 4 4 4 4 4 f f . . . 
                . . . . . f f f f f f . . . . . 
                `, SpriteKind.Projectile)
            Cookie.setPosition(randint(10, 150), 0)
            Cookie.vy = 70
        }
        if (SelectedCookie == 2) {
            Cookie = sprites.create(img`
                . . . . . f f f f f f . . . . . 
                . . . f f d d d d d d f f . . . 
                . . f d d d d d 6 d d d d f . . 
                . f d d 6 d d d d d d d d d f . 
                . f d d d d d d d d d d d d f . 
                f d d d d d d d d d d 6 d d d f 
                f d d 6 d d d 6 d d d d d d d f 
                f d d d d d d d d d d d d d d f 
                f d d d d d d d d d d d d d d f 
                f d d d 6 d d d d 6 d d 6 d d f 
                f d d d d d d d d d d d d d d f 
                . f d d d d d d d d d d d d f . 
                . f d d d d d 6 d d d d d d f . 
                . . f d d d d d d d d d d f . . 
                . . . f f d d d d d d f f . . . 
                . . . . . f f f f f f . . . . . 
                `, SpriteKind.Projectile)
            Cookie.setPosition(randint(10, 150), 0)
            Cookie.vy = 70
        }
        if (SelectedCookie == 3) {
            Cookie = sprites.create(img`
                . . . . . f f f f f f . . . . . 
                . . . f f 6 6 6 6 6 6 f f . . . 
                . . f 6 6 6 6 6 d 6 6 6 6 f . . 
                . f 6 6 d 6 6 6 6 6 6 6 6 6 f . 
                . f 6 6 6 6 6 6 6 6 6 6 6 6 f . 
                f 6 6 6 6 6 6 6 6 6 6 d 6 6 6 f 
                f 6 6 d 6 6 6 d 6 6 6 6 6 6 6 f 
                f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
                f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
                f 6 6 6 d 6 6 6 6 d 6 6 d 6 6 f 
                f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
                . f 6 6 6 6 6 6 6 6 6 6 6 6 f . 
                . f 6 6 6 6 6 d 6 6 6 6 6 6 f . 
                . . f 6 6 6 6 6 6 6 6 6 6 f . . 
                . . . f f 6 6 6 6 6 6 f f . . . 
                . . . . . f f f f f f . . . . . 
                `, SpriteKind.Projectile)
            Cookie.setPosition(randint(10, 150), 0)
            Cookie.vy = 70
        }
        if (SelectedCookie == 4) {
            Cookie = sprites.create(img`
                . . . . . f f f f f f . . . . . 
                . . . f f 4 4 4 4 4 4 f f . . . 
                . . f 4 4 4 4 4 4 4 4 4 4 f . . 
                . f 4 4 4 4 4 4 4 4 4 4 4 4 f . 
                . f 4 4 4 4 4 4 4 4 4 4 4 4 f . 
                f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
                f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
                f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
                f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
                f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
                f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
                . f 4 4 4 4 4 4 4 4 4 4 4 4 f . 
                . f 4 4 4 4 4 4 4 4 4 4 4 4 f . 
                . . f 4 4 4 4 4 4 4 4 4 4 f . . 
                . . . f f 4 4 4 4 4 4 f f . . . 
                . . . . . f f f f f f . . . . . 
                `, SpriteKind.Projectile)
            Cookie.setPosition(randint(10, 150), 0)
            Cookie.vy = 70
        }
        if (SelectedCookie == 5) {
            Cookie = sprites.create(img`
                . . . . . f f f f f f . . . . . 
                . . . f f 4 4 4 4 4 4 f f . . . 
                . . f 4 4 4 4 6 4 4 4 4 4 f . . 
                . f 4 4 4 4 4 4 4 4 6 6 4 4 f . 
                . f 4 4 6 6 4 4 6 4 6 6 4 4 f . 
                f 4 4 4 6 6 4 4 4 4 4 4 4 4 4 f 
                f 4 6 4 4 4 4 4 4 4 4 4 4 6 4 f 
                f 4 4 4 4 4 4 4 4 4 6 6 4 4 4 f 
                f 4 6 4 4 6 4 4 4 4 6 6 4 4 4 f 
                f 4 4 4 4 4 4 4 4 4 4 4 4 6 4 f 
                f 4 4 4 4 4 4 4 4 6 4 4 4 4 4 f 
                . f 4 4 4 6 6 4 4 4 4 4 4 4 f . 
                . f 4 4 4 6 6 4 4 4 6 4 4 4 f . 
                . . f 4 4 4 4 4 6 4 4 4 4 f . . 
                . . . f f 4 4 4 4 4 4 f f . . . 
                . . . . . f f f f f f . . . . . 
                `, SpriteKind.Projectile)
            Cookie.setPosition(randint(10, 150), 0)
            Cookie.vy = 70
        }
        if (SelectedCookie == 5) {
            Cookie = sprites.create(img`
                . . . . . f f f f f f . . . . . 
                . . . f f 4 4 4 4 4 4 f f . . . 
                . . f 4 4 4 4 6 4 4 4 4 4 f . . 
                . f 4 4 4 4 4 4 4 4 6 6 4 4 f . 
                . f 4 4 6 6 4 4 6 4 6 6 4 4 f . 
                f 4 4 4 6 6 4 4 4 4 4 4 4 4 4 f 
                f 4 6 4 4 4 4 4 4 4 4 4 4 6 4 f 
                f 4 4 4 4 4 4 4 4 4 6 6 4 4 4 f 
                f 4 6 4 4 6 4 4 4 4 6 6 4 4 4 f 
                f 4 4 4 4 4 4 4 4 4 4 4 4 6 4 f 
                f 4 4 4 4 4 4 4 4 6 4 4 4 4 4 f 
                . f 4 4 4 6 6 4 4 4 4 4 4 4 f . 
                . f 4 4 4 6 6 4 4 4 6 4 4 4 f . 
                . . f 4 4 4 4 4 6 4 4 4 4 f . . 
                . . . f f 4 4 4 4 4 4 f f . . . 
                . . . . . f f f f f f . . . . . 
                `, SpriteKind.Projectile)
            Cookie.setPosition(randint(10, 150), 0)
            Cookie.vy = 70
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Milk, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        if (controller.up.isPressed()) {
            if (Milk.y > 60) {
                Milk.y += -1
                timer.after(5000, function () {
                    Milk.y += 1
                })
            }
        }
    }
})
sprites.onOverlap(SpriteKind.GoldenCookie, SpriteKind.Player, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        sprites.destroy(sprite)
        if (Math.percentChance(50)) {
            CookieAmount += 100
        } else if (Math.percentChance(75)) {
            CookieAmount += 500
        } else if (Math.percentChance(50)) {
            CookieAmount += 1000
            for (let index = 0; index < 2; index++) {
                GoldenCookie = sprites.create(img`
                    ......999999......
                    ....99ffffff99....
                    ...9ff555555ff9...
                    ..9f5555515555f9..
                    .9f551555555555f9.
                    .9f555555555555f9.
                    9f55555555551555f9
                    9f55155515555555f9
                    9f55555555555555f9
                    9f55555555555555f9
                    9f55515555155155f9
                    9f55555555555555f9
                    .9f555555555555f9.
                    .9f555551555555f9.
                    ..9f5555555555f9..
                    ...9ff555555ff9...
                    ....99ffffff99....
                    ......999999......
                    `, SpriteKind.GoldenCookie)
                GoldenCookie.setPosition(randint(10, 150), 0)
                GoldenCookie.vy = 70
            }
        } else if (Math.percentChance(75)) {
            CookieAmount += 2500
            for (let index = 0; index < 3; index++) {
                GoldenCookie = sprites.create(img`
                    ......999999......
                    ....99ffffff99....
                    ...9ff555555ff9...
                    ..9f5555515555f9..
                    .9f551555555555f9.
                    .9f555555555555f9.
                    9f55555555551555f9
                    9f55155515555555f9
                    9f55555555555555f9
                    9f55555555555555f9
                    9f55515555155155f9
                    9f55555555555555f9
                    .9f555555555555f9.
                    .9f555551555555f9.
                    ..9f5555555555f9..
                    ...9ff555555ff9...
                    ....99ffffff99....
                    ......999999......
                    `, SpriteKind.GoldenCookie)
                GoldenCookie.setPosition(randint(10, 150), 0)
                GoldenCookie.vy = 70
            }
        } else {
            CookieAmount += 7770
            for (let index = 0; index < 4; index++) {
                GoldenCookie = sprites.create(img`
                    ......999999......
                    ....99ffffff99....
                    ...9ff555555ff9...
                    ..9f5555515555f9..
                    .9f551555555555f9.
                    .9f555555555555f9.
                    9f55555555551555f9
                    9f55155515555555f9
                    9f55555555555555f9
                    9f55555555555555f9
                    9f55515555155155f9
                    9f55555555555555f9
                    .9f555555555555f9.
                    .9f555551555555f9.
                    ..9f5555555555f9..
                    ...9ff555555ff9...
                    ....99ffffff99....
                    ......999999......
                    `, SpriteKind.GoldenCookie)
                GoldenCookie.setPosition(randint(10, 150), 0)
                GoldenCookie.vy = 70
            }
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.CheatMenu, function (sprite, otherSprite) {
    if (CheatMenuActivated == 1) {
        if (controller.B.isPressed()) {
            pause(500)
            CheatMenu.close()
            CheatMenuActivated = 0
        }
    }
    if (CheatMenuActivated == 0) {
        if (controller.A.isPressed()) {
            pause(500)
            CheatMenuActivated = 1
            CheatMenu = miniMenu.createMenuFromArray([
            miniMenu.createMenuItem("GoldenCookie", img`
                . . . . . f f f f f f . . . . . 
                . . . f f 5 5 5 5 5 5 f f . . . 
                . . f 5 5 5 5 5 5 5 5 5 5 f . . 
                . f 5 5 5 5 5 5 1 5 5 5 5 5 f . 
                . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
                f 5 5 5 5 1 5 5 5 5 1 5 5 5 5 f 
                f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
                f 5 5 1 5 5 5 5 5 5 5 5 5 5 5 f 
                f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
                f 5 5 5 5 5 5 1 5 5 5 5 5 5 5 f 
                f 5 5 5 5 5 5 5 5 5 5 5 5 5 5 f 
                . f 5 5 5 1 5 5 5 5 1 5 5 5 f . 
                . f 5 5 5 5 5 5 5 5 5 5 5 5 f . 
                . . f 5 5 5 5 5 5 5 5 5 5 f . . 
                . . . f f 5 5 5 5 5 5 f f . . . 
                . . . . . f f f f f f . . . . . 
                `),
            miniMenu.createMenuItem("+1KCookies", img`
                . . . . . c c c c c c . . . . . 
                . . . c c f f f f f f c c . . . 
                . . c f f f f f f f f f f c . . 
                . c f f f f f f f f f f f f c . 
                . c f f f 1 1 f 1 f f f 1 f c . 
                c f f f f f 1 f 1 f f 1 f f f c 
                c f f f f f 1 f 1 f 1 f f f f c 
                c f f 1 f f 1 f 1 1 1 f f f f c 
                c f 1 1 1 f 1 f 1 1 1 f f f f c 
                c f f 1 f f 1 f 1 f 1 f f f f c 
                c f f f f f 1 f 1 f f 1 f f f c 
                . c f f f f 1 f 1 f f f 1 f c . 
                . c f f f f f f f f f f f f c . 
                . . c f f f f f f f f f f c . . 
                . . . c c f f f f f f c c . . . 
                . . . . . c c c c c c . . . . . 
                `),
            miniMenu.createMenuItem("0Cookies", img`
                . . . . . c c c c c c . . . . . 
                . . . c c f f f f f f c c . . . 
                . . c f f f f f f f f f f c . . 
                . c f f f f 1 1 1 1 f f f f c . 
                . c f f f 1 1 f f 1 1 f f f c . 
                c f f f f 1 f f f f 1 f f f f c 
                c f f f f 1 f f f f 1 f f f f c 
                c f f f f 1 f f f f 1 f f f f c 
                c f f f f 1 f f f f 1 f f f f c 
                c f f f f 1 f f f f 1 f f f f c 
                c f f f f 1 f f f f 1 f f f f c 
                . c f f f 1 1 f f 1 1 f f f c . 
                . c f f f f 1 1 1 1 f f f f c . 
                . . c f f f f f f f f f f c . . 
                . . . c c f f f f f f c c . . . 
                . . . . . c c c c c c . . . . . 
                `),
            miniMenu.createMenuItem("Wipe", img`
                . . . . f f f . . . . 
                . . f f 1 d d f f . . 
                . f 1 1 1 1 d d d f . 
                . f 1 1 1 1 1 1 d f . 
                f 1 1 f f 1 f f d d f 
                f 1 f f f 1 f f f d f 
                f 1 f f f 1 f f f d f 
                f 1 1 1 1 1 1 1 1 d f 
                f 1 1 1 1 f 1 d d d f 
                . f f 1 1 1 1 d f f . 
                . . . f 1 f 1 f . . . 
                . . . f f f f f . . . 
                `),
            miniMenu.createMenuItem("Milk", img`
                d . . . . . . d 
                d 1 1 1 1 1 1 d 
                d 1 1 1 1 1 1 d 
                d 1 1 1 1 1 1 d 
                d 1 1 1 1 1 1 d 
                d 1 1 1 1 1 1 d 
                d 1 1 1 1 1 1 d 
                d 1 1 1 1 1 1 d 
                d 1 1 1 1 1 1 d 
                d 1 1 1 1 1 1 d 
                d 1 1 1 1 1 1 d 
                d 1 1 1 1 1 1 d 
                d 1 1 1 1 1 1 d 
                d 1 1 1 1 1 1 d 
                d 1 1 1 1 1 1 d 
                d d d d d d d d 
                `)
            ])
            CheatMenu.setTitle("Cheats")
            CheatMenu.setFrame(img`
                . . . . . . . . . . . . . . . 
                . . 6 6 6 6 6 6 6 6 6 6 6 . . 
                . 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
                . 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
                . 6 6 6 6 d d d d d 6 6 6 6 . 
                . 6 6 6 d d d d d d d 6 6 6 . 
                . 6 6 6 d d d d d d d 6 6 6 . 
                . 6 6 6 d d d d d d d 6 6 6 . 
                . 6 6 6 d d d d d d d 6 6 6 . 
                . 6 6 6 d d d d d d d 6 6 6 . 
                . 6 6 6 6 d d d d d 6 6 6 6 . 
                . 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
                . 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
                . . 6 6 6 6 6 6 6 6 6 6 6 . . 
                . . . . . . . . . . . . . . . 
                `)
            CheatMenu.onButtonPressed(controller.A, function (selection, selectedIndex) {
                if (selectedIndex == 0) {
                    GoldenCookie = sprites.create(img`
                        ......999999......
                        ....99ffffff99....
                        ...9ff555555ff9...
                        ..9f5555515555f9..
                        .9f551555555555f9.
                        .9f555555555555f9.
                        9f55555555551555f9
                        9f55155515555555f9
                        9f55555555555555f9
                        9f55555555555555f9
                        9f55515555155155f9
                        9f55555555555555f9
                        .9f555555555555f9.
                        .9f555551555555f9.
                        ..9f5555555555f9..
                        ...9ff555555ff9...
                        ....99ffffff99....
                        ......999999......
                        `, SpriteKind.GoldenCookie)
                    GoldenCookie.setPosition(randint(10, 150), 0)
                    GoldenCookie.vy = 70
                }
                if (selectedIndex == 1) {
                    CookieAmount += 1000
                } else if (selectedIndex == 2) {
                    CookieAmount = 0
                } else if (selectedIndex == 3) {
                    game.reset()
                } else if (selectedIndex == 4) {
                    Cookie = sprites.create(img`
                        d . . . . . . d 
                        d 1 1 1 1 1 1 d 
                        d 1 1 1 1 1 1 d 
                        d 1 1 1 1 1 1 d 
                        d 1 1 1 1 1 1 d 
                        d 1 1 1 1 1 1 d 
                        d 1 1 1 1 1 1 d 
                        d 1 1 1 1 1 1 d 
                        d 1 1 1 1 1 1 d 
                        d 1 1 1 1 1 1 d 
                        d 1 1 1 1 1 1 d 
                        d 1 1 1 1 1 1 d 
                        d 1 1 1 1 1 1 d 
                        d 1 1 1 1 1 1 d 
                        d 1 1 1 1 1 1 d 
                        d d d d d d d d 
                        `, SpriteKind.milkglass)
                    Cookie.setPosition(randint(10, 150), 0)
                    Cookie.vy = 70
                }
            })
        }
    }
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Milk, function (sprite, otherSprite) {
    CookieAmount += 1 * CookieWorth
    sprites.destroy(sprite)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Upgrade, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        if (UpgradeNumber == 1) {
            if (CookieAmount > 99) {
                CookieAmount += -100
                CookieWorth += 1
                RandomCookie += 1
                sprites.destroy(otherSprite)
                Upgrade = sprites.create(img`
                    6666666666666666666666666666666666666666
                    6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6
                    6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6
                    6eeeeffffeeeeeddeeeddeeeddeeeeeeeeeeeee6
                    6eeefddddfeeeeedeedeededeedeeeeeeeeeeee6
                    6eefddddddfeeeedeedeededeedeeeeeeeeeeee6
                    6efdd6dd6ddfeeedeedeededeedeeeeeeeeeeee6
                    6efddddddddfeeedeedeededeedeeeeeeeeeeee6
                    6efd6dddd6dfeeedeedeededeedeeeeeeeeeeee6
                    6efddddddddfeeedeedeededeedeeeeeeeeeeee6
                    6eefddd6ddfeeeedeedeededeedeeeeeeeeeeee6
                    6eeefddddfeeeeedeedeededeedeeeeeeeeeeee6
                    6eeeeffffeeeeedddeeddeeeddeeeeeeeeeeeee6
                    6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6
                    6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6
                    6666666666666666666666666666666666666666
                    `, SpriteKind.Upgrade)
                animation.runImageAnimation(
                Upgrade,
                [img`
                    6666666666666666666666666666666666666666
                    6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6
                    6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6
                    6eeeeffffeeeeeeddeeddddeeddeeeeeeeeeeee6
                    6eeef6666feeeedeededeededeedeeeeeeeeeee6
                    6eef666666feeeeeededeeeedeedeeeeeeeeeee6
                    6ef66d66d66feeeedeedddeedeedeeeeeeeeeee6
                    6ef66666666feeeedeeeeededeedeeeeeeeeeee6
                    6ef6d6666d6feeedeeeeeededeedeeeeeeeeeee6
                    6ef66666666feeedeeeeeededeedeeeeeeeeeee6
                    6eef666d66feeedeeeeeeededeedeeeeeeeeeee6
                    6eeef6666feeeedeeeedeededeedeeeeeeeeeee6
                    6eeeeffffeeeeeddddeeddeeeddeeeeeeeeeeee6
                    6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6
                    6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6
                    6666666666666666666666666666666666666666
                    `],
                0,
                false
                )
                Upgrade.setPosition(140, 8)
                UpgradeNumber = 2
            }
        } else if (UpgradeNumber == 2) {
            if (CookieAmount > 249) {
                CookieAmount += -250
                CookieWorth += 1
                RandomCookie += 1
                sprites.destroy(otherSprite)
                Upgrade = sprites.create(img`
                    6666666666666666666666666666666666666666
                    6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6
                    6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6
                    6eeeeffffeeeeeddeeeddeeeddeeeeeeeeeeeee6
                    6eeefddddfeeeeedeedeededeedeeeeeeeeeeee6
                    6eefddddddfeeeedeedeededeedeeeeeeeeeeee6
                    6efdd6dd6ddfeeedeedeededeedeeeeeeeeeeee6
                    6efddddddddfeeedeedeededeedeeeeeeeeeeee6
                    6efd6dddd6dfeeedeedeededeedeeeeeeeeeeee6
                    6efddddddddfeeedeedeededeedeeeeeeeeeeee6
                    6eefddd6ddfeeeedeedeededeedeeeeeeeeeeee6
                    6eeefddddfeeeeedeedeededeedeeeeeeeeeeee6
                    6eeeeffffeeeeedddeeddeeeddeeeeeeeeeeeee6
                    6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6
                    6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6
                    6666666666666666666666666666666666666666
                    `, SpriteKind.Upgrade)
                animation.runImageAnimation(
                Upgrade,
                [img`
                    6666666666666666666666666666666666666666
                    6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6
                    6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6
                    6eeeeffffeeeeeddeeeddeeeddeeeddeeeeeeee6
                    6eeef4444feeeeedeedeededeededeedeeeeeee6
                    6eef444444feeeedeedeededeededeedeeeeeee6
                    6ef44444444feeedeedeededeededeedeeeeeee6
                    6ef44444444feeedeedeededeededeedeeeeeee6
                    6ef44444444feeedeedeededeededeedeeeeeee6
                    6ef44444444feeedeedeededeededeedeeeeeee6
                    6eef444444feeeedeedeededeededeedeeeeeee6
                    6eeef4444feeeeedeedeededeededeedeeeeeee6
                    6eeeeffffeeeeedddeeddeeeddeeeddeeeeeeee6
                    6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6
                    6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6
                    6666666666666666666666666666666666666666
                    `],
                0,
                false
                )
                Upgrade.setPosition(140, 8)
                UpgradeNumber = 3
            }
        } else if (UpgradeNumber == 3) {
            if (CookieAmount > 999) {
                CookieAmount += -1000
                CookieWorth += 1
                RandomCookie += 1
                sprites.destroy(otherSprite)
                Upgrade = sprites.create(img`
                    6666666666666666666666666666666666666666
                    6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6
                    6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6
                    6eeeeffffeeeeeddeeeddeeeddeeeeeeeeeeeee6
                    6eeef4444feeeeedeedeededeedeeeeeeeeeeee6
                    6eef444444feeeedeedeededeedeeeeeeeeeeee6
                    6ef44444444feeedeedeededeedeeeeeeeeeeee6
                    6ef44444444feeedeedeededeedeeeeeeeeeeee6
                    6ef44444444feeedeedeededeedeeeeeeeeeeee6
                    6ef44444444feeedeedeededeedeeeeeeeeeeee6
                    6eef444444feeeedeedeededeedeeeeeeeeeeee6
                    6eeef4444feeeeedeedeededeedeeeeeeeeeeee6
                    6eeeeffffeeeeedddeeddeeeddeeeeeeeeeeeee6
                    6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6
                    6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6
                    6666666666666666666666666666666666666666
                    `, SpriteKind.Upgrade)
                animation.runImageAnimation(
                Upgrade,
                [img`
                    6666666666666666666666666666666666666666
                    6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6
                    6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6
                    6eeeeffffeeeeeddeeeddeeeddeeeddeeeeeeee6
                    6eeeffffffeeeeedeedeededeededeedeeeeeee6
                    6eeffffffffeeeedeedeededeededeedeeeeeee6
                    6efff11fffffeeedeedeededeededeedeeeeeee6
                    6efffff1ffffeeedeedeededeededeedeeeeeee6
                    6efffff1ffffeeedeedeededeededeedeeeeeee6
                    6effff1fffffeeedeedeededeededeedeeeeeee6
                    6eefff1ffffeeeedeedeededeededeedeeeeeee6
                    6eeeff1fffeeeeedeedeededeededeedeeeeeee6
                    6eeeeffffeeeeedddeeddeeeddeeeddeeeeeeee6
                    6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6
                    6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6
                    6666666666666666666666666666666666666666
                    `],
                100,
                false
                )
                Upgrade.setPosition(140, 8)
                UpgradeNumber = 3
            }
        }
    }
})
sprites.onOverlap(SpriteKind.GoldenCookie, SpriteKind.Milk, function (sprite, otherSprite) {
    CookieAmount += 7 * CookieWorth
    sprites.destroy(sprite)
})
sprites.onOverlap(SpriteKind.milkglass, SpriteKind.Milk, function (sprite, otherSprite) {
    if (Milk.y > 60) {
        otherSprite.y += -1
    }
    sprites.destroy(sprite)
})
controller.combos.attachCombo("AABBABAA", function () {
    CheatMenuIcon = sprites.create(img`
        . . . . . f f f f f f . . . . . 
        . . . f f 7 7 7 5 7 7 f f . . . 
        . . f 7 5 7 7 7 f 7 7 7 7 f . . 
        . f 5 7 f 7 7 7 5 7 7 7 7 7 f . 
        . f 5 7 5 7 7 7 5 7 7 7 7 7 f . 
        f 7 5 7 5 7 7 7 5 5 f 5 5 5 7 f 
        f 7 5 f 5 7 7 f 7 7 7 7 7 5 7 f 
        f 7 5 7 5 7 7 7 7 7 7 7 7 5 5 f 
        f 7 5 7 5 5 5 5 7 7 7 7 7 7 7 f 
        f 7 5 7 f 7 7 5 7 f 7 7 f 7 7 f 
        f 7 5 7 7 7 7 5 7 7 7 7 7 7 7 f 
        . f 5 5 5 5 7 5 7 7 7 7 7 7 f . 
        . f 7 7 7 5 7 f 5 5 5 5 5 5 f . 
        . . f 7 7 5 7 7 7 7 7 7 7 f . . 
        . . . f f 5 7 7 7 7 7 f f . . . 
        . . . . . f f f f f f . . . . . 
        `, SpriteKind.CheatMenu)
    CheatMenuIcon.setPosition(150, 110)
})
let CheatMenuIcon: Sprite = null
let CheatMenu: miniMenu.MenuSprite = null
let CheatMenuActivated = 0
let CookieAmount = 0
let Cookie: Sprite = null
let GoldenCookie: Sprite = null
let SelectedCookie = 0
let CookieWorth = 0
let UpgradeNumber = 0
let Upgrade: Sprite = null
let RandomCookie = 0
let Milk: Sprite = null
let Cursor: Sprite = null
let BigCookie: Sprite = null
scene.setBackgroundColor(14)
BigCookie = sprites.create(img`
    . . . . . f f f f f f . . . . . 
    . . . f f 4 4 4 4 4 4 f f . . . 
    . . f 4 4 4 4 4 6 4 4 4 4 f . . 
    . f 4 4 6 4 4 4 4 4 4 4 4 4 f . 
    . f 4 4 4 4 4 4 4 4 4 4 4 4 f . 
    f 4 4 4 4 4 4 4 4 4 4 6 4 4 4 f 
    f 4 4 6 4 4 4 6 4 4 4 4 4 4 4 f 
    f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
    f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
    f 4 4 4 6 4 4 4 4 6 4 4 6 4 4 f 
    f 4 4 4 4 4 4 4 4 4 4 4 4 4 4 f 
    . f 4 4 4 4 4 4 4 4 4 4 4 4 f . 
    . f 4 4 4 4 4 6 4 4 4 4 4 4 f . 
    . . f 4 4 4 4 4 4 4 4 4 4 f . . 
    . . . f f 4 4 4 4 4 4 f f . . . 
    . . . . . f f f f f f . . . . . 
    `, SpriteKind.BigCookie)
BigCookie.changeScale(3, ScaleAnchor.Middle)
BigCookie.setPosition(80, 50)
Cursor = sprites.create(img`
    f f . . . . . 
    f 1 f . . . . 
    f 1 1 f . . . 
    f 1 1 1 f . . 
    f 1 1 1 1 f . 
    f 1 1 1 1 1 f 
    f 1 1 1 f f f 
    f 1 f 1 1 f . 
    f f f 1 1 f . 
    . . . f f . . 
    `, SpriteKind.Player)
controller.moveSprite(Cursor)
Cursor.setStayInScreen(true)
Milk = sprites.create(img`
    ................................................................................................................................................................
    ................................................................................................................................................................
    ................................................................................................................................................................
    ..........ddddddddddddd.........................................................................................................................................
    ........ddddddddddddddddd.......................................................................................................................................
    .......dddddddddddddddddddd.....................................................................................................................................
    .....ddddddd111111111dddddddd..............ddddddddddd..................................................ddddddd.................................................
    ....dddddd1111111111111dddddddd.......ddddddddddddddddddddd................................dddddddddddddddddddddddd..................................ddddddddddd
    ...dddddd1111111111111111ddddddd...dddddddddddddddddddddddddd..........................dddddddddddddddddddddddddddddd...........................dddddddddddddddd
    ..ddddd11111111111111111111dddddddddddddddddd1111111dddddddddddd...................ddddddddddddddddddddddd111ddddddddddd.....................ddddddddddddddddddd
    dddddd11111111111111111111111ddddddddddd1111111111111111ddddddddddddd...........ddddddddddddd11111111111111111111dddddddddddd............dddddddddddddd111111111
    ddddd1111111111111111111111111ddddddd1111111111111111111111dddddddddddddddddddddddddddddd11111111111111111111111111ddddddddddddd..dddddddddddddddd11111111111111
    dddd1111111111111111111111111111111111111111111111111111111111ddddddddddddddddddddddd111111111111111111111111111111111ddddddddddddddddddddddddd11111111111111111
    ddd1111111111111111111111111111111111111111111111111111111111111111ddddddddddddddd11111111111111111111111111111111111111111dddddddddddddddd111111111111111111111
    111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111dddddd1111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111
    `, SpriteKind.Milk)
Milk.setPosition(80, 120 + 40)
RandomCookie = 1
Upgrade = sprites.create(img`
    6666666666666666666666666666666666666666
    6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6
    6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6
    6eeeeffffeeeeeddeeeddeeeddeeeeeeeeeeeee6
    6eeefddddfeeeeedeedeededeedeeeeeeeeeeee6
    6eefddddddfeeeedeedeededeedeeeeeeeeeeee6
    6efdd6dd6ddfeeedeedeededeedeeeeeeeeeeee6
    6efddddddddfeeedeedeededeedeeeeeeeeeeee6
    6efd6dddd6dfeeedeedeededeedeeeeeeeeeeee6
    6efddddddddfeeedeedeededeedeeeeeeeeeeee6
    6eefddd6ddfeeeedeedeededeedeeeeeeeeeeee6
    6eeefddddfeeeeedeedeededeedeeeeeeeeeeee6
    6eeeeffffeeeeedddeeddeeeddeeeeeeeeeeeee6
    6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6
    6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6
    6666666666666666666666666666666666666666
    `, SpriteKind.Upgrade)
Upgrade.setPosition(140, 8)
UpgradeNumber = 1
let CookieCounter = textsprite.create("0", 0, 6)
CookieCounter.setPosition(7, 7)
CookieCounter.changeScale(1, ScaleAnchor.Middle)
CookieWorth = 1
forever(function () {
    CookieCounter.setText(convertToText(CookieAmount))
})
