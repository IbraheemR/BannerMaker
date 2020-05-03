import { patterns, colors } from "./pattern_info";

export default class Patttern {
    constructor(patternId, colorId) {
        this.patternId = patternId;
        this.colorId = colorId;

        this.visible = true;
        this.lock = false;
    }

    get banner() {
        return patterns[this.patternId]
    }

    get color() {
        return colors[this.colorId]

    }
}