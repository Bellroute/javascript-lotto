const Lotto = require('./lotto');
const view = require('./view');
const WinnerResult = require('./winnerResult');
const MONEY_PER_LOTTO = 1000;
const NUMBER_OF_LOTTO = 6
let numbers = [];

setNumbers = () => {
    for (var i = 1; i <= 45; i++) {
        numbers.push(i);
    }
}

shuffle = () => {
    for (var i = numbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [numbers[i], numbers[j]] = [numbers[j], numbers[i]];
    }
}

buyLottos = money => {
    var numberOfLotto = money/MONEY_PER_LOTTO;
    view.printPurchaseResult(numberOfLotto, makeLottos(numberOfLotto));
}

makeLottos = (numberOfLotto) => {
    var lottoList = [];
    for(var i = 0; i < numberOfLotto; i++) {
        lottoList.push(createLotto())
    }
    
    return lottoList;
}

createLotto = () => {
    setNumbers();
    shuffle();
    var lotto = [];
    lotto = numbers.slice(0, NUMBER_OF_LOTTO);

    return new Lotto(lotto);
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

    var winnerResult = new WinnerResult(numberOfThreeMatch, numberOfFourMatch, numberOfFiveMatch, numberOfSixMatch);
}

module.exports = {buyLottos, setLuckyNumber}
