var protractor = require('protractor');
var browser = protractor.browser;
var element = require('protractor');
var assert = require('assert');
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
    mainsearch_field : browser.element(by.xpath("//input[@placeholder='Your city name']")),
    search_button : browser.element(by.xpath("//button[contains(text(),'Search')]")),
    currentLoc_button : browser.element(by.xpath("//button[contains(text(),'Current location')]")),

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

    entercity_mainsearch: function(city_name){
       return commonlib.protractor_common.check_enter_text(this.mainsearch_field, city_name,30);
    },

    click_searchbutton : function()
    {
        browser.sleep(5000);
        return commonlib.protractor_common.check_click(this.search_button,30);
    },

    verify_cityfound_searchresults: function(search_cityname) {
        var searchresult_table = browser.element(by.xpath("//table[@class='table']"));
        var allLInkinTable = searchresult_table.all(by.tagName("a"));
        var found;
        allLInkinTable.map(function(links){

            return links;

        }).then(function(links) {
            for (var i = 0; i< links.length; i++) {
                links[i].$('h3>a').getText().then(function (text) {
                    console.log('text of elem1 is: ' + text);
                    if(text===search_cityname)
                    {
                        found = true;
                        break;
                    }
                    else
                        found = false;
                })
            }
            assert(found);
        });
    },
    verifyIfElementsPresentHeader : function () {
        commonlib.protractor_common.takeTheScreenshot("Home_Page");
        commonlib.protractor_common.check_element_visible(this.support_center_link ,20);
        commonlib.protractor_common.check_element_visible(this.city_search_link ,20);
        commonlib.protractor_common.check_element_visible(this.sign_up_link ,20);
        commonlib.protractor_common.check_element_visible(this.sign_in_link ,20);
        commonlib.protractor_common.check_element_visible(this.celcious ,20);
        commonlib.protractor_common.check_element_visible(this.celcious ,20);
        return commonlib.protractor_common.check_element_visible(this.ferhentie ,20);
    },

    goToURL : function () {
        protractor.browser.ignoreSynchronization = true;
        browser.driver.get(url).then(function () {
            browser.driver.sleep(3000).then(function () {
                browser.waitForAngular().then(function () {
                    console.log("Web Page Opened");
                });
            });
        });
        this.currentLoc_button.click();
        return browser.driver.manage().window().maximize();
    },

    endTest : function () {
        return commonlib.protractor_common.close_browser();
    }

};