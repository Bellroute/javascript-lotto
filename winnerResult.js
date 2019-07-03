
module.exports = class WinnerResult {
    constructor(NumberOfThreeMatch, NumberOfFourMatch, NumberOfFiveMatch, NumberOfSixMatch, winnerRate) {
        this.NumberOfThreeMatch = NumberOfThreeMatch;
        this.NumberOfFourMatch = NumberOfFourMatch;
        this.NumberOfFiveMatch = NumberOfFiveMatch;
        this.NumberOfSixMatch = NumberOfSixMatch;
        this.winnerRate = winnerRate;
    }
    
    getNumberOfThreeMatch() {
        return this.NumberOfThreeMatch;
    }  

    getNumberOfFourMatch() {
        return this.NumberOfFourMatch;
    }

    getNumberOfFiveMatch() {
        return this.NumberOfFiveMatch;
    }

    getNumberOfSixMatch() {
        return this.NumberOfSixMatch;
    }

    getWinnerRate() {
        return this.winnerRate;
    }
};

