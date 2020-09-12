let homepage = function () {

    let firstNumber_input = element(by.model('first'));
    let secondNumer_input = element(by.model('second'));
    let operator_select = element(by.model('operator'));
    let goButton = element(by.css('[ng-click="doAddition()"]'));

    this.get = function(url) {
        browser.get(url);
    }

    this.enterFirstNumber = function(firstNumber) {
        firstNumber_input.sendKeys(firstNumber);
    }

    this.enterSecondNumber = function(secondNumber) {
        secondNumer_input.sendKeys(secondNumber);
    }

    this.selectOperator = function(operator) {
        operator_select.sendKeys(operator);
    }

    this.clickGo = function() {
        goButton.click();
    }

    this.verifyResult = function(result) {
       let output = element(by.cssContainingText('.ng-binding',result));
       expect(output.getText()).toEqual(result);
    }
};

module.exports = new homepage();