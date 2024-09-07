namespace SpriteKind {
    export const BigCookie = SpriteKind.create()
}
let BigCookie = sprites.create(img`
    ..................
    ......ffffff......
    ....ff444444ff....
    ...f4444464444f...
    ..f446444444644f..
    ..f444446444444f..
    .f46444444444444f.
    .f44444444444464f.
    .f44444444446444f.
    .f44444464444444f.
    .f46444444444444f.
    .f44444444444644f.
    ..f444464444444f..
    ..f444444446444f..
    ...f4444464444f...
    ....ff444444ff....
    ......ffffff......
    ..................
    `, SpriteKind.BigCookie)
BigCookie.changeScale(3, ScaleAnchor.Middle)
BigCookie.setPosition(80, 50)
let Cursor = sprites.create(img`
    . f f . . . . . . . 
    . f 1 f . . . . . . 
    . f 1 1 f . . . . . 
    . f 1 1 1 f . . . . 
    . f 1 1 1 1 f . . . 
    . f 1 1 1 1 1 f . . 
    . f 1 1 1 f f f . . 
    . f 1 f 1 1 f . . . 
    . f f f 1 1 f . . . 
    . . . . f f . . . . 
    `, SpriteKind.Player)
controller.moveSprite(Cursor)
Cursor.setStayInScreen(true)
scene.setBackgroundColor(14)
let Milk = sprites.create(img`
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
    `, SpriteKind.Player)
