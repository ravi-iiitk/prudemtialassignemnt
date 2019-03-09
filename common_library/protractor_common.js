//var protractor = require('protractor');
var assert = require('assert');
var protractor = require('protractor');
var browser = protractor.browser;
var fs = require('fs');

exports.protractor_common= {

    check_click : function (element, time_out ) {
        var exp_cond = protractor.ExpectedConditions;
        browser.wait(exp_cond.visibilityOf(element),time_out);
        browser.wait(exp_cond.elementToBeClickable(element),time_out);
        element.click().then(function () {
            console.log("Web Element Clicked");
        });
    },

    check_enter_text :function (element,text, time_out ) {
        var exp_cond = browser.ExpectedConditions;
        browser.wait(exp_cond.presenceOf(element),time_out);
        browser.wait(exp_cond.visibilityOf(element),time_out);
        element.clear();
        element.sendKeys(text).then(function () {
            console.log("Text Entered");
        })
    },

    check_element_visible : function(element,time_out)
    {
        var exp_cond = browser.ExpectedConditions;
        browser.wait(exp_cond.visibilityOf(element),time_out);
        browser.wait(exp_cond.elementToBeClickable(element),time_out);
        assert(element.isDisplayed());
    },

    takeTheScreenshot: function (screenshot_name) {
        browser.driver.takeScreenshot().then(function (png) {
           writeScreenShot(png,screenshot_name);
        });
    },

    close_browser : function () {
        browser.driver.quit().then(function () {
            console.log("Browser Closed compltetely");
        });
    }
};

function writeScreenShot(png, filename) {
    var filePath = "test_reports/screenshots/";
    filename = filePath+filename+'.png';
    var stream = fs.createWriteStream(filename);
    stream.write(new Buffer(png, 'base64'));
    stream.end();
}


