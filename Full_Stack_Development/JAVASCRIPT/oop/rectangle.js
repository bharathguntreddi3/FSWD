// create rectangle class with width and length and create methods getarea and getperimeter and we can setwidth and setlength, getwidth, getlength

class rectangle {
    constructor(width, length) {
        this.width = width;
        this.length = length;
    }
    getArea() {
        return this.width * this.length;
    }
    getPerimeter() {
        return 2 * (this.width + this.length);
    }
    setWidth(width) {
        this.width = width;
    }
    setLength(length) {
        this.length = length;
    }
    getWidth() {
        return this.width;
    }
    getLength() {
        return this.length;
    }
}