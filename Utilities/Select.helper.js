var SelectHelper = function(selector){ //selector is locator starting: by. ...
    this.webElement = element(selector);
}
SelectHelper.prototype.getOptions = function(){
    return this.webElement.all(by.tagname('option'));
}
SelectHelper.prototype.getSelectedOptions = function(){
    return this.webElement.all(by.css('option[selected="selected"]'));
}
SelectHelper.prototype.selectByValue = function(value){
    return this.webElement.all(by.css('option[value="'+value+'"]')).click();
}
SelectHelper.prototype.selectByPartialText = function(text){
    return this.webElement.all(by.cssContainingText('option', text)).click();
}
SelectHelper.prototype.selectByText = function(text){
    return this.webElement.all(by.xpath('option[.="' + text + '"]')).click();
}

module.exports = SelectHelper;