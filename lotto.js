module.exports = class Lotto {
    constructor(numbers) {
        this.numbers = numbers
    }

    getNumber() {
        return this.numbers;
    }

    contain(number) {
        var count = 0;

        for (var i in this.numbers) {
            if (number == this.numbers[i]) {
                count++;
            }
        }

        if (count == 1) {
            return true;
        }
    
        return false;
    }
};