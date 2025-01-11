let DISPLAY_SCALE = 3

class GigObj {
    constructor(img, x, y) {
        this.x = x
        this.y = y
        this.img = img
        this.is_playing = true
        this.play_button = new Button(0,0,0,0, "")
        this.fwrd_button = new Button(0,0,0,0, "")
        this.bkwd_button = new Button(0,0,0,0, "")
    }

    reinitialize_GIF() {
        this.width = this.img.width
        this.height = this.img.height
        this.display_width = this.width * DISPLAY_SCALE
        this.display_height = this.height * DISPLAY_SCALE
        this.x = window.width / 2 - this.display_width / 2
        this.y = window.height / 2 - this.display_height / 2
        this.play_button = new Button(this.x + this.display_width / 2 - 25 +  0, this.y + this.display_height + 10, 30,10, "||")//x, y, w, h, content
        this.fwrd_button = new Button(this.x + this.display_width / 2 - 25 + 40, this.y + this.display_height + 10, 30,10, ">>")//x, y, w, h, content
        this.bkwd_button = new Button(this.x + this.display_width / 2 - 25 - 40, this.y + this.display_height + 10, 30,10, "<<")//x, y, w, h, content

        this.play_button.mousePressed = () => {
            if (this.play_button.mouseOn()) {
                this.toggle_state()
            }
        }

        this.fwrd_button.mousePressed = () => {
            if (this.fwrd_button.mouseOn()) {
                this.forward()
            }
        }

        this.bkwd_button.mousePressed = () => {
            if (this.bkwd_button.mouseOn()) {
                this.backward()
            }
        }
    }

    mousePressed(){
        this.play_button.mousePressed()
        this.fwrd_button.mousePressed()
        this.bkwd_button.mousePressed()
    }

    update() {//to be called in draw()
        this.play_button.draw()
        this.bkwd_button.draw()
        this.fwrd_button.draw()
        text(this.img.getCurrentFrame(), this.play_button.x + 10, this.play_button.y + 30)
    }

    forward() {
        this.img.setFrame(this.img.getCurrentFrame() + 1)
    }

    backward() {
        this.img.setFrame(this.img.getCurrentFrame() - 1)
    }

    pause() {
        this.play_button.content = '>'
        this.img.pause()
    }

    play() {
        this.play_button.content = '||'
        this.img.setFrame(this.img.getCurrentFrame())
        this.img.play()
    }

    toggle_state() {
        if (this.is_playing) {
            this.is_playing = false
            this.pause()
        } else {
            this.is_playing = true
            this.play()
        }
    }
}