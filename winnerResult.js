
module.exports = class WinnerResult {
    constructor(numberOfThreeMatch, numberOfFourMatch, numberOfFiveMatch, numberOfSixMatch, numberOfLottos) {
        this.numberOfThreeMatch = numberOfThreeMatch;
        this.numberOfFourMatch = numberOfFourMatch;
        this.numberOfFiveMatch = numberOfFiveMatch;
        this.numberOfSixMatch = numberOfSixMatch;
        this.numberOfLottos = numberOfLottos;
    }
    
    getNumberOfThreeMatch() {
        return this.numberOfThreeMatch;
    }  

    getNumberOfFourMatch() {
        return this.numberOfFourMatch;
    }

    getNumberOfFiveMatch() {
        return this.numberOfFiveMatch;
    }

    getNumberOfSixMatch() {
        return this.numberOfSixMatch;
    }

    getWinnerRate() {
        var profit = this.numberOfThreeMatch * 5000 + this.numberOfFourMatch * 50000 + this.numberOfFiveMatch * 150000 + this.numberOfSixMatch * 20000000;
        var cost = this.numberOfLottos * 1000;

        return profit/cost;
    }
};

