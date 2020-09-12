let homepage = require('../pages/homepage');

// first version
// describe('demo calculator tests', function () {

//     beforeEach(() => {
//         // open browser
//         browser.get('https://juliemr.github.io/protractor-demo/');
//     })


//     it('addition test', function () {
//         //enter data
//         element(by.model('first')).sendKeys(3);
//         element(by.model('second')).sendKeys(2);

//         // click on button
//         element(by.css('[ng-click="doAddition()"]')).click();

//         // verify result
//         let result = element(by.cssContainingText('.ng-binding','5'));
//         expect(result.getText()).toEqual('5');
//     });

//     it('substration test', function () {
//         //enter data        
//         element(by.model('first')).sendKeys(3);
//         element(by.model('second')).sendKeys(2);
//         element(by.model('operator')).sendKeys('-');

//         // click on button
//         element(by.css('[ng-click="doAddition()"]')).click();

//         // get result
//         let result = element(by.cssContainingText('.ng-binding', '1'));

//         // verified the result
//         expect(result.getText()).toEqual('1');
//     });

// })

// POM version
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
        homepage.ClickGo();

        // verify results
        homepage.verifyResult('4');
    });

})
