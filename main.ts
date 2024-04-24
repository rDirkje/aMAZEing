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
    HasKey = true
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`Teleport 1`, function (sprite, location) {
    if (justtelepored == false) {
        justtelepored = true
        mySprite.setPosition(210, 180)
    }
})
function SetupScene () {
    if (Scene == 0) {
        HasKey = false
        tiles.setCurrentTilemap(tilemap`level4`)
        mySprite.setPosition(144, 16)
    } else if (Scene == 1) {
        tiles.setCurrentTilemap(tilemap`level`)
        HasKey = false
        justtelepored = false
        ResetTile1 = sprites.create(assets.image`ResetTile`, SpriteKind.ResetTile)
        ResetTile1.setPosition(72, 104)
        ResetTile2 = sprites.create(assets.image`ResetTile`, SpriteKind.ResetTile)
        ResetTile2.setPosition(80, 128)
        ResetTile3 = sprites.create(assets.image`ResetTile`, SpriteKind.ResetTile)
        ResetTile3.setPosition(80, 112)
        ResetTile4 = sprites.create(assets.image`ResetTile`, SpriteKind.ResetTile)
        ResetTile4.setPosition(208, 160)
        ResetTile5 = sprites.create(assets.image`ResetTile`, SpriteKind.ResetTile)
        ResetTile5.setPosition(224, 160)
        ResetTile6 = sprites.create(assets.image`ResetTile`, SpriteKind.ResetTile)
        ResetTile6.setPosition(224, 176)
        mySprite.setPosition(19, 18)
    } else if (Scene == 2) {
        HasKey = false
        tiles.setCurrentTilemap(tilemap`level2`)
        ResetTile1 = sprites.create(assets.image`ResetTile`, SpriteKind.ResetTile)
        ResetTile1.setPosition(48, 32)
        ResetTile2 = sprites.create(assets.image`ResetTile`, SpriteKind.ResetTile)
        ResetTile2.setPosition(64, 32)
        ResetTile3 = sprites.create(assets.image`ResetTile`, SpriteKind.ResetTile)
        ResetTile3.setPosition(64, 48)
        ResetTile4 = sprites.create(assets.image`ResetTile`, SpriteKind.ResetTile)
        ResetTile4.setPosition(224, 192)
        ResetTile5 = sprites.create(assets.image`ResetTile`, SpriteKind.ResetTile)
        ResetTile5.setPosition(224, 208)
        ResetTile6 = sprites.create(assets.image`ResetTile`, SpriteKind.ResetTile)
        ResetTile6.setPosition(240, 208)
        mySprite.setPosition(19, 18)
    } else if (Scene == 3) {
        game.splash("You won")
    } else {
    	
    }
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`Teleport 2`, function (sprite, location) {
    if (justtelepored == false) {
        justtelepored = true
        mySprite.setPosition(50, 100)
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
mySprite = sprites.create(assets.image`kitty`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
scene.cameraFollowSprite(mySprite)
Scene = 0
SetupScene()
