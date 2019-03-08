var protractor = require('protractor');
var element = require('protractor');
var commonlib =  require("../common_library/protractor_common.js");
var screenshots = require('protractor-take-screenshots-on-demand');
const url = "https://openweathermap.org/#";
exports.homepage = {
    support_center_link : browser.element(by.xpath("//span[@class='hidden-xs']")),
    city_search_link : browser.element(by.id("nav-search")),
    sign_in_link : browser.element(by.xpath("//a[@class='pull-right'][contains(text(),'Sign In')]")),
    sign_up_link : browser.element(by.xpath("//a[contains(text(),'Sign Up')]")),
    celcious : browser.element(by.id("metric")),
    ferhentie : browser.element(by.id("imperial")),

    click_supportcenter : function () {
        commonlib.protractor_common.check_click(this.support_center_link,15);
    },

    click_signin : function () {
        commonlib.protractor_common.check_click(this.sign_in_link,15);
    },

    click_signup:  function () {
        commonlib.protractor_common.check_click(this.sign_up_link,15);
    },

   click_searchcity : function () {
       commonlib.protractor_common.check_click(this.city_search_link,15);
    },

    verifyIfElementsPresentHeader : function () {
        commonlib.protractor_common.takeTheScreenshot("Home_Page");
        commonlib.protractor_common.check_element_visible(this.support_center_link ,20);
        commonlib.protractor_common.check_element_visible(this.city_search_link ,20);
        commonlib.protractor_common.check_element_visible(this.sign_up_link ,20);
        commonlib.protractor_common.check_element_visible(this.sign_in_link ,20);
        commonlib.protractor_common.check_element_visible(this.celcious ,20);
        commonlib.protractor_common.check_element_visible(this.celcious ,20);
        commonlib.protractor_common.check_element_visible(this.ferhentie ,20);
    },

    goToURL : function () {
        protractor.browser.ignoreSynchronization = true;
        protractor.browser.driver.get(url);
        browser.driver.manage().window().maximize();

    }
};