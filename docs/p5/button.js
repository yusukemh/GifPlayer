
class Button {
    constructor(x, y, w, h, content) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.content = content
    }

    mouseOn() {
      return inRect([this.x, this.y, this.w, this.h], mouseX, mouseY)
    }

    draw() {
        fill(200);
        noStroke();
        strokeWeight(1);
        rect(this.x, this.y, this.w, this.h);
        fill(0);
        textSize(16);
        if (typeof this.content === 'string') {
          text(this.content,
            this.x + this.w / 2,
            this.y + this.h / 2,
          );
        } else {
          imageMode(CENTER)
          image(this.content, this.x + this.w / 2, this.y + this.h / 2, this.h, this.h)
        }
      }
}