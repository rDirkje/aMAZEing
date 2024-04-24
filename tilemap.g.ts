// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level5":
            case "level4":return tiles.createTilemap(hex`100010000508080c0e0b0301050c080e0b0c0c0b060a0909090a07010409090909090a0c060b0101010607010101010101010607060e0c0301060701050b0e0803010607060a090201040d01060a09090201060706070101010101010607010101010607060a0808030105080b07010c08080a07060a090a0701060e0a0701060a090a07060701060a0b0a0c0a07010e070106070607010409090e090a07010b02010607060701010101010106070101010106070607010b010b0301060a080808080a070607010c01060701060a0909090909020e0701010106070106070101010101010b0a0808080a0b01060a080e0b08080f04090909090e0c010409090909090c0e`, img`
. . . . . . . 2 . . . . . . . . 
. . . . . . . 2 . . . . . . . . 
. . 2 2 2 . . 2 2 2 2 2 2 2 . . 
. . . . 2 . . 2 . . . . . 2 . . 
. . . . 2 . . 2 . . . . . 2 . . 
. . 2 2 2 2 2 2 . . 2 2 2 2 . . 
. . . . . 2 . . . . 2 . . . . . 
. . . . . 2 . . . . 2 . . . . . 
. . 2 . . . . . . . 2 . . 2 . . 
. . 2 . . . . . . . 2 . . 2 . . 
. . 2 2 2 2 2 2 . . 2 2 2 2 . . 
. . 2 . 2 . . 2 . . . . . . . . 
. . 2 . 2 . . 2 . . . . . . . . 
. . 2 2 2 . . 2 . . 2 2 2 2 2 2 
. . . . . . . 2 . . . . . . . . 
. . . . . . . 2 . . . . . . . . 
`, [myTiles.transparency16,sprites.builtin.brick,sprites.castle.tilePath9,sprites.castle.tilePath3,sprites.castle.tilePath7,sprites.castle.tilePath1,sprites.castle.tilePath4,sprites.castle.tilePath6,sprites.castle.tilePath2,sprites.castle.tilePath8,sprites.castle.tilePath5,sprites.castle.tileGrass2,sprites.castle.tileGrass1,sprites.dungeon.chestClosed,sprites.castle.tileGrass3,sprites.dungeon.stairLadder], TileScale.Sixteen);
            case "level3":
            case "level2":return tiles.createTilemap(hex`10001000030209020202020202020202010202020202050302010203020202020c0b0b0a010206020206060809010306080805090203080d0109070209020202020804010202090c0a090202080c0a0202080301020209080605020208080602030601020202020202020202020202020109020202010202020201020202020202050202020202010606050806060508090902020c0b0b0a0802020202020201010302020905060909020102020203030202020201020303020202060805090608080609020202010c0b0b08020208020205020e02020606090805080202060202060201020202030202010202020201020202020b0b0a02020202020202020202020c0b`, img`
. . 2 . . . . . . . . . . . . . 
. . 2 . . . . . . . . . . . . . 
. . 2 . . 2 2 2 2 . . 2 2 2 2 2 
. . 2 . . 2 . . 2 . . . . 2 . . 
. . 2 . . 2 . . 2 . . . . 2 . . 
. . 2 2 2 2 . . 2 2 2 . . 2 . . 
. . . . . . . . . . . . . 2 . . 
. . . . . . . . . . . . . 2 . . 
. . . . 2 2 2 2 2 2 2 2 2 2 . . 
. . . . 2 . . . . . . . . . . . 
2 2 2 2 2 . . . . . . . . . . . 
. . . . . . . 2 2 2 2 2 2 2 2 2 
. . . . . . . 2 . . 2 . . 2 . . 
. . 2 2 2 2 2 2 . . 2 . . 2 . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.castle.tileDarkGrass2,sprites.castle.tileDarkGrass1,sprites.castle.tileDarkGrass3,sprites.dungeon.chestClosed,sprites.dungeon.floorLight1,sprites.dungeon.floorLightMoss,sprites.dungeon.stairLadder,sprites.dungeon.floorLight4,sprites.dungeon.floorLight0,sprites.builtin.forestTiles3,sprites.builtin.forestTiles2,sprites.builtin.forestTiles1,myTiles.tile1,myTiles.tile2], TileScale.Sixteen);
            case "level0":
            case "level1":return tiles.createTilemap(hex`100010000305050505050413030505050505050402060606060a0813070d060606060a080e140f0e1007081307080e14141007080f121013110708130708130304130708101212131507081316011307081007081312120f1107080f11141107081107080f100f18050b0c050411030b0813070803041302060606060113070d0113070807080f12100f1114121107080e110708070c05050505050505050b0813030b08070d06060606060606060a081307090807080e14140e14141410070813190a080708131211131517041302011310070807080f110e121107080f110e12110708070c05050505050b0c05050505050b0802060606060606060606060606060601`, img`
. . . . . . . 2 . . . . . . . . 
. . . . . . . 2 . . . . . . . . 
2 2 2 2 2 . . 2 . . 2 2 2 2 . . 
. . . . 2 . . 2 . . 2 . . 2 . . 
. . . . 2 . . 2 . . 2 . . 2 . . 
. . 2 2 2 . . 2 2 2 2 . . 2 . . 
2 2 2 . . . . . . 2 . . . 2 . . 
. . 2 . . . . . . 2 . . . 2 . . 
. . 2 2 2 2 2 2 2 2 . . 2 2 . . 
. . . . . . . . . . . . 2 . . . 
. . . . . . . . . . . . 2 . . . 
. . 2 2 2 2 2 2 2 2 . . 2 . . . 
. . 2 . . . 2 . . 2 . . 2 2 . . 
. . 2 2 2 2 2 . . 2 2 2 2 2 . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.dungeon.darkGroundSouthEast0,sprites.dungeon.darkGroundSouthWest0,sprites.dungeon.darkGroundNorthWest0,sprites.dungeon.darkGroundNorthEast0,sprites.dungeon.darkGroundNorth,sprites.dungeon.darkGroundSouth,sprites.dungeon.darkGroundWest,sprites.dungeon.darkGroundEast,sprites.dungeon.darkGroundCenter,sprites.dungeon.darkGroundNorthEast1,sprites.dungeon.darkGroundSouthEast1,sprites.dungeon.darkGroundSouthWest1,sprites.dungeon.darkGroundNorthWest1,sprites.builtin.forestTiles5,sprites.builtin.forestTiles13,sprites.builtin.forestTiles7,sprites.builtin.forestTiles15,sprites.builtin.forestTiles10,sprites.builtin.forestTiles9,sprites.builtin.forestTiles6,sprites.builtin.forestTiles11,sprites.dungeon.chestClosed,sprites.dungeon.stairLadder,myTiles.tile1,myTiles.tile2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "teleport1":
            case "tile1":return tile1;
            case "teleport2":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
