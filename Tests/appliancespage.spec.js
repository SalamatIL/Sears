var Appliances = require('../Pages/appliances.page.js');
var Base  =require('../Utilities/Base.js');
var MainPage = require('../Pages/main.page.js');
var MyJSONData = require('../TestData/myJsonData.json');



describe('testing appliances page', () =>{
    beforeAll(function(){
        browser.waitForAngularEnabled(false);
        Base.navigateToHome();
        MainPage.appliancesButton.click();        
    })

    it('should print list of appliances on ', () => {
        var myElements =  Appliances.appliancesList;
        myElements.getText().then(function(abc){
            console.log(abc);
        })       
    })
    it('should check te list /get data from json file', () =>{
        
        Appliances.dealsLink.getText().then(function(textFromLink){
            var expectedLink = MyJSONData.mainMenuList[0];
            console.log("expected text: "+expectedLink);
            console.log("actual text: "+textFromLink);
            expect(textFromLink).toEqual(expectedLink);
        })        
        Appliances.dealsLink.click();
    })
})