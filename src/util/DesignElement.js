import { patterns, colors } from "./design_info";

export default class DesignElement {
    constructor(patternId, colorId) {
        this.patternId = patternId;
        this.colorId = colorId;

        this.visible = true;
        this.lock = false;
    }

    get pattern() {
        return patterns[this.patternId]
    }

    get color() {
        return colors[this.colorId]
    }

    get isBackground() {
        return this.pattern.isBackground
    }
}