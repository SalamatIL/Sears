let SpecReporter = require('jasmine-spec-reporter').SpecReporter; 
var HtmlReporter = require('protractor-beautiful-reporter');

exports.config = { 
    directConnect: true, 
    capabilities: {
        browserName: 'chrome'
    },
    //multiCapabilities: [
    //    {browserName: 'chrome'},
    //    {browserName: 'firefox'}
    //],

specs: ['../Tests/mainpage.spec.js'], 

/*
suites:{
    //to run only smoke: protractor conf.js --suite smoke
    //to run multiple suits: protractor conf.js --suite smoke, performance
    smoke: [
        '../Tests/appliancespage.spec.js',
        '../Tests/mainpage.spec.js'
    ],
    regresion: [
        '../Tests/*.spec.js'
    ]
},
*/

onPrepare: function(){ 

    browser.driver.manage().window().maximize();
    jasmine.getEnv().addReporter(new SpecReporter({ 
        displayFailuresSummary: true, 
        displayFailuredSpec: true, 
        displaySuiteNumber: true, 
        displaySpecDuration: true,
        showstack: false 
    })); 

    // Add a screenshot reporter and store screenshots: 
    jasmine.getEnv().addReporter(new HtmlReporter({
        baseDirectory: '../report/screenshots',
        preserveDirectory: false,
        screenshotsSubfolder: 'images',
        jsonsSubfolder: 'jsons',
        docName: 'MoneyGram-Report.html'
        }).getJasmine2Reporter());    
        
        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: '../report/allure-results'
        }));
    }, 

//seleniumAddress: 'http://localhost:4444/wd/hub',
    
jasmineNodeOpts: {
    showColors: true, 
    defaultTimeoutInterval: 30000,    
    print: function() {}
    }
};
