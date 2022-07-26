import Compositor from './Compositor.js'
import TileCollider from './TileCollider.js'
import { Matrix } from './math.js'

export default class Level {
  constructor() {
    this.comp = new Compositor()
    this.entities = new Set()
    this.tiles = new Matrix()

    this.tileCollider = new TileCollider(this.tiles)
  }

  update(deltaTime) {
    this.entities.forEach(entity => {
      entity.update(deltaTime)

      this.tileCollider.test(entity)
    })
  }
} 

function createCollisionLayer(level) {
  const tileResolver = level.tileCollider.tiles
  const tileSize = tileResolver.tileSize

  const getByIndexOriginal = tileResolver.getByIndex
  tileResolver.getByIndex = function getByIndexFake(x, y) {
    return getByIndexOriginal
  }
}