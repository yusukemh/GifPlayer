class GigObj {
    constructor(img, x, y) {
        this.x = x
        this.y = y
        this.img = img
        this.is_playing = true
        this.curr_frame = 0
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