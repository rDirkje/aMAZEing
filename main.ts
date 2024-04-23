scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.stairLadder, function (sprite, location) {
    if (HasKey == true) {
        tiles.setCurrentTilemap(tilemap`level2`)
    }
    HasKey = true
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    HasKey = true
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    HasKey = true
})
let HasKey = false
game.splash("Your aMAZEing")
tiles.setCurrentTilemap(tilemap`level2`)
let mySprite = sprites.create(assets.image`kitty`, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 100)
scene.cameraFollowSprite(mySprite)
HasKey = false
