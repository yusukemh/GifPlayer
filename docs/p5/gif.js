class GigObj {
    constructor(img, x, y) {
        this.x = x
        this.y = y
        this.img = img
        this.is_playing = true
        this.curr_frame = 0
        this.play_button = new Button(0,0,0,0, "")
        this.fwrd_button = new Button(0,0,0,0, "")
        this.bkwd_button = new Button(0,0,0,0, "")
        this.dummy_counter = 0
    }

    reinitialize_GIF() {
        this.width = this.img.width
        this.height = this.img.height
        this.play_button = new Button(this.x + this.width / 2 - 25 +  0, this.y + this.height + 10, 30,10, "Play")//x, y, w, h, content
        this.fwrd_button = new Button(this.x + this.width / 2 - 25 + 40, this.y + this.height + 10, 30,10, "F")//x, y, w, h, content
        this.bkwd_button = new Button(this.x + this.width / 2 - 25 - 40, this.y + this.height + 10, 30,10, "B")//x, y, w, h, content

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
    }

    forward() {
        this.img.setFrame(this.img.getCurrentFrame() + 1)
    }

    backward() {
        this.img.setFrame(this.img.getCurrentFrame() - 1)
    }

    pause() {
        this.img.pause()
        this.curr_frame = this.img.getCurrentFrame()
    }

    play() {
        this.img.setFrame(this.curr_frame)
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