class Building {
    constructor(bwidth = 0.5, blength = 0.5, depth = 0.5) {
        this.bwidth = bwidth;
        this.blength = blength;
        this.depth = depth;
        var area = this.bwidth * this.blength * this.depth + 'm³';
        this.wallThickness = 'Wall Thickness ' + 0.5 + 'm';

    }
}

let castle = new Building();