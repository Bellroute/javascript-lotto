import printPurchaseReselt from "./view";
import Lotto from "./lotto";
import {WinnerResult, getNumberOfThreeMatch} from "./winnerResult";

module.exports = {buyLottos, setLuckyNumber}

const MONEY_PER_LOTTO = 1000;
const NUMBER_OF_LOTTO = 6
let numbers = [];
var lottoList = [];

setNumbers => {
    for (var i = 1; i <= 35; i++) {
        numbers.push(i);
    }
}

buyLottos = money => {
    var numberOfLotto = money/MONEY_PER_LOTTO;
    printPurchaseReselt(numberOfLotto, makeLottos(numberOfLotto, numberOfLotto));
}

makeLottos = (numberOfLotto, numberOfLotto) => {
    for(var i = 0; i < numberOfLotto; i++) {
        lottoList.push(createLotto)
    }
    return lottoList;
}

createLotto => {
    var lotto = new Lotto();
    for(var i = 0; i < NUMBER_OF_LOTTO; i++) {
        lotto.numbers.push(setNumbers[Math.floor(Math.random * setNumbers.length)])   
    }

    return lotto;
}

setLuckyNumber = luckyNumbers => {
    checkWinner(luckyNumbers)
}

checkWinner = luckyNumbers => {
    numberOfThreeMatch = 0;
    numberOfFourMatch = 0;
    numberOfFiveMatch = 0;
    numberOfSixMatch = 0;

    for (const lotto in lottoList) {
        var count = 0;

        for(const number in luckyNumbers) {
            if(lotto.contain(number)) {
                count++
            }
        }

        if (count = 3) {
            numberOfThreeMatch++;
        }
        if (count = 4) {
            numberOfFourMatch++;
        }
        if (count = 5) {
            numberOfFiveMatch++;
        }
        if (count = 6) {
            numberOfSixMatch++;
        }
    }


}