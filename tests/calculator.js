let homepage = require('../pages/homepage');

// POM

describe('demo calculator tests', function () {
    beforeEach(() => {
        // open browser
        homepage.get('https://juliemr.github.io/protractor-demo/');
    });

    it('addition test', function () {
        //enter data
        homepage.enterFirstNumber('3');
        homepage.enterSecondNumber('2');

        // click on button
        homepage.clickGo();

        // verify result
        homepage.verifyResult('5');
    });

    it('substraction test', function () {
        // enter data
        homepage.enterFirstNumber('3');
        homepage.enterSecondNumber('2');
        homepage.selectOperator('-');

        // click on button
        homepage.clickGo();

        // verify results
        homepage.verifyResult('1');
    });

    it('Multiply test', function() {
        homepage.enterFirstNumber('2');
        homepage.enterSecondNumber('2');
        homepage.selectOperator('*');

        // click on button
        homepage.clickGo();

        // verify results
        homepage.verifyResult('4');
    });

    it('Divide test', function() {
        homepage.enterFirstNumber('2');
        homepage.enterSecondNumber('2');
        homepage.selectOperator('/');

        // click on button
        homepage.clickGo();

        // verify results
        homepage.verifyResult('1');
    });
    
});
