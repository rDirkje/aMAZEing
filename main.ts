namespace SpriteKind {
    export const ResetTile = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLadder, function (sprite, location) {
    if (HasKey == true) {
        Scene += 1
        SetupScene()
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.ResetTile, function (sprite, otherSprite) {
    justtelepored = false
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    anikey()
    HasKey = true
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Teleport 1`, function (sprite, location) {
    if (justtelepored == false && Scene == 1) {
        justtelepored = true
        mySprite.setPosition(218, 188)
    }
    if (justtelepored == false && Scene == 2) {
        justtelepored = true
        mySprite.setPosition(248, 200)
    }
})
function anikey () {
    if (HasKey == false) {
        animation.runImageAnimation(
        mySprite,
        [img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ..........ff.....ff.............
            ..........fdf...fdf.............
            ..........fdbcbcbdf.............
            ..........fdbcbcbdf.............
            ........ffcbbbbbbbcff...........
            .........fbbbbdbbbbf............
            ........ffcbfbdbfbcff...........
            .........fbbfdddfbbf............
            ..........fbdd3ddbf.............
            ...........ffcccfff.............
            ..........ffccdccff.............
            ..........ffbdddbff.............
            .........fbfbbdbbfbf............
            .........fbfbfbfbfbf............
            .........fcfbfcfbfcf............
            ..........ffbfffbff.............
            ...........fdf.fdf..............
            ............ff.ff...............
            ................................
            ................................
            `,img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ..........ff.....ff.............
            ..........fdf...fdf.............
            ..........fdbcbcbdf.............
            ..........fdbcbcbdf.............
            ........ffcbbbbbbbcff...........
            .........fbbbbdbbbbf............
            ........ffcbfbdbfbcff...........
            .........fbbfdddfbbf....3.......
            ..........fbdd3ddbf....323......
            ...........ffcccfff...3..23.....
            ..........ffccdccff...3..23.....
            ..........ffbdddbff...23.3......
            .........fbfbbdbbfbf...23.......
            .........fbfbfbfbfbf...233......
            .........fcfbfcfbfcf...23.......
            ..........ffbfffbff.....23......
            ...........fdf.fdf..............
            ............ff.ff...............
            ................................
            ................................
            `,img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ..........ff.....ff.............
            ..........fdf...fdf.............
            ..........fdbcbcbdf.............
            ..........fdbcbcbdf.....3.......
            ........ffcbbbbbbbcff..323......
            .........fbbbbdbbbbf..3..23.....
            ........ffcbfbdbfbcff.3..23.....
            .........fbbfdddfbbf..23.3......
            ..........fbdd3ddbf....23.......
            ...........ffcccfff....233......
            ..........ffccdccff....23.......
            ..........ffbdddbff.....23......
            .........fbfbbdbbfbf............
            .........fbfbfbfbfbf............
            .........fcfbfcfbfcf............
            ..........ffbfffbff.............
            ...........fdf.fdf..............
            ............ff.ff...............
            ................................
            ................................
            `,img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ......................3.........
            .....................323........
            ....................3..23.......
            ..........ff.....ff.3..23.......
            ..........fdf...fdf.23.3........
            ..........fdbcbcbdf..23.........
            ..........fdbcbcbdf..233........
            ........ffcbbbbbbbcff23.........
            .........fbbbbdbbbbf..23........
            ........ffcbfbdbfbcff...........
            .........fbbfdddfbbf............
            ..........fbdd3ddbf.............
            ...........ffcccfff.............
            ..........ffccdccff.............
            ..........ffbdddbff.............
            .........fbfbbdbbfbf............
            .........fbfbfbfbfbf............
            .........fcfbfcfbfcf............
            ..........ffbfffbff.............
            ...........fdf.fdf..............
            ............ff.ff...............
            ................................
            ................................
            `,img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ....................3...........
            ...................323..........
            ..................3..23.........
            ..................3..23.........
            ..........ff.....f23.3..........
            ..........fdf...fdf23...........
            ..........fdbcbcbdf233..........
            ..........fdbcbcbdf23...........
            ........ffcbbbbbbbcff3..........
            .........fbbbbdbbbbf............
            ........ffcbfbdbfbcff...........
            .........fbbfdddfbbf............
            ..........fbdd3ddbf.............
            ...........ffcccfff.............
            ..........ffccdccff.............
            ..........ffbdddbff.............
            .........fbfbbdbbfbf............
            .........fbfbfbfbfbf............
            .........fcfbfcfbfcf............
            ..........ffbfffbff.............
            ...........fdf.fdf..............
            ............ff.ff...............
            ................................
            ................................
            `,img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ..................3.............
            .................323............
            ................3..23...........
            ................3..23...........
            ..........ff....2ff3............
            ..........fdf...fdf.............
            ..........fdbcbcbdf3............
            ..........fdbcbcbdf.............
            ........ffcbbbbbbbcff...........
            .........fbbbbdbbbbf............
            ........ffcbfbdbfbcff...........
            .........fbbfdddfbbf............
            ..........fbdd3ddbf.............
            ...........ffcccfff.............
            ..........ffccdccff.............
            ..........ffbdddbff.............
            .........fbfbbdbbfbf............
            .........fbfbfbfbfbf............
            .........fcfbfcfbfcf............
            ..........ffbfffbff.............
            ...........fdf.fdf..............
            ............ff.ff...............
            ................................
            ................................
            `,img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ..............3.................
            .............323................
            ............3..23...............
            ..........ff3..23ff.............
            ..........fdf3.3fdf.............
            ..........fdbcbcbdf.............
            ..........fdbcbcbdf.............
            ........ffcbbbbbbbcff...........
            .........fbbbbdbbbbf............
            ........ffcbfbdbfbcff...........
            .........fbbfdddfbbf............
            ..........fbdd3ddbf.............
            ...........ffcccfff.............
            ..........ffccdccff.............
            ..........ffbdddbff.............
            .........fbfbbdbbfbf............
            .........fbfbfbfbfbf............
            .........fcfbfcfbfcf............
            ..........ffbfffbff.............
            ...........fdf.fdf..............
            ............ff.ff...............
            ................................
            ................................
            `,img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ..............3.................
            ..........ff.323.ff.............
            ..........fdf..2fdf.............
            ..........fdbcbcbdf.............
            ..........fdbcbcbdf.............
            ........ffcbbbbbbbcff...........
            .........fbbbbdbbbbf............
            ........ffcbfbdbfbcff...........
            .........fbbfdddfbbf............
            ..........fbdd3ddbf.............
            ...........ffcccfff.............
            ..........ffccdccff.............
            ..........ffbdddbff.............
            .........fbfbbdbbfbf............
            .........fbfbfbfbfbf............
            .........fcfbfcfbfcf............
            ..........ffbfffbff.............
            ...........fdf.fdf..............
            ............ff.ff...............
            ................................
            ................................
            `,img`
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ................................
            ..........ff.....ff.............
            ..........fdf...fdf.............
            ..........fdbcbcbdf.............
            ..........fdbcbcbdf.............
            ........ffcbbbbbbbcff...........
            .........fbbbbdbbbbf............
            ........ffcbfbdbfbcff...........
            .........fbbfdddfbbf............
            ..........fbdd3ddbf.............
            ...........ffcccfff.............
            ..........ffccdccff.............
            ..........ffbdddbff.............
            .........fbfbbdbbfbf............
            .........fbfbfbfbfbf............
            .........fcfbfcfbfcf............
            ..........ffbfffbff.............
            ...........fdf.fdf..............
            ............ff.ff...............
            ................................
            ................................
            `],
        100,
        false
        )
    }
}
function SetupScene () {
    if (Scene == 0) {
        HasKey = false
        tiles.setCurrentTilemap(tilemap`level4`)
        mySprite.setPosition(144, 16)
    } else if (Scene == 1) {
        tiles.setCurrentTilemap(tilemap`level`)
        HasKey = false
        ResetTile1 = sprites.create(assets.image`ResetTile`, SpriteKind.ResetTile)
        ResetTile1.setPosition(88, 88)
        ResetTile2 = sprites.create(assets.image`ResetTile`, SpriteKind.ResetTile)
        ResetTile2.setPosition(104, 88)
        ResetTile3 = sprites.create(assets.image`ResetTile`, SpriteKind.ResetTile)
        ResetTile3.setPosition(232, 200)
        ResetTile4 = sprites.create(assets.image`ResetTile`, SpriteKind.ResetTile)
        ResetTile4.setPosition(248, 200)
        ResetTile5 = sprites.create(assets.image`ResetTile`, SpriteKind.ResetTile)
        ResetTile5.setPosition(232, 136)
        ResetTile6 = sprites.create(assets.image`ResetTile`, SpriteKind.ResetTile)
        ResetTile6.setPosition(248, 136)
        mySprite.setPosition(19, 18)
    } else if (Scene == 2) {
        HasKey = false
        tiles.setCurrentTilemap(tilemap`level2`)
        ResetTile1.setPosition(216, 232)
        ResetTile2.setPosition(216, 248)
        ResetTile3.setPosition(88, 8)
        ResetTile4.setPosition(88, 24)
        sprites.destroy(ResetTile5)
        sprites.destroy(ResetTile6)
        mySprite.setPosition(19, 18)
    } else if (Scene == 3) {
        game.splash("You won")
    } else {
    	
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`Teleport 2`, function (sprite, location) {
    if (justtelepored == false && Scene == 1) {
        justtelepored = true
        mySprite.setPosition(58, 108)
    }
    if (justtelepored == false && Scene == 2) {
        justtelepored = true
        mySprite.setPosition(56, 56)
    }
})
let ResetTile6: Sprite = null
let ResetTile5: Sprite = null
let ResetTile4: Sprite = null
let ResetTile3: Sprite = null
let ResetTile2: Sprite = null
let ResetTile1: Sprite = null
let justtelepored = false
let HasKey = false
let Scene = 0
let mySprite: Sprite = null
game.splash("Your aMAZEing")
game.setDialogFrame(img`
    .....cccccccccccccc.....
    ...cbd111111111111dbc...
    ..cd1111111111111111dc..
    .cd111111111111111111dc.
    .b11111111111111111111b.
    cd11111111111111111111dc
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    c1111111111111111111111c
    cd11111111111111111111dc
    .b11111111111111111111b.
    .cd111111111111111111dc.
    ..cd1111111111111111dc..
    ...c1d111111111111dbc...
    ....ccccccccccccccc.....
    ........................
    `)
game.setDialogCursor(img`
    . b b b b b b b b b b b b b b . 
    b e 4 4 4 4 4 4 3 4 4 4 4 4 e b 
    b e 4 4 4 4 4 3 2 3 4 4 4 4 e b 
    b e e 4 4 4 3 4 4 2 3 4 4 e e b 
    b b b b b b 3 4 4 2 3 b b b b b 
    . b b b b b b 3 c 3 b b b b b . 
    b c c c c c b 2 3 b c c c c c b 
    b c c c c c c 2 3 3 c c c c c b 
    b c c c c c c 2 3 c c c c c c b 
    b c c c c c c c 2 3 c c c c c b 
    b b b b b b b b b b b b b b b b 
    b e e e e e e e e e e e e e e b 
    b e e e e e e e e e e e e e e b 
    b c e e e e e e e e e e e e c b 
    b b b b b b b b b b b b b b b b 
    . b b . . . . . . . . . . b b . 
    `)
game.showLongText("Find the key to the door of the next level!", DialogLayout.Center)
mySprite = sprites.create(assets.image`kitty`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
scene.cameraFollowSprite(mySprite)
Scene = 0
SetupScene()
