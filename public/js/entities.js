import Velocity from './traits/Velocity.js'
import {loadMarioSprites} from './sprites.js'
import Entity from './Entity.js'


export function createMario() {
  return loadMarioSprites()
    .then(sprite => {
      const mario = new Entity()

      mario.addTrait(new Velocity())
    
      mario.draw = function drawMario(context) {
        sprite.draw('idle', context, this.pos.x , this.pos.y) 
      }

      return mario
    })
}