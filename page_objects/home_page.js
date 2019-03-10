var protractor = require('protractor');
var browser = protractor.browser;
var element = require('protractor');
var assert = require('assert');
var commonlib =  require("../common_library/protractor_common.js");
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

    webapp_log: browser.element(by.xpath("//a[@class='navbar-brand']//img[@class='img-responsive']")),

    noresult_alert : browser.element(by.xpath("//div[@class='alert alert-warning']")),

    hearding_h2 : browser.element(by.xpath("//h2[@class='widget__title']")),

    weatherlon_label : browser.element(by.xpath("//h2[@class='weather-widget__city-name']")),

    weather_Table : browser.element(by.xpath("//table[@class='weather-widget__items']")),

    weather_link : browser.element(by.xpath("//a[@class='nav__link bg-hover-color'][contains(text(),'Weather')]")),

    maps_link : browser.element(by.xpath("//a[@class='nav__link dropdown-toggle bg-hover-color']")),

    guide_link : browser.element(by.xpath("//a[contains(text(),'Guide')]")),

    price_link : browser.element(by.xpath("//a[@class='nav__link bg-hover-color'][contains(text(),'Price')]")),

    api_link :  browser.element(by.xpath("//a[@class='nav__link bg-hover-color'][contains(text(),'API')]")),

    partner_link :  browser.element(by.xpath("//a[contains(text(),'Partners')]")),

    stattion_link :  browser.element(by.xpath("//a[contains(text(),'Stations')]")),

    weidgt_link :  browser.element(by.xpath("//a[contains(text(),'Widgets')]")),

    blog_link :  browser.element(by.xpath("//a[contains(text(),'Blog')]")),

    lon_temp : browser.element(by.xpath("//h3[@class='weather-widget__temperature']")),


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
        commonlib.protractor_common.check_enter_text(this.mainsearch_field, city_name,30);
        browser.sleep(1000);
        commonlib.protractor_common.takeTheScreenshot("City Name Entered");
    },

    click_searchbutton : function()
    {
        commonlib.protractor_common.check_click(this.search_button,30);
        browser.sleep(1000);
        commonlib.protractor_common.takeTheScreenshot("Search Button Clicked");
    },

    verify_cityfound_searchresults: function(search_cityname) {
        browser.sleep(3000);

        var searchresult_table = browser.element(by.xpath("//table[@class='table']"));
        var allLInkinTable = searchresult_table.all(by.tagName("a"));
        allLInkinTable.count().then(function (noOfLinks) {
            console.log("No of links is:"+noOfLinks);
            var counter=0;
            var found = false;
            var reallyfound = false;
            for (var i = 0; i< noOfLinks && found ===false; i++) {
                allLInkinTable.get(i).getText().then(function (linkText) {
                    console.log('Link Text of element is: ' + linkText);
                    counter++;
                    console.log("Value of Counter :"+counter);
                    if(linkText.includes(search_cityname))
                    {
                        console.log("Link found");
                        found = true;
                        reallyfound = true;
                        checkTheFlag(reallyfound,found,counter,noOfLinks);
                    }
                    else
                    {
                        found = false;
                        checkTheFlag(reallyfound,found,counter,noOfLinks);
                    }

                })
            }
        });
        function checkTheFlag(reallyfound,found,counter,noOfLinks) {
           if(reallyfound===false && found===false&&counter===noOfLinks)
           {
               assert(found);
           }
        }
    },

    verifyIfElementsPresentHeader : function () {
        browser.sleep(1000);
        commonlib.protractor_common.takeTheScreenshot("Home_Page");
        commonlib.protractor_common.check_element_visible(this.support_center_link ,20);
        commonlib.protractor_common.check_element_visible(this.city_search_link ,20);
        commonlib.protractor_common.check_element_visible(this.sign_up_link ,20);
        commonlib.protractor_common.check_element_visible(this.sign_in_link ,20);
        commonlib.protractor_common.check_element_visible(this.celcious ,20);
        commonlib.protractor_common.check_element_visible(this.celcious ,20);
        commonlib.protractor_common.check_element_visible(this.ferhentie ,20);
    },

    verifyIfHeadingPresentHeader : function () {
        browser.sleep(1000);
        commonlib.protractor_common.check_element_visible(this.hearding_h2 ,20);
        commonlib.protractor_common.check_element_visible(this.weatherlon_label ,20);
    },

    verifyIfNavigationPresentHeader : function () {
        browser.sleep(1000);
        commonlib.protractor_common.check_element_visible(this.weather_Table ,20);
        commonlib.protractor_common.check_element_visible(this.weather_link ,20);
        commonlib.protractor_common.check_element_visible(this.maps_link ,20);
        commonlib.protractor_common.check_element_visible(this.guide_link ,20);
        commonlib.protractor_common.check_element_visible(this.price_link ,20);
        commonlib.protractor_common.check_element_visible(this.api_link ,20);
        commonlib.protractor_common.check_element_visible(this.partner_link ,20);
        commonlib.protractor_common.check_element_visible(this.price_link ,20);
        commonlib.protractor_common.check_element_visible(this.stattion_link ,20);
        commonlib.protractor_common.check_element_visible(this.weidgt_link ,20);
        commonlib.protractor_common.check_element_visible(this.blog_link ,20);
    },

    goToURL : function () {
        protractor.browser.ignoreSynchronization = true;
        browser.driver.get(url).then(function () {
            browser.driver.sleep(1000).then(function () {
                    console.log("Web Page Opened");
            });
        });
        browser.driver.manage().window().maximize().then(function () {
            console.log("Window Maximized");
        });
    },

    goBackToHome : function(){
       commonlib.protractor_common.takeTheScreenshot("Home_Page");
       commonlib.protractor_common.check_click(this.webapp_log,20);
    },

    restartTheBrowser : function(){
        browser.restart().then(function () {
            console.log("Browser is restarted");
        });
    },

    verifyIamOnHomePaee : function(){
        commonlib.protractor_common.check_element_visible(this.mainsearch_field);
    },

    quitTheBrowser : function () {
       browser.quit();
    },

    closeTheBrwoserInstance : function () {
      browser.close();
    },

    verifyNoRecordAlertAppears : function () {
        browser.sleep(3000);
        commonlib.protractor_common.check_element_visible(this.noresult_alert);
        commonlib.protractor_common.takeTheScreenshot("No_CITY_Records");
    },

    verifyTemeratureShowingFerhenhite : function () {
        this.lon_temp
            .getText().then(function (textTemp) {
            assert(textTemp.includes("°F"));
        })
    },

    clicktheFerheniteIcon : function () {
        commonlib.protractor_common.check_click(this.celcious,20);
        browser.sleep(5000);
        commonlib.protractor_common.takeTheScreenshot("Temperature_Scale_Changed");
    }


};

