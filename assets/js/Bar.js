const STATE = {
    STATIONARY : "#FFFFFF",
    ORDERED : "#00FF00",
    SWAPPING : "#FF0000",
    MOVING: "#0000FF",
    SELECTED: "#FF00FF"
};

class Bar {
    constructor(value) {
        this.value = value;
        this.state = STATE.STATIONARY;
    }
}