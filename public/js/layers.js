export function createBackgroundLayer(level, sprites) {
  const buffer = document.createElement('canvas')
  buffer.width = 256
  buffer.height = 240

  const context = buffer.getContext('2d')

  level.tiles.forEach((tile, x, y) => {
    sprites.drawTile(tile.name, context, x, y)
  })

  return function drawBackgroundLayer(context) {
    context.drawImage(buffer,0,0)
  }
}

export function createSpriteLayer(entities) {
  return function SpriteLayer(context) {
    entities.forEach(entity => {
      entity.draw(context)
    })
  }
}

export function createCollisionLayer(level) {
  const resolvedTiles = []

  const tileResolver = level.tileCollider.tiles
  const tileSize = tileResolver.tileSize

  const getByIndexOriginal = tileResolver.getByIndex
  tileResolver.getByIndex = function getByIndexFake(x, y) {
    resolvedTiles.push({ x, y })
    // console.log({ x, y });
    // console.log('the value of resolvedtiles', resolvedTiles);
    return getByIndexOriginal.call(tileResolver,x,y)
  }
  console.log('activated');

  return function drawCollision(context) {
    resolvedTiles.forEach(({ x, y }) => {
      console.log('would draw',x,y);
    }) 

    resolvedTiles.length = 0
  }
  console.log('activated');
}
