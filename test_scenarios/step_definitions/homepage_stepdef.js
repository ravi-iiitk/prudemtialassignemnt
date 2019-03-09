var {Given} = require('cucumber');
var {When} = require('cucumber');
var {Then} = require('cucumber');
var home_page =  require('../../page_objects/home_page.js');

var {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1000);


Given('I open the Weather Map web application in browser', function () {
   // Write code here that turns the phrase above into concrete actions
    home_page.homepage.goToURL();
    return browser.getTitle().then(function(text){
        console.log('title is - ' + text);
    });
});

When('I am on home page', function () {
        // Write code here that turns the phrase above into concrete actions
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
  home_page.homepage.endTest();
});