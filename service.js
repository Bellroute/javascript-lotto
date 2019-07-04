const Lotto = require('./lotto');
const view = require('./view');
const WinnerResult = require('./winnerResult');
const MONEY_PER_LOTTO = 1000;
const NUMBER_OF_LOTTO = 6
let numbers = [];
var lottoList = [];

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
    setNumbers();
    for(var i = 0; i < numberOfLotto; i++) {
        lottoList.push(createLotto())
    }

    return lottoList;
}

createLotto = () => {
    shuffle();
    var lotto = [];
    lotto = numbers.slice(0, NUMBER_OF_LOTTO);

    return new Lotto(lotto);
}

setLuckyNumber = luckyNumbers => {
    checkWinner(luckyNumbers)
}

checkWinner = luckyNumbers => {
    var numberOfThreeMatch = 0;
    var numberOfFourMatch = 0;
    var numberOfFiveMatch = 0;
    var numberOfSixMatch = 0;

    for (var i = 0; i < lottoList.length; i++) {
        var count = 0;

        for(var j in luckyNumbers) {
            if(lottoList[i].contain(luckyNumbers[j])) {
                count++;
            }

            console.log('lotto: ', lottoList[i]);
            console.log('number: ', luckyNumbers[j]);
            console.log('count: ', count);
        }

        if (count == 3) {
            numberOfThreeMatch++;
        }
        if (count == 4) {
            numberOfFourMatch++;
        }
        if (count == 5) {
            numberOfFiveMatch++;
        }
        if (count == 6) {
            numberOfSixMatch++;
        }
    }

    console.log(numberOfThreeMatch);
    console.log(numberOfFourMatch);
    console.log(numberOfFiveMatch);
    console.log(numberOfSixMatch);

    view.printWinnerStatistic(new WinnerResult(numberOfThreeMatch, numberOfFourMatch, numberOfFiveMatch, numberOfSixMatch, lottoList.length));
}

module.exports = {buyLottos, setLuckyNumber}
