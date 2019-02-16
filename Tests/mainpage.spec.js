var Base = require('../Utilities/Base.js');
var MainPage = require('../Pages/main.page.js');

describe('testing home page', () =>{

    beforeAll(function(){
        browser.waitForAngularEnabled(false)
        Base.navigateToHome();
    })
    
    it('should click on "Appliances"', () => {
        MainPage.appliancesButton.click();
    })
})