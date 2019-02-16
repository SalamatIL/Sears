var Appliances = function(){

    this.appliancesList = element.all(by.css('.ac>li>a'));
    this.dealsLink = element(by.id("gnf_01_tree_item_1"));
    this.customerServiceCol1 = element.all(by.css('li.footer-left ul.navItems-block>li>ul>li'));
    this.upTo40OffLink = element(by.id('shcContent'));
}
module.exports = new Appliances();