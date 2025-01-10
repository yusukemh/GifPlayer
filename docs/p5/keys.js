class Key {
    constructor(hold_patience, key){
        this.key = key
        this.hold_patience = hold_patience
        this.curr_patience = 0
    }

    update(){//to be called within draw()
        if (keyIsDown(this.key)){
            this.curr_patience += 1
        }
    }

    isHeldDown(){
        return this.curr_patience > this.hold_patience
    }

    keyReleased(){
        this.curr_patience = 0
    }
}

class LeftArrowKey extends Key {
    constructor(hold_patience){
      super(hold_patience, LEFT_ARROW)
    }
}

class RightArrowKey extends Key {
    constructor(hold_patience){
      super(hold_patience, RIGHT_ARROW)
    }
}

class SpaceKey extends Key {
    constructor(hold_patience){
        super(hold_patience, 32)
    }
}