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
        var profit = this.numberOfThreeMatch * THREE_MATCH_REWARD + this.numberOfFourMatch * FOUR_MATCH_REWARD + this.numberOfFiveMatch * FIVE_MATCH_REWARD + this.numberOfSixMatch * SIX_MATCH_REWARD;
        var cost = this.numberOfLottos * 1000;

        return profit/cost;
    }
};

const THREE_MATCH_REWARD = 5000;
const FOUR_MATCH_REWARD = 50000;
const FIVE_MATCH_REWARD = 150000;
const SIX_MATCH_REWARD = 20000000;

