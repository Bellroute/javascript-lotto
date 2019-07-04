exports.printPurchaseResult = (count,lottoList) => {
    console.log('로또', count, '개를 발행했습니다.')

    for (const i in lottoList) {
        console.log(lottoList[i].getNumber());
    }
}

exports.printWinnerStatistic = winnerResult => {
    console.log('당첨 통계')
    console.log('---------')
    console.log('3개 일치 (5000원)- ', winnerResult.getNumberOfThreeMatch(), '개')
    console.log('4개 일치 (50000원)- ', winnerResult.getNumberOfFourMatch(), '개')
    console.log('5개 일치 (150000원)- ', winnerResult.getNumberOfFiveMatch(), '개')
    console.log('6개 일치 (20000000원)- ', winnerResult.getNumberOfSixMatch(), '개')
    console.log('나의 수익률은 ', winnerResult.getWinnerRate(), '%입니다.')
}

