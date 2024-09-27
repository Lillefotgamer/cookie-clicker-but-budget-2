namespace SpriteKind {
    export const BigCookie = SpriteKind.create()
    export const Milk = SpriteKind.create()
    export const Upgrade = SpriteKind.create()
    export const GoldenCookie = SpriteKind.create()
    export const CheatMenu = SpriteKind.create()
    export const milkglass = SpriteKind.create()
    export const BuyKid = SpriteKind.create()
    export const BuyPlant = SpriteKind.create()
    export const BuyFactory = SpriteKind.create()
    export const CookieBank = SpriteKind.create()
    export const CookieHacking = SpriteKind.create()
    export const InAnimation = SpriteKind.create()
    export const Other = SpriteKind.create()
    export const Other2 = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.BuyPlant, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        if (CookieAmount > 999) {
            PlantAmount += 1
            CookieAmount += -1000
        }
    }
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    timer.background(function () {
        if (GardenOpen == 1) {
            Bclick()
        }
    })
    if (GardenOpen == 0) {
        if (GameStarted == 0) {
            color.FadeToBlack.startScreenEffect(1000)
            pause(2500)
            GardenOpen = 1
            sprites.destroy(textSprite)
            sprites.destroy(Textsprite2)
            sprites.destroy(TextSprite3)
            sprites.destroy(PressAToStart)
            color.startFadeFromCurrent(color.originalPalette, 1000)
            tiles.setCurrentTilemap(tilemap`level16`)
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
            CookieCounter = textsprite.create("0", 0, 7)
            CookieCounter.setPosition(7, 113)
            CookieCounter.changeScale(1, ScaleAnchor.Middle)
            CookieAmount = 0
            timer.background(function () {
                for (let index = 0; index < 999999 * 999999; index++) {
                    GardenTick()
                    pause(300)
                }
            })
        }
    }
})
function CallPlantKill () {
    if (tiles.tileAtLocationEquals(tiles.getTileLocation(randint(5, 0), randint(0, 9)), assets.tile`myTile12`) || (tiles.tileAtLocationEquals(tiles.getTileLocation(randint(5, 0), randint(0, 9)), assets.tile`myTile17`) || (tiles.tileAtLocationEquals(tiles.getTileLocation(randint(5, 0), randint(0, 9)), assets.tile`myTile16`) || tiles.tileAtLocationEquals(tiles.getTileLocation(randint(5, 0), randint(0, 9)), assets.tile`myTile13`)))) {
        GrowWeed = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Other)
        tiles.placeOnRandomTile(GrowWeed, assets.tile`myTile12`)
        tiles.setTileAt(tiles.locationOfSprite(GrowWeed), assets.tile`myTile24`)
        sprites.destroyAllSpritesOfKind(SpriteKind.Other)
    }
    sprites.destroyAllSpritesOfKind(SpriteKind.Other)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Click()
    if (GameStarted == 1) {
        if (Cursor.overlapsWith(BigCookie)) {
            animation.runImageAnimation(
            BigCookie,
            [img`
                ......ffffff......
                ....ff444444ff....
                ...f4444444444f...
                ..f444444644444f..
                .f44464444444444f.
                .f44444444444444f.
                f4444444444464444f
                f4446444644444444f
                f4444444444444444f
                f4444444444444444f
                f4444644446446444f
                f4444444444444444f
                .f44444444444444f.
                .f44444464444444f.
                ..f444444444444f..
                ...f4444444444f...
                ....ff444444ff....
                ......ffffff......
                `,img`
                ..................
                ......ffffff......
                ....ff444444ff....
                ...f4444464444f...
                ..f446444444444f..
                ..f444444444444f..
                .f44444444446444f.
                .f44644464444444f.
                .f44444444444444f.
                .f44444444444444f.
                .f44464444644644f.
                .f44444444444444f.
                ..f444444444444f..
                ..f444446444444f..
                ...f4444444444f...
                ....ff444444ff....
                ......ffffff......
                ..................
                `],
            100,
            false
            )
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
            if (SelectedCookie == 6) {
                Cookie = sprites.create(img`
                    . . f f f f f f f f f f f f . . 
                    . f d d d d d d 6 6 6 6 6 6 f . 
                    f d d d d d d d 6 6 6 6 6 6 6 f 
                    f d d d d d d d 6 6 6 6 6 6 6 f 
                    f d d d d d d d 6 6 6 6 6 6 6 f 
                    f d d d d d d d 6 6 6 6 6 6 6 f 
                    f d d d d d d d 6 6 6 6 6 6 6 f 
                    f d d d d d d d 6 6 6 6 6 6 6 f 
                    f 6 6 6 6 6 6 6 d d d d d d d f 
                    f 6 6 6 6 6 6 6 d d d d d d d f 
                    f 6 6 6 6 6 6 6 d d d d d d d f 
                    f 6 6 6 6 6 6 6 d d d d d d d f 
                    f 6 6 6 6 6 6 6 d d d d d d d f 
                    f 6 6 6 6 6 6 6 d d d d d d d f 
                    . f 6 6 6 6 6 6 d d d d d d f . 
                    . . f f f f f f f f f f f f . . 
                    `, SpriteKind.Projectile)
                Cookie.setPosition(randint(10, 150), 0)
                Cookie.vy = 70
            }
            if (SelectedCookie == 7) {
                Cookie = sprites.create(img`
                    . . . . . f f f f f f . . . . . 
                    . . . f f e 6 e e 6 e f f . . . 
                    . . f 6 e e 6 e e 6 e e 6 f . . 
                    . f 6 6 6 6 6 6 6 6 6 6 6 6 f . 
                    . f e 6 e e 6 e e 6 e e 6 e f . 
                    f e e 6 e e 6 e e 6 e e 6 e e f 
                    f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
                    f e e 6 e e 6 e e 6 e e 6 e e f 
                    f e e 6 e e 6 e e 6 e e 6 e e f 
                    f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 f 
                    f e e 6 e e 6 e e 6 e e 6 e e f 
                    . f e 6 e e 6 e e 6 e e 6 e f . 
                    . f 6 6 6 6 6 6 6 6 6 6 6 6 f . 
                    . . f 6 e e 6 e e 6 e e 6 f . . 
                    . . . f f e 6 e e 6 e f f . . . 
                    . . . . . f f f f f f . . . . . 
                    `, SpriteKind.Projectile)
                Cookie.setPosition(randint(10, 150), 0)
                Cookie.vy = 70
            }
            if (SelectedCookie == 8) {
                Cookie = sprites.create(img`
                    . . . . . f f f f f f . . . . . 
                    . . . f f 4 4 4 4 4 4 f f . . . 
                    . . f 4 4 e 4 e 4 e 4 4 4 f . . 
                    . f 4 4 e 4 e 4 e 4 e 4 4 4 f . 
                    . f 4 e 4 e 4 e 4 e 4 e 4 4 f . 
                    f 4 e 4 e 4 e 4 e 4 e 4 e 4 4 f 
                    f 4 4 e 4 e 4 e 4 e 4 e 4 e 4 f 
                    f 4 e 4 e 4 e 4 e 4 e 4 e 4 4 f 
                    f 4 4 e 4 e 4 e 4 e 4 e 4 e 4 f 
                    f 4 e 4 e 4 e 4 e 4 e 4 e 4 4 f 
                    f 4 4 e 4 e 4 e 4 e 4 e 4 e 4 f 
                    . f 4 4 e 4 e 4 e 4 e 4 e 4 f . 
                    . f 4 4 4 e 4 e 4 e 4 e 4 4 f . 
                    . . f 4 4 4 e 4 e 4 e 4 4 f . . 
                    . . . f f 4 4 4 4 4 4 f f . . . 
                    . . . . . f f f f f f . . . . . 
                    `, SpriteKind.Projectile)
                Cookie.setPosition(randint(10, 150), 0)
                Cookie.vy = 70
            }
            if (SelectedCookie == 9) {
                Cookie = sprites.create(img`
                    . . . . . f f f f f f . . . . . 
                    . . . f f 4 4 4 4 4 4 f f . . . 
                    . . f 4 4 4 4 4 6 4 4 4 4 f . . 
                    . f 4 4 6 4 4 4 4 4 4 4 4 4 f . 
                    . f 4 4 4 4 4 4 4 4 4 6 4 4 f . 
                    f 4 4 4 4 4 4 f f 4 4 4 4 4 4 f 
                    f 4 4 4 4 4 f . . f 4 4 4 4 4 f 
                    f 4 4 4 4 f . . . . f 4 4 4 4 f 
                    f 4 4 4 4 f . . . . f 4 4 4 4 f 
                    f 4 4 4 4 4 f . . f 4 4 4 6 4 f 
                    f 4 4 6 4 4 4 f f 4 4 4 4 4 4 f 
                    . f 4 4 4 4 4 4 4 4 4 4 4 4 f . 
                    . f 4 4 4 4 4 4 4 4 4 4 4 4 f . 
                    . . f 4 4 4 4 4 6 4 4 4 4 f . . 
                    . . . f f 4 4 4 4 4 4 f f . . . 
                    . . . . . f f f f f f . . . . . 
                    `, SpriteKind.Projectile)
                Cookie.setPosition(randint(10, 150), 0)
                Cookie.vy = 70
            }
            if (SelectedCookie == 10) {
                Cookie = sprites.create(img`
                    . . . . . . . f f f . . . . . . . 
                    . . . . . f f e e e f f . . . . . 
                    . . . f f e e e e e e e f f . . . 
                    . f f 4 4 4 4 6 4 e e e 4 4 f f . 
                    f e e e 4 4 4 4 4 6 4 4 4 e e e f 
                    f 4 4 4 e e 4 4 4 4 4 e e 4 4 4 f 
                    f 4 4 4 4 4 e e 4 e e 4 4 4 4 e f 
                    f 4 6 4 4 4 4 4 e 4 4 4 6 4 e e f 
                    f 4 4 4 4 4 4 4 e 4 4 4 4 4 e e f 
                    f 4 4 4 4 4 6 4 e 4 4 4 4 e e e f 
                    f 4 4 4 6 4 4 4 e 4 6 4 4 e 6 e f 
                    f 4 4 4 4 4 4 4 e 4 4 4 e e e e f 
                    . f f 4 4 4 4 4 e 4 4 e e e f f . 
                    . . . f f 4 4 4 e 4 4 e f f . . . 
                    . . . . . f f 4 e 4 f f . . . . . 
                    . . . . . . . f f f . . . . . . . 
                    `, SpriteKind.Projectile)
                Cookie.setPosition(randint(10, 150), 0)
                Cookie.vy = 70
            }
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Milk, function (sprite, otherSprite) {
    if (GameStarted == 1) {
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
    }
})
function Bclick () {
    if (GardenOpen == 1) {
        if (Tool == 0 || Tool == 1) {
            Tool = 2
            Cursor.sayText("Dig", 500, false)
        } else if (Tool == 2) {
            Tool = 3
            Cursor.sayText("Water", 500, false)
        } else if (Tool == 3) {
            Tool = 4
            Cursor.sayText("Harvest", 500, false)
        } else if (Tool == 4) {
            Tool = 1
            Cursor.sayText("Plant", 500, false)
        }
    }
}
sprites.onOverlap(SpriteKind.GoldenCookie, SpriteKind.Player, function (sprite, otherSprite) {
    if (GameStarted == 1) {
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
    sprite.setKind(SpriteKind.InAnimation)
    CookieAmount += 1 * CookieWorth
    sprite.vy = 0
    sprite.y += 5
    animation.runImageAnimation(
    sprite,
    [img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . 1 1 . . . 
        1 1 1 1 1 1 1 1 
        `,img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . 1 1 1 1 . . 
        1 1 1 1 1 1 1 1 
        `,img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . 1 1 1 1 . . 
        . . 1 1 1 1 . . 
        1 1 1 1 1 1 1 1 
        `,img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . d d . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . 1 1 1 1 . . 
        . . 1 1 1 1 . . 
        . . 1 1 1 1 . . 
        . 1 1 1 1 1 1 . 
        1 1 1 1 1 1 1 1 
        `,img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . d d . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . 1 1 1 1 . . 
        . . 1 1 1 1 . . 
        . . 1 1 1 1 . . 
        . . 1 1 1 1 . . 
        . 1 1 1 1 1 1 . 
        1 1 1 1 1 1 1 1 
        `,img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . d d . . . 
        . . . 1 1 . . . 
        . 1 . 1 1 . 1 . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . 1 1 1 1 . . 
        . . 1 1 1 1 . . 
        . . 1 1 1 1 . . 
        . 1 1 1 1 1 1 . 
        . 1 1 1 1 1 1 . 
        1 1 1 1 1 1 1 1 
        `,img`
        . . . . . . . . 
        . . . . . . . . 
        . . . d d . . . 
        d . . 1 1 . . d 
        . 1 . 1 1 . 1 . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . 1 1 1 1 . . 
        . . 1 1 1 1 . . 
        . . 1 1 1 1 . . 
        . 1 1 1 1 1 1 . 
        . 1 1 1 1 1 1 . 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        `,img`
        . . d d d d . . 
        d . . 1 1 . . d 
        . 1 . 1 1 . 1 . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . 1 1 1 1 . . 
        . . 1 1 1 1 . . 
        . . 1 1 1 1 . . 
        . 1 1 1 1 1 1 . 
        . 1 1 1 1 1 1 . 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        `,img`
        . . . . . . . . 
        . . . . . . . . 
        . . . d d . . . 
        d . . 1 1 . . d 
        . 1 . 1 1 . 1 . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . 1 1 1 1 . . 
        . . 1 1 1 1 . . 
        . . 1 1 1 1 . . 
        . 1 1 1 1 1 1 . 
        . 1 1 1 1 1 1 . 
        1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 
        `,img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . d d . . . 
        . . . 1 1 . . . 
        . 1 . 1 1 . 1 . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . 1 1 1 1 . . 
        . . 1 1 1 1 . . 
        . . 1 1 1 1 . . 
        . 1 1 1 1 1 1 . 
        . 1 1 1 1 1 1 . 
        1 1 1 1 1 1 1 1 
        `,img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . d d . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . 1 1 1 1 . . 
        . . 1 1 1 1 . . 
        . . 1 1 1 1 . . 
        . . 1 1 1 1 . . 
        . 1 1 1 1 1 1 . 
        1 1 1 1 1 1 1 1 
        `,img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . d d . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . 1 1 1 1 . . 
        . . 1 1 1 1 . . 
        . . 1 1 1 1 . . 
        . 1 1 1 1 1 1 . 
        1 1 1 1 1 1 1 1 
        `,img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . 1 1 1 1 . . 
        . . 1 1 1 1 . . 
        1 1 1 1 1 1 1 1 
        `,img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . 1 1 . . . 
        . . . 1 1 . . . 
        . . 1 1 1 1 . . 
        1 1 1 1 1 1 1 1 
        `,img`
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . . . . . . 
        . . . 1 1 . . . 
        1 1 1 1 1 1 1 1 
        `],
    100,
    false
    )
    sprite.changeScale(1, ScaleAnchor.Middle)
    timer.after(1900, function () {
        sprites.destroy(sprite)
    })
})
function RunMutation () {
    WhichMutation = randint(1, 11)
    if (WhichMutation == 1) {
        if (RandomMutation == 1) {
            if (Mutation.tileKindAt(TileDirection.Left, assets.tile`myTile15`)) {
                tiles.setTileAt(tiles.locationOfSprite(Mutation), assets.tile`myTile4`)
            }
        } else if (RandomMutation == 2) {
            if (Mutation.tileKindAt(TileDirection.Top, assets.tile`myTile15`)) {
                tiles.setTileAt(tiles.locationOfSprite(Mutation), assets.tile`myTile4`)
            }
        } else if (RandomMutation == 3) {
            if (Mutation.tileKindAt(TileDirection.Right, assets.tile`myTile15`)) {
                tiles.setTileAt(tiles.locationOfSprite(Mutation), assets.tile`myTile4`)
            }
        } else if (RandomMutation == 4) {
            if (Mutation.tileKindAt(TileDirection.Bottom, assets.tile`myTile15`)) {
                tiles.setTileAt(tiles.locationOfSprite(Mutation), assets.tile`myTile4`)
            }
        }
    } else if (WhichMutation == 2) {
        if (Mutation.tileKindAt(TileDirection.Left, assets.tile`myTile28`)) {
            if (Mutation.tileKindAt(TileDirection.Right, assets.tile`myTile28`)) {
                if (Mutation.tileKindAt(TileDirection.Top, assets.tile`myTile28`)) {
                    if (Mutation.tileKindAt(TileDirection.Bottom, assets.tile`myTile28`)) {
                        tiles.setTileAt(tiles.locationOfSprite(Mutation), assets.tile`myTile20`)
                    }
                }
            }
        }
    } else if (WhichMutation == 3) {
        if (RandomMutation == 1) {
            if (Mutation.tileKindAt(TileDirection.Left, assets.tile`myTile15`)) {
                tiles.setTileAt(tiles.locationOfSprite(Mutation), assets.tile`myTile19`)
            }
        } else if (RandomMutation == 2) {
            if (Mutation.tileKindAt(TileDirection.Top, assets.tile`myTile15`)) {
                tiles.setTileAt(tiles.locationOfSprite(Mutation), assets.tile`myTile19`)
            }
        } else if (RandomMutation == 3) {
            if (Mutation.tileKindAt(TileDirection.Right, assets.tile`myTile15`)) {
                tiles.setTileAt(tiles.locationOfSprite(Mutation), assets.tile`myTile19`)
            }
        } else if (RandomMutation == 4) {
            if (Mutation.tileKindAt(TileDirection.Bottom, assets.tile`myTile15`)) {
                tiles.setTileAt(tiles.locationOfSprite(Mutation), assets.tile`myTile19`)
            }
        }
    } else if (WhichMutation == 4) {
        if (RandomMutation == 1) {
            if (Mutation.tileKindAt(TileDirection.Left, assets.tile`myTile22`)) {
                tiles.setTileAt(tiles.locationOfSprite(Mutation), assets.tile`myTile19`)
            }
        } else if (RandomMutation == 2) {
            if (Mutation.tileKindAt(TileDirection.Top, assets.tile`myTile22`)) {
                tiles.setTileAt(tiles.locationOfSprite(Mutation), assets.tile`myTile19`)
            }
        } else if (RandomMutation == 3) {
            if (Mutation.tileKindAt(TileDirection.Right, assets.tile`myTile22`)) {
                tiles.setTileAt(tiles.locationOfSprite(Mutation), assets.tile`myTile19`)
            }
        } else if (RandomMutation == 4) {
            if (Mutation.tileKindAt(TileDirection.Bottom, assets.tile`myTile22`)) {
                tiles.setTileAt(tiles.locationOfSprite(Mutation), assets.tile`myTile19`)
            }
        }
    } else if (WhichMutation == 5) {
        if (RandomMutation == 1) {
            if (Mutation.tileKindAt(TileDirection.Left, assets.tile`myTile23`)) {
                tiles.setTileAt(tiles.locationOfSprite(Mutation), assets.tile`myTile20`)
            }
        } else if (RandomMutation == 2) {
            if (Mutation.tileKindAt(TileDirection.Top, assets.tile`myTile23`)) {
                tiles.setTileAt(tiles.locationOfSprite(Mutation), assets.tile`myTile20`)
            }
        } else if (RandomMutation == 3) {
            if (Mutation.tileKindAt(TileDirection.Right, assets.tile`myTile23`)) {
                tiles.setTileAt(tiles.locationOfSprite(Mutation), assets.tile`myTile20`)
            }
        } else if (RandomMutation == 4) {
            if (Mutation.tileKindAt(TileDirection.Bottom, assets.tile`myTile23`)) {
                tiles.setTileAt(tiles.locationOfSprite(Mutation), assets.tile`myTile20`)
            }
        }
    } else if (WhichMutation == 6) {
        if (RandomMutation == 1) {
            if (Mutation.tileKindAt(TileDirection.Left, assets.tile`myTile12`)) {
                tiles.setTileAt(tiles.locationOfSprite(Mutation), assets.tile`myTile13`)
            }
        } else if (RandomMutation == 2) {
            if (Mutation.tileKindAt(TileDirection.Top, assets.tile`myTile12`)) {
                tiles.setTileAt(tiles.locationOfSprite(Mutation), assets.tile`myTile13`)
            }
        } else if (RandomMutation == 3) {
            if (Mutation.tileKindAt(TileDirection.Right, assets.tile`myTile12`)) {
                tiles.setTileAt(tiles.locationOfSprite(Mutation), assets.tile`myTile13`)
            }
        } else if (RandomMutation == 4) {
            if (Mutation.tileKindAt(TileDirection.Bottom, assets.tile`myTile12`)) {
                tiles.setTileAt(tiles.locationOfSprite(Mutation), assets.tile`myTile13`)
            }
        }
    } else if (WhichMutation == 7) {
        if (RandomMutation == 1) {
            if (Mutation.tileKindAt(TileDirection.Left, assets.tile`myTile28`)) {
                tiles.setTileAt(tiles.locationOfSprite(Mutation), assets.tile`myTile24`)
            }
        } else if (RandomMutation == 2) {
            if (Mutation.tileKindAt(TileDirection.Top, assets.tile`myTile28`)) {
                tiles.setTileAt(tiles.locationOfSprite(Mutation), assets.tile`myTile24`)
            }
        } else if (RandomMutation == 3) {
            if (Mutation.tileKindAt(TileDirection.Right, assets.tile`myTile28`)) {
                tiles.setTileAt(tiles.locationOfSprite(Mutation), assets.tile`myTile24`)
            }
        } else if (RandomMutation == 4) {
            if (Mutation.tileKindAt(TileDirection.Bottom, assets.tile`myTile28`)) {
                tiles.setTileAt(tiles.locationOfSprite(Mutation), assets.tile`myTile24`)
            }
        }
    } else if (WhichMutation == 8) {
        if (Math.percentChance(25)) {
            if (RandomMutation == 1) {
                if (Mutation.tileKindAt(TileDirection.Left, assets.tile`myTile22`)) {
                    tiles.setTileAt(tiles.locationOfSprite(Mutation), assets.tile`myTile29`)
                }
            } else if (RandomMutation == 2) {
                if (Mutation.tileKindAt(TileDirection.Top, assets.tile`myTile22`)) {
                    tiles.setTileAt(tiles.locationOfSprite(Mutation), assets.tile`myTile29`)
                }
            } else if (RandomMutation == 3) {
                if (Mutation.tileKindAt(TileDirection.Right, assets.tile`myTile22`)) {
                    tiles.setTileAt(tiles.locationOfSprite(Mutation), assets.tile`myTile29`)
                }
            } else if (RandomMutation == 4) {
                if (Mutation.tileKindAt(TileDirection.Bottom, assets.tile`myTile22`)) {
                    tiles.setTileAt(tiles.locationOfSprite(Mutation), assets.tile`myTile29`)
                }
            }
        }
    } else if (WhichMutation == 9) {
        if (RandomMutation == 1) {
            if (Mutation.tileKindAt(TileDirection.Left, assets.tile`myTile32`)) {
                tiles.setTileAt(tiles.locationOfSprite(Mutation), assets.tile`myTile29`)
            }
        } else if (RandomMutation == 2) {
            if (Mutation.tileKindAt(TileDirection.Top, assets.tile`myTile32`)) {
                tiles.setTileAt(tiles.locationOfSprite(Mutation), assets.tile`myTile29`)
            }
        } else if (RandomMutation == 3) {
            if (Mutation.tileKindAt(TileDirection.Right, assets.tile`myTile32`)) {
                tiles.setTileAt(tiles.locationOfSprite(Mutation), assets.tile`myTile29`)
            }
        } else if (RandomMutation == 4) {
            if (Mutation.tileKindAt(TileDirection.Bottom, assets.tile`myTile32`)) {
                tiles.setTileAt(tiles.locationOfSprite(Mutation), assets.tile`myTile29`)
            }
        }
    } else if (WhichMutation == 10) {
        if (Math.percentChance(5)) {
            if (RandomMutation == 1) {
                if (Mutation.tileKindAt(TileDirection.Left, assets.tile`myTile32`)) {
                    tiles.setTileAt(tiles.locationOfSprite(Mutation), assets.tile`myTile33`)
                }
            } else if (RandomMutation == 2) {
                if (Mutation.tileKindAt(TileDirection.Top, assets.tile`myTile32`)) {
                    tiles.setTileAt(tiles.locationOfSprite(Mutation), assets.tile`myTile33`)
                }
            } else if (RandomMutation == 3) {
                if (Mutation.tileKindAt(TileDirection.Right, assets.tile`myTile32`)) {
                    tiles.setTileAt(tiles.locationOfSprite(Mutation), assets.tile`myTile33`)
                }
            } else if (RandomMutation == 4) {
                if (Mutation.tileKindAt(TileDirection.Bottom, assets.tile`myTile32`)) {
                    tiles.setTileAt(tiles.locationOfSprite(Mutation), assets.tile`myTile33`)
                }
            }
        }
    } else if (WhichMutation == 11) {
        if (Math.percentChance(25)) {
            if (RandomMutation == 1) {
                if (Mutation.tileKindAt(TileDirection.Left, assets.tile`myTile35`)) {
                    tiles.setTileAt(tiles.locationOfSprite(Mutation), assets.tile`myTile33`)
                }
            } else if (RandomMutation == 2) {
                if (Mutation.tileKindAt(TileDirection.Top, assets.tile`myTile35`)) {
                    tiles.setTileAt(tiles.locationOfSprite(Mutation), assets.tile`myTile33`)
                }
            } else if (RandomMutation == 3) {
                if (Mutation.tileKindAt(TileDirection.Right, assets.tile`myTile35`)) {
                    tiles.setTileAt(tiles.locationOfSprite(Mutation), assets.tile`myTile33`)
                }
            } else if (RandomMutation == 4) {
                if (Mutation.tileKindAt(TileDirection.Bottom, assets.tile`myTile35`)) {
                    tiles.setTileAt(tiles.locationOfSprite(Mutation), assets.tile`myTile33`)
                }
            }
        }
    }
    sprites.destroyAllSpritesOfKind(SpriteKind.Other2)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Upgrade, function (sprite, otherSprite) {
    if (GameStarted == 1) {
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
                        6eeeeffffeeeeeddddedeeedeeeeeeeeeeeeeee6
                        6eeef4464feeeedeeeedeedeeeeeeeeeeeeeeee6
                        6eef644444feeedeeeededeeeeeeeeeeeeeeeee6
                        6ef44664664feedeeeededeeeeeeeeeeeeeeeee6
                        6ef64664664feedddeeddeeeeeeeeeeeeeeeeee6
                        6ef44444446feeeeededdeeeeeeeeeeeeeeeeee6
                        6ef46446644feeeeedededeeeeeeeeeeeeeeeee6
                        6eef444664feeedeededeedeeeeeeeeeeeeeeee6
                        6eeef4644feeeeeddeedeeedeeeeeeeeeeeeeee6
                        6eeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6
                        6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6
                        6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6
                        6666666666666666666666666666666666666666
                        `],
                    100,
                    false
                    )
                    Upgrade.setPosition(140, 8)
                    UpgradeNumber = 4
                }
            } else if (UpgradeNumber == 4) {
                if (CookieAmount > 4999) {
                    CookieAmount += -5000
                    CookieWorth += 2
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
                        6eeffffffffeeeeddeeddddedeeedeeeeeeeeee6
                        6efdddd6666feededeedeeeedeedeeeeeeeeeee6
                        6efdddd6666feeeedeedeeeededeeeeeeeeeeee6
                        6efdddd6666feeeedeedeeeededeeeeeeeeeeee6
                        6efdddd6666feeeedeedddeeddeeeeeeeeeeeee6
                        6ef6666ddddfeeeedeeeeededdeeeeeeeeeeeee6
                        6ef6666ddddfeeeedeeeeedededeeeeeeeeeeee6
                        6ef6666ddddfeeeedeedeededeedeeeeeeeeeee6
                        6ef6666ddddfeeeedeeeddeedeeedeeeeeeeeee6
                        6eeffffffffeeeeeeeeeeeeeeeeeeeeeeeeeeee6
                        6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6
                        6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6
                        6666666666666666666666666666666666666666
                        `],
                    100,
                    false
                    )
                    Upgrade.setPosition(140, 8)
                    UpgradeNumber = 5
                }
            } else if (UpgradeNumber == 5) {
                if (CookieAmount > 14999) {
                    CookieAmount += -15000
                    CookieWorth += 4
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
                        6eeeeffffeeeeeedddeeddddedeeedeeeeeeeee6
                        6eeef6ee6feeeedeeededeeeedeedeeeeeeeeee6
                        6eefe6ee6efeeeeeeededeeeededeeeeeeeeeee6
                        6ef66666666feeeeedeedeeeededeeeeeeeeeee6
                        6efee6ee6eefeeeedeeedddeeddeeeeeeeeeeee6
                        6efee6ee6eefeeedeeeeeeededdeeeeeeeeeeee6
                        6ef66666666feedeeeeeeeedededeeeeeeeeeee6
                        6eefe6ee6efeeedeeeeedeededeedeeeeeeeeee6
                        6eeef6ee6feeeedddddeeddeedeeedeeeeeeeee6
                        6eeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6
                        6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6
                        6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6
                        6666666666666666666666666666666666666666
                        `],
                    100,
                    false
                    )
                    Upgrade.setPosition(140, 8)
                    UpgradeNumber = 6
                }
            } else if (UpgradeNumber == 6) {
                if (CookieAmount > 24999) {
                    CookieAmount += -25000
                    CookieWorth += 5
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
                        6eeeeffffeeeedddddeeddddedeeedeeeeeeeee6
                        6eeef4444feeeeeeedeedeeeedeedeeeeeeeeee6
                        6eef4e4e44feeeeeedeedeeeededeeeeeeeeeee6
                        6ef4e4e4e44feeeedeeedeeeededeeeeeeeeeee6
                        6ef44e4e4e4feeeedeeedddeeddeeeeeeeeeeee6
                        6ef4e4e4e44feeedeeeeeeededdeeeeeeeeeeee6
                        6ef44e4e4e4feeedeeeeeeedededeeeeeeeeeee6
                        6eef44e4e4feeedeeeeedeededeedeeeeeeeeee6
                        6eeef4444feeeedeeeeeeddeedeeedeeeeeeeee6
                        6eeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6
                        6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6
                        6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6
                        6666666666666666666666666666666666666666
                        `],
                    100,
                    false
                    )
                    Upgrade.setPosition(140, 8)
                    UpgradeNumber = 7
                }
            } else if (UpgradeNumber == 7) {
                if (CookieAmount > 74999) {
                    CookieAmount += -75000
                    CookieWorth += 10
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
                        6eeeeffffeeeeeeeddeddddeeddeedeeedeeeee6
                        6eeef4464feeeeedededeeeedeededeedeeeeee6
                        6eef444444feeeeeededeeeedeedededeeeeeee6
                        6ef444ff644feeeeededeeeedeedededeeeeeee6
                        6ef64feef44feeeeededddeedeededdeeeeeeee6
                        6ef44feef64feeeeedeeeededeededdeeeeeeee6
                        6ef464ff444feeeeedeeeededeedededeeeeeee6
                        6eef444444feeeeeededeededeededeedeeeeee6
                        6eeef4464feeeeeeedeeddeeeddeedeeedeeeee6
                        6eeeeffffeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6
                        6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6
                        6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6
                        6666666666666666666666666666666666666666
                        `],
                    100,
                    false
                    )
                    Upgrade.setPosition(140, 8)
                    UpgradeNumber = 8
                }
            } else if (UpgradeNumber == 8) {
                if (CookieAmount > 149999) {
                    CookieAmount += -150000
                    CookieWorth += 15
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
                        6eeeeefffeeeeeddddeeddeeeddeedeeedeeeee6
                        6eeeff444ffeeedeeeedeededeededeedeeeeee6
                        6eef4446444feedeeeedeededeedededeeeeeee6
                        6ef4ff444ff4fedeeeedeededeedededeeeeeee6
                        6ef444f4f446fedddeedeededeededdeeeeeeee6
                        6ef4644f4644feeeededeededeededdeeeeeeee6
                        6ef4444f4444feeeededeededeedededeeeeeee6
                        6eef446f464feedeededeededeededeedeeeeee6
                        6eeeff4f4ffeeeeddeeeddeeeddeedeeedeeeee6
                        6eeeeefffeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6
                        6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6
                        6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6
                        6666666666666666666666666666666666666666
                        `],
                    100,
                    false
                    )
                    Upgrade.setPosition(140, 8)
                    UpgradeNumber = 9
                }
            } else if (UpgradeNumber == 9) {
                if (CookieAmount > 499999) {
                    CookieAmount += -500000
                    CookieWorth += 50
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
                        6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6
                        6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6
                        6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6
                        6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6
                        6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6
                        6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6
                        6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6
                        6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6
                        6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6
                        6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6
                        6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6
                        6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6
                        6666666666666666666666666666666666666666
                        `],
                    100,
                    false
                    )
                    Upgrade.setPosition(140, 8)
                    UpgradeNumber = 0
                    Achievements.showAchievement(
                    "Cookie Addict"
                    )
                }
            }
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.CookieHacking, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        if (CookieAmount > 999999) {
            HackerAmount += 1
            CookieAmount += -1000000
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.CookieBank, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        if (CookieAmount > 99999) {
            BankAmount += 1
            CookieAmount += -100000
        }
    }
})
sprites.onOverlap(SpriteKind.GoldenCookie, SpriteKind.Milk, function (sprite, otherSprite) {
    CookieAmount += 7 * CookieWorth
    sprites.destroy(sprite)
})
function GardenTick () {
    GardenTick2 = randint(1, 10)
    if (GardenTick2 == 1) {
        tiles.replaceAllTiles(assets.tile`myTile14`, assets.tile`myTile15`)
        tiles.replaceAllTiles(assets.tile`myTile11`, assets.tile`myTile14`)
        GardenTick2 = 0
    }
    if (GardenTick2 == 2) {
        if (tiles.tileAtLocationEquals(tiles.getTileLocation(randint(5, 0), randint(0, 9)), assets.tile`myTile9`)) {
            GrowWeed = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Other)
            tiles.placeOnRandomTile(GrowWeed, assets.tile`myTile9`)
            if (Math.percentChance(95)) {
                tiles.setTileAt(tiles.locationOfSprite(GrowWeed), assets.tile`myTile13`)
            } else {
                tiles.setTileAt(tiles.locationOfSprite(GrowWeed), assets.tile`myTile24`)
            }
            sprites.destroyAllSpritesOfKind(SpriteKind.Other)
        }
    }
    if (GardenTick2 == 3) {
        Mutation = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Other2)
        tiles.placeOnRandomTile(Mutation, assets.tile`myTile9`)
        if (Mutation.tileKindAt(TileDirection.Center, assets.tile`myTile9`)) {
            RandomMutation = randint(1, 4)
            RunMutation()
        } else {
            sprites.destroyAllSpritesOfKind(SpriteKind.Other2)
        }
    }
    if (GardenTick2 == 4) {
        tiles.replaceAllTiles(assets.tile`myTile17`, assets.tile`myTile12`)
        tiles.replaceAllTiles(assets.tile`myTile16`, assets.tile`myTile17`)
        tiles.replaceAllTiles(assets.tile`myTile13`, assets.tile`myTile16`)
        tiles.replaceAllTiles(assets.tile`myTile13`, assets.tile`myTile16`)
        GardenTick2 = 0
    }
    if (GardenTick2 == 5) {
        tiles.replaceAllTiles(assets.tile`myTile21`, assets.tile`myTile22`)
        tiles.replaceAllTiles(assets.tile`myTile18`, assets.tile`myTile21`)
        GardenTick2 = 0
    }
    if (GardenTick2 == 6) {
        tiles.replaceAllTiles(assets.tile`myTile26`, assets.tile`myTile23`)
        tiles.replaceAllTiles(assets.tile`myTile25`, assets.tile`myTile26`)
        GardenTick2 = 0
    }
    if (GardenTick2 == 7) {
        tiles.replaceAllTiles(assets.tile`myTile27`, assets.tile`myTile28`)
        tiles.replaceAllTiles(assets.tile`myTile24`, assets.tile`myTile27`)
        GardenTick2 = 0
    }
    if (GardenTick2 == 8) {
        tiles.replaceAllTiles(assets.tile`myTile31`, assets.tile`myTile32`)
        tiles.replaceAllTiles(assets.tile`myTile36`, assets.tile`myTile31`)
        GardenTick2 = 0
    }
    if (GardenTick2 == 9) {
        tiles.replaceAllTiles(assets.tile`myTile34`, assets.tile`myTile35`)
        tiles.replaceAllTiles(assets.tile`myTile37`, assets.tile`myTile34`)
        GardenTick2 = 0
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.BuyFactory, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        if (CookieAmount > 9999) {
            FactoryAmount += 1
            CookieAmount += -10000
        }
    }
})
sprites.onOverlap(SpriteKind.milkglass, SpriteKind.Milk, function (sprite, otherSprite) {
    if (Milk.y > 60) {
        otherSprite.y += -1
    }
    sprites.destroy(sprite)
})
controller.combos.attachCombo("AABBABAA", function () {
    if (GameStarted == 1) {
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
    }
})
function Click () {
    if (Tool == 1) {
        if (Cursor.tileKindAt(TileDirection.Center, assets.tile`myTile9`)) {
            tiles.setTileAt(tiles.locationOfSprite(Cursor), assets.tile`myTile4`)
        }
    } else if (Tool == 2) {
        if (Cursor.tileKindAt(TileDirection.Center, assets.tile`myTile4`)) {
            tiles.setTileAt(tiles.locationOfSprite(Cursor), assets.tile`myTile9`)
        } else if (Cursor.tileKindAt(TileDirection.Center, assets.tile`myTile11`)) {
            tiles.setTileAt(tiles.locationOfSprite(Cursor), assets.tile`myTile9`)
        } else if (Cursor.tileKindAt(TileDirection.Center, assets.tile`myTile14`)) {
            tiles.setTileAt(tiles.locationOfSprite(Cursor), assets.tile`myTile9`)
        } else if (Cursor.tileKindAt(TileDirection.Center, assets.tile`myTile15`)) {
            tiles.setTileAt(tiles.locationOfSprite(Cursor), assets.tile`myTile9`)
        } else if (Cursor.tileKindAt(TileDirection.Center, assets.tile`myTile13`)) {
            tiles.setTileAt(tiles.locationOfSprite(Cursor), assets.tile`myTile9`)
        } else if (Cursor.tileKindAt(TileDirection.Center, assets.tile`myTile16`)) {
            tiles.setTileAt(tiles.locationOfSprite(Cursor), assets.tile`myTile9`)
        } else if (Cursor.tileKindAt(TileDirection.Center, assets.tile`myTile17`)) {
            tiles.setTileAt(tiles.locationOfSprite(Cursor), assets.tile`myTile9`)
        } else if (Cursor.tileKindAt(TileDirection.Center, assets.tile`myTile12`)) {
            tiles.setTileAt(tiles.locationOfSprite(Cursor), assets.tile`myTile9`)
            GrowWeed = sprites.create(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, SpriteKind.Other)
            tiles.placeOnRandomTile(GrowWeed, assets.tile`myTile9`)
            if (GrowWeed.tileKindAt(TileDirection.Center, assets.tile`myTile9`)) {
                if (Math.percentChance(97)) {
                    tiles.setTileAt(tiles.locationOfSprite(GrowWeed), assets.tile`myTile13`)
                } else {
                    tiles.setTileAt(tiles.locationOfSprite(GrowWeed), assets.tile`myTile24`)
                }
            }
            sprites.destroy(GrowWeed)
            sprites.destroyAllSpritesOfKind(SpriteKind.Other)
        } else if (Cursor.tileKindAt(TileDirection.Center, assets.tile`myTile18`)) {
            tiles.setTileAt(tiles.locationOfSprite(Cursor), assets.tile`myTile9`)
        } else if (Cursor.tileKindAt(TileDirection.Center, assets.tile`myTile19`)) {
            tiles.setTileAt(tiles.locationOfSprite(Cursor), assets.tile`myTile9`)
        } else if (Cursor.tileKindAt(TileDirection.Center, assets.tile`myTile21`)) {
            tiles.setTileAt(tiles.locationOfSprite(Cursor), assets.tile`myTile9`)
        } else if (Cursor.tileKindAt(TileDirection.Center, assets.tile`myTile22`)) {
            tiles.setTileAt(tiles.locationOfSprite(Cursor), assets.tile`myTile9`)
        } else if (Cursor.tileKindAt(TileDirection.Center, assets.tile`myTile20`)) {
            tiles.setTileAt(tiles.locationOfSprite(Cursor), assets.tile`myTile9`)
        } else if (Cursor.tileKindAt(TileDirection.Center, assets.tile`myTile25`)) {
            tiles.setTileAt(tiles.locationOfSprite(Cursor), assets.tile`myTile9`)
        } else if (Cursor.tileKindAt(TileDirection.Center, assets.tile`myTile26`)) {
            tiles.setTileAt(tiles.locationOfSprite(Cursor), assets.tile`myTile9`)
        } else if (Cursor.tileKindAt(TileDirection.Center, assets.tile`myTile23`)) {
            tiles.setTileAt(tiles.locationOfSprite(Cursor), assets.tile`myTile9`)
        } else if (Cursor.tileKindAt(TileDirection.Center, assets.tile`myTile24`)) {
            tiles.setTileAt(tiles.locationOfSprite(Cursor), assets.tile`myTile9`)
        } else if (Cursor.tileKindAt(TileDirection.Center, assets.tile`myTile27`)) {
            tiles.setTileAt(tiles.locationOfSprite(Cursor), assets.tile`myTile9`)
        } else if (Cursor.tileKindAt(TileDirection.Center, assets.tile`myTile28`)) {
            tiles.setTileAt(tiles.locationOfSprite(Cursor), assets.tile`myTile9`)
        } else if (Cursor.tileKindAt(TileDirection.Center, assets.tile`myTile29`)) {
            tiles.setTileAt(tiles.locationOfSprite(Cursor), assets.tile`myTile9`)
        } else if (Cursor.tileKindAt(TileDirection.Center, assets.tile`myTile31`)) {
            tiles.setTileAt(tiles.locationOfSprite(Cursor), assets.tile`myTile9`)
        } else if (Cursor.tileKindAt(TileDirection.Center, assets.tile`myTile32`)) {
            tiles.setTileAt(tiles.locationOfSprite(Cursor), assets.tile`myTile9`)
        } else if (Cursor.tileKindAt(TileDirection.Center, assets.tile`myTile33`)) {
            tiles.setTileAt(tiles.locationOfSprite(Cursor), assets.tile`myTile9`)
        } else if (Cursor.tileKindAt(TileDirection.Center, assets.tile`myTile34`)) {
            tiles.setTileAt(tiles.locationOfSprite(Cursor), assets.tile`myTile9`)
        } else if (Cursor.tileKindAt(TileDirection.Center, assets.tile`myTile35`)) {
            tiles.setTileAt(tiles.locationOfSprite(Cursor), assets.tile`myTile9`)
        } else if (Cursor.tileKindAt(TileDirection.Center, assets.tile`myTile36`)) {
            tiles.setTileAt(tiles.locationOfSprite(Cursor), assets.tile`myTile9`)
        } else if (Cursor.tileKindAt(TileDirection.Center, assets.tile`myTile37`)) {
            tiles.setTileAt(tiles.locationOfSprite(Cursor), assets.tile`myTile9`)
        }
    } else if (Tool == 3) {
        if (Cursor.tileKindAt(TileDirection.Center, assets.tile`myTile4`)) {
            tiles.setTileAt(tiles.locationOfSprite(Cursor), assets.tile`myTile11`)
        } else if (Cursor.tileKindAt(TileDirection.Center, assets.tile`myTile13`)) {
            tiles.setTileAt(tiles.locationOfSprite(Cursor), assets.tile`myTile16`)
        } else if (Cursor.tileKindAt(TileDirection.Center, assets.tile`myTile16`)) {
            tiles.setTileAt(tiles.locationOfSprite(Cursor), assets.tile`myTile17`)
        } else if (Cursor.tileKindAt(TileDirection.Center, assets.tile`myTile17`)) {
            tiles.setTileAt(tiles.locationOfSprite(Cursor), assets.tile`myTile12`)
        } else if (Cursor.tileKindAt(TileDirection.Center, assets.tile`myTile19`)) {
            tiles.setTileAt(tiles.locationOfSprite(Cursor), assets.tile`myTile18`)
        } else if (Cursor.tileKindAt(TileDirection.Center, assets.tile`myTile20`)) {
            tiles.setTileAt(tiles.locationOfSprite(Cursor), assets.tile`myTile25`)
        } else if (Cursor.tileKindAt(TileDirection.Center, assets.tile`myTile29`)) {
            tiles.setTileAt(tiles.locationOfSprite(Cursor), assets.tile`myTile36`)
        } else if (Cursor.tileKindAt(TileDirection.Center, assets.tile`myTile33`)) {
            tiles.setTileAt(tiles.locationOfSprite(Cursor), assets.tile`myTile37`)
        }
    } else if (Tool == 4) {
        if (Cursor.tileKindAt(TileDirection.Center, assets.tile`myTile15`)) {
            CookieAmount += 1
            tiles.setTileAt(tiles.locationOfSprite(Cursor), assets.tile`myTile9`)
        } else if (Cursor.tileKindAt(TileDirection.Center, assets.tile`myTile22`)) {
            CookieAmount += 3
            tiles.setTileAt(tiles.locationOfSprite(Cursor), assets.tile`myTile9`)
        } else if (Cursor.tileKindAt(TileDirection.Center, assets.tile`myTile12`)) {
            for (let index = 0; index < 4; index++) {
                CookieAmount += 0
                tiles.setTileAt(tiles.locationOfSprite(Cursor), assets.tile`myTile13`)
                GrowWeed = sprites.create(img`
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    . . . . . . . . . . . . . . . . 
                    `, SpriteKind.Other)
                tiles.placeOnRandomTile(GrowWeed, assets.tile`myTile9`)
                if (GrowWeed.tileKindAt(TileDirection.Center, assets.tile`myTile9`)) {
                    if (Math.percentChance(97)) {
                        tiles.setTileAt(tiles.locationOfSprite(GrowWeed), assets.tile`myTile13`)
                    } else {
                        tiles.setTileAt(tiles.locationOfSprite(GrowWeed), assets.tile`myTile24`)
                    }
                }
                sprites.destroy(GrowWeed)
                sprites.destroyAllSpritesOfKind(SpriteKind.Other)
            }
        } else if (Cursor.tileKindAt(TileDirection.Center, assets.tile`myTile23`)) {
            tiles.setTileAt(tiles.locationOfSprite(Cursor), assets.tile`myTile20`)
            for (let index = 0; index < 8; index++) {
                CallPlantKill()
            }
        } else if (Cursor.tileKindAt(TileDirection.Center, assets.tile`myTile28`)) {
            CookieAmount += 1
            tiles.setTileAt(tiles.locationOfSprite(Cursor), assets.tile`myTile9`)
        } else if (Cursor.tileKindAt(TileDirection.Center, assets.tile`myTile32`)) {
            CookieAmount += 7
        } else if (Cursor.tileKindAt(TileDirection.Center, assets.tile`myTile35`)) {
            CookieAmount += 77
            tiles.setTileAt(tiles.locationOfSprite(Cursor), assets.tile`myTile9`)
        }
    }
    CookieCounter.setText(convertToText(CookieAmount))
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.BuyKid, function (sprite, otherSprite) {
    if (controller.A.isPressed()) {
        if (CookieAmount > 99) {
            KidAmount += 1
            CookieAmount += -100
        }
    }
})
let KidAmount = 0
let CheatMenuIcon: Sprite = null
let FactoryAmount = 0
let GardenTick2 = 0
let BankAmount = 0
let HackerAmount = 0
let Mutation: Sprite = null
let RandomMutation = 0
let WhichMutation = 0
let CheatMenu: miniMenu.MenuSprite = null
let CheatMenuActivated = 0
let Tool = 0
let Cookie: Sprite = null
let GoldenCookie: Sprite = null
let SelectedCookie = 0
let GrowWeed: Sprite = null
let PlantAmount = 0
let CookieAmount = 0
let CookieWorth = 0
let CookieCounter: TextSprite = null
let UpgradeNumber = 0
let Upgrade: Sprite = null
let RandomCookie = 0
let Milk: Sprite = null
let Cursor: Sprite = null
let BigCookie: Sprite = null
let GameStarted = 0
let GardenOpen = 0
let PressAToStart: Sprite = null
let TextSprite3: TextSprite = null
let Textsprite2: TextSprite = null
let textSprite: TextSprite = null
scene.setBackgroundImage(img`
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee
    `)
textSprite = textsprite.create("Cookie Clicker", 0, 6)
textSprite.changeScale(0.5, ScaleAnchor.Middle)
textSprite.setPosition(79, 20)
Textsprite2 = textsprite.create("But Budget", 0, 6)
Textsprite2.changeScale(0.5, ScaleAnchor.Middle)
Textsprite2.setPosition(80, 35)
TextSprite3 = textsprite.create("B to open W.I.P garden", 0, 6)
TextSprite3.setPosition(80, 107)
PressAToStart = sprites.create(img`
    666666666..666666666...66666666..666666666...666666666..........66666.....66666666666..6666666.......666666666..66666666666.....66666......66666666..66666666666
    6666666666.6666666666.666666666.66666666666.66666666666........6666666....66666666666.666666666.....66666666666.66666666666....6666666....666666666..66666666666
    6666666666.6666666666.666666666.66666666666.66666666666........6666666....66666666666.666666666.....66666666666.66666666666...66666666....6666666666.66666666666
    666....666.666....666.666.......666.........666................666.6666.......666.....666...666.....666.............666.......6666.6666...666....666.....666....
    666....666.666....666.666.......666.........666...............6666.6666.......666.....666...666.....666.............666.......6666.6666...666....666.....666....
    666....666.666....666.666.......666.........666...............6666.6666.......666.....666...666.....666.............666......6666...666...6666666666.....666....
    6666666666.6666666666.666.......6666666666..6666666666........666...666.......666.....666...666.....6666666666......666......6666...666...6666666666.....666....
    6666666666.6666666666.666666666.66666666666.66666666666......66666666666......666.....666...666.....66666666666.....666......66666666666..666666666......666....
    666666666..666666666..666666666..6666666666..6666666666......66666666666......666.....666...666......6666666666.....666......66666666666..66666..........666....
    666........66666......666666666.........666.........666......66666666666......666.....666...666.............666.....666.....666666666666..666666.........666....
    666........6666666....666...............666.........666......666.....666......666.....666...666.............666.....666.....6666.....666..6666666........666....
    666........66666666...666...............666.........666.....6666.....6666.....666.....666...666.............666.....666.....666.......666.66666666.......666....
    666........666666666..666...............666.........666.....6666.....6666.....666.....666...666.............666.....666.....666.......666.666.66666......666....
    666........666..66666.666666666.66666666666.66666666666.....666.......666.....666.....666666666.....66666666666.....666.....666.......666.666..66666.....666....
    666........666...6666.666666666.66666666666.66666666666.....666.......666.....666.....666666666.....66666666666.....666.....666.......666.666...6666.....666....
    666........666....666..66666666..666666666...666666666......666.......666.....666......6666666.......666666666......666.....666.......666.666....666.....666....
    `, SpriteKind.Text)
PressAToStart.changeScale(-0.1, ScaleAnchor.Middle)
PressAToStart.setPosition(80, 80)
pauseUntil(() => controller.A.isPressed())
pauseUntil(() => GardenOpen == 0)
color.FadeToBlack.startScreenEffect(1000)
pause(2500)
sprites.destroy(textSprite)
sprites.destroy(Textsprite2)
sprites.destroy(TextSprite3)
sprites.destroy(PressAToStart)
sprites.destroyAllSpritesOfKind(SpriteKind.Text)
color.startFadeFromCurrent(color.originalPalette, 1000)
GameStarted += 1
GameStarted = 1
BigCookie = sprites.create(img`
    ..................
    ......ffffff......
    ....ff444444ff....
    ...f4444464444f...
    ..f446444444444f..
    ..f444444444444f..
    .f44444444446444f.
    .f44644464444444f.
    .f44444444444444f.
    .f44444444444444f.
    .f44464444644644f.
    .f44444444444444f.
    ..f444444444444f..
    ..f444446444444f..
    ...f4444444444f...
    ....ff444444ff....
    ......ffffff......
    ..................
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
CookieCounter = textsprite.create("0", 0, 6)
CookieCounter.setPosition(7, 7)
CookieCounter.changeScale(1, ScaleAnchor.Middle)
CookieWorth = 1
let BuyTower = sprites.create(img`
    6666666666666666666666666666666666666666
    6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6
    6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6
    6eeeeedddeeeeeddeeeddeeeddeeeeeeeeeeeee6
    6eeeeededeeeeeedeedeededeedeeeeeeeeeeee6
    6eeeeedddeeeeeedeedeededeedeeeeeeeeeeee6
    6eeeeeedeeeeeeedeedeededeedeeeeeeeeeeee6
    6eeeedddddeeeeedeedeededeedeeeeeeeeeeee6
    6eeeeeedeeeeeeedeedeededeedeeeeeeeeeeee6
    6eeeeededeeeeeedeedeededeedeeeeeeeeeeee6
    6eeeeededeeeeeedeedeededeedeeeeeeeeeeee6
    6eeeedeeedeeeeedeedeededeedeeeeeeeeeeee6
    6eeeedeeedeeeedddeeddeeeddeeeeeeeeeeeee6
    6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6
    6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6
    6666666666666666666666666666666666666666
    `, SpriteKind.BuyKid)
BuyTower.setPosition(20, 28)
BuyTower = sprites.create(img`
    6666666666666666666666666666666666666666
    6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6
    6eeee444eeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6
    6eee46464eeeeeddeeeddeeeddeeeddeeeeeeee6
    6eee44644eeeeeedeedeededeededeedeeeeeee6
    6eee46464eeeeeedeedeededeededeedeeeeeee6
    6eeee444eeeeeeedeedeededeededeedeeeeeee6
    6eeeee7eeeeeeeedeedeededeededeedeeeeeee6
    6eeee777eeeeeeedeedeededeededeedeeeeeee6
    6eeeee7eeeeeeeedeedeededeededeedeeeeeee6
    6eee66666eeeeeedeedeededeededeedeeeeeee6
    6eee66666eeeeeedeedeededeededeedeeeeeee6
    6eee66666eeeeedddeeddeeeddeeeddeeeeeeee6
    6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6
    6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6
    6666666666666666666666666666666666666666
    `, SpriteKind.BuyPlant)
BuyTower.setPosition(20, 45)
BuyTower = sprites.create(img`
    6666666666666666666666666666666666666666
    6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6
    6eeeeeebbbeeeeeeeeeeeeeeeeeeeeeeeeeeeee6
    6eebbeeeebbeeeddeeeddeedeeedeeeeeeeeeee6
    6eeebbeeecceeeedeedeededeedeeeeeeeeeeee6
    6eeecceeecceeeedeedeedededeeeeeeeeeeeee6
    6eeccccccccceeedeedeedededeeeeeeeeeeeee6
    6eecbb444bbceeedeedeededdeeeeeeeeeeeeee6
    6eecb46464bceeedeedeededdeeeeeeeeeeeeee6
    6eecb44644bceeedeedeedededeeeeeeeeeeeee6
    6eecb46464bceeedeedeedededeeeeeeeeeeeee6
    6eecbb444bbceeedeedeededeedeeeeeeeeeeee6
    6eeccccccccceedddeeddeedeeedeeeeeeeeeee6
    6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6
    6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6
    6666666666666666666666666666666666666666
    `, SpriteKind.BuyFactory)
BuyTower.setPosition(20, 62)
BuyTower = sprites.create(img`
    6666666666666666666666666666666666666666
    6eeeee444eeeeeeeeeeeeeeeeeeeeeeeeeeeeee6
    6eeee46464eeeeeeeeeeeeeeeeeeeeeeeeeeeee6
    6eeee44644eeeeddeeeddeeeddeedeeedeeeeee6
    6eeee46464eeeeedeedeededeededeedeeeeeee6
    6eeeee444eeeeeedeedeededeedededeeeeeeee6
    6eeedd111ddeeeedeedeededeedededeeeeeeee6
    6eed11e1e11deeedeedeededeededdeeeeeeeee6
    6ee1e1e1e1e1eeedeedeededeededdeeeeeeeee6
    6ee1e1e1e1e1eeedeedeededeedededeeeeeeee6
    6ee1e1e1e1e1eeedeedeededeedededeeeeeeee6
    6ee1e1e1e1e1eeedeedeededeededeedeeeeeee6
    6eedddddddddeedddeeddeeeddeedeeedeeeeee6
    6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6
    6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6
    6666666666666666666666666666666666666666
    `, SpriteKind.CookieBank)
BuyTower.setPosition(20, 79)
BuyTower = sprites.create(img`
    6666666666666666666666666666666666666666
    6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6
    6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6
    6eeeefffffeeeeddeeeddeeeddeeeddeedeeede6
    6eeef57577feeeedeedeededeededeededeedee6
    6eef757f777feeedeedeededeededeedededeee6
    6eef7f75557feeedeedeededeededeedededeee6
    6eef7577757feeedeedeededeededeededdeeee6
    6eef75557f5feeedeedeededeededeededdeeee6
    6eef777f777feeedeedeededeededeedededeee6
    6eeef77577feeeedeedeededeededeedededeee6
    6eeeefffffeeeeedeedeededeededeededeedee6
    6eeeeeeeeeeeeedddeeddeeeddeeeddeedeeede6
    6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6
    6eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee6
    6666666666666666666666666666666666666666
    `, SpriteKind.CookieHacking)
BuyTower.setPosition(20, 96)
game.onUpdateInterval(1000, function () {
    CookieAmount += 14000 * HackerAmount
})
game.onUpdateInterval(1000, function () {
    CookieAmount += 120 * FactoryAmount
})
game.onUpdateInterval(1000, function () {
    CookieAmount += 11 * PlantAmount
})
game.onUpdateInterval(1000, function () {
    CookieAmount += 1 * KidAmount
})
game.onUpdateInterval(1000, function () {
    CookieAmount += 1300 * BankAmount
})
forever(function () {
    CookieCounter.setText(convertToText(CookieAmount))
})
