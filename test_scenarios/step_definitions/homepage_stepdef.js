var {Given} = require('cucumber');
var {When} = require('cucumber');
var {Then} = require('cucumber');
var home_page =  require('../../page_objects/home_page.js');

var {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 10000);

Given('I open the Weather Map web application in browser', function () {
   // Write code here that turns the phrase above into concrete actions
    home_page.homepage.goToURL();
    return browser.getTitle().then(function(text){
        console.log('title is - ' + text);
    });
});

Given('I re-open the browser', function () {
    // Write code here that turns the phrase above into concrete actions
    home_page.homepage.restartTheBrowser();
    return browser.getWindowHandle().then(function(windowhandel){
        console.log('Windowhandel is - ' + windowhandel);
    });
});

When('I am on home page', function () {
        // Write code here that turns the phrase above into concrete actions
    home_page.homepage.verifyIamOnHomePaee();
    return browser.getTitle().then(function(text){
        console.log('title is - ' + text);
    });
});

When('I enter the New Delhi for which weather has to be checked', function () {
  // Write code here that turns the phrase above into concrete actions
   home_page.homepage.entercity_mainsearch("New Delhi");
    return browser.getTitle().then(function(text){
        console.log('title is - ' + text);
    });
});


When('Click on the search button', function () {
  // Write code here that turns the phrase above into concrete actions
  home_page.homepage.click_searchbutton();
  return browser.getTitle().then(function(text){
        console.log('title is - ' + text);
  });
});

Then('I must the list of New Delhi with search cities in it.', function () {
  // Write code here that turns the phrase above into concrete actions
  home_page.homepage.verify_cityfound_searchresults("New Delhi");
  return browser.getTitle().then(function(text){
        console.log('title is - ' + text);
  });
});

When('I enter the Kolkata for which weather has to be checked', function () {
  // Write code here that turns the phrase above into concrete actions
   home_page.homepage.entercity_mainsearch("Kolkata");
   return browser.getTitle().then(function(text){
       console.log('title is - ' + text);
   });
});

Then('I go back to home page', function () {
    // Write code here that turns the phrase above into concrete actions
    home_page.homepage.goBackToHome();
    return browser.getTitle().then(function(text){
        console.log('title is - ' + text);
    });
});

Then('I must the list of Kolkata with search cities in it.', function () {
  // Write code here that turns the phrase above into concrete actions
     home_page.homepage.verify_cityfound_searchresults("Kolkata");
     return browser.getTitle().then(function(text){
        console.log('title is - ' + text);
    });
});

Then('I must see all the required elements in the header section.', function () {
        // Write code here that turns the phrase above into concrete actions
  home_page.homepage.verifyIfElementsPresentHeader();
  return browser.getTitle().then(function(text){
        console.log('title is - ' + text);
  });
});

Then('Close the borwser', function () {
  // Write code here that turns the phrase above into concrete actions
   home_page.homepage.closeTheBrwoserInstance();

});


/*Given('I enter the invalid \"([^\"]*)\" for which weather has to be checked', function (invalid_city) {
    // Write code here that turns the phrase above into concrete actions
    home_page.homepage.entercity_mainsearch(this.mainsearch_field,invalid_city,20);
    return browser.getTitle().then(function(text){
        console.log('title is - ' + text);
    });
});*/


Given('I enter the invalid fdfadsfad for which weather has to be checked', function () {
    // Write code here that turns the phrase above into concrete actions
    home_page.homepage.entercity_mainsearch("fdfadsfad");
    return browser.getTitle().then(function(text){
        console.log('title is - ' + text);
    });
});

Then('I must see that I get No found message', function () {
    // Write code here that turns the phrase above into concrete actions
    home_page.homepage.verifyNoRecordAlertAppears();
    return browser.getTitle().then(function(text){
        console.log('title is - ' + text);
    });
});

Then('I must the heading of the body', function () {
    // Write code here that turns the phrase above into concrete actions
    home_page.homepage.verifyIfHeadingPresentHeader();
    return browser.getTitle().then(function(text){
        console.log('title is - ' + text);
    });
});

Then('Also I must see all the navigation link on the header', function () {
    // Write code here that turns the phrase above into concrete actions
    home_page.homepage.verifyIfNavigationPresentHeader();
    return browser.getTitle().then(function(text){
        console.log('title is - ' + text);
    });
});


When('I click on the Ferhenhite icon on right top corner of home page', function () {
    // Write code here that turns the phrase above into concrete actions
    home_page.homepage.clicktheFerheniteIcon();
    return browser.getTitle().then(function(text){
        console.log('title is - ' + text);
    });
});


Then('I must see the temperature coming on screen is in ferhenhite', function () {
    // Write code here that turns the phrase above into concrete actions
    home_page.homepage.verifyTemeratureShowingFerhenhite();
    return browser.getTitle().then(function(text){
        console.log('title is - ' + text);
    });
});

