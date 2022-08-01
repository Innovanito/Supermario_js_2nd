export default class TileResolver {
  constructor(matrix, tileSize = 16) {
    this.matrix = matrix
    this.tileSize = tileSize
  }

  toIndex(pos) {
    return Math.floor(pos/ this.tileSize)
  }

  getByIndex(indexX, indexY) {
    const tile = this.matrix.get(indexX, indexY)
    const a = this.matrix.get()
    // console.log(tile);
    if (tile) {
      const y1 = indexY * this.tileSize
      return {
        tile,
        y1
      }
    }
  } 

  matchByPosition(posX, posY) {
    return this.getByIndex(
      this.toIndex(posX),
      this.toIndex(posY)
    )
  }
}

