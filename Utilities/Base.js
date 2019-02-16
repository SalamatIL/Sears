var Base = function(){

    this.QAEnvUrl = "https://www.sears.com/";
    this.QAUserName = "";
    this.QAPassword = "";
    
    this.DevUrl = "";
    this.DevUserName = "";
    this.DevPasswors = "";
    
    this.navigateToHome = function(){
        browser.get(this.QAEnvUrl);
    }

    this.SearsLogo = element(by.css('span.nav-sprite.nav-logo-base'));
}
module.exports=new Base();
