const Currency = require("./Currency")

class WorldState {
    constructor() {
    this.reset()
    }

    reset() {
        console.log("Resetting World State")
        this.currencyArray = [];
    }

    addCurrency(currency) {
        if(!(currency instanceof Currency)) {
            throw new Error("Cannot add Currency. The 'dataset' should be a Currency class");
        }
        console.log("added Currency " + JSON.stringify(currency));
        this.currencyArray.push(currency);
    }

    public get currencyArray() {
        return this.currencyArray;
    }
}
export default new WorldState()