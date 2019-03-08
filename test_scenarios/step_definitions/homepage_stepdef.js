
var {Given} = require('cucumber');
var {When} = require('cucumber');
var {Then} = require('cucumber');
var home_page =  require('../../page_objects/home_page.js');

Given('I open the Weather Map web application in browser', function () {
   // Write code here that turns the phrase above into concrete actions
  return home_page.homepage.goToURL();

});

When('I am on home page', function () {
        // Write code here that turns the phrase above into concrete actions
});

When('I enter the New Delhi for which weather has to be checked', function () {
  // Write code here that turns the phrase above into concrete actions
  return  home_page.homepage.entercity_mainsearch("New Delhi");
});


When('Click on the search button', function () {
  // Write code here that turns the phrase above into concrete actions
   return  home_page.homepage.click_searchbutton();

});

Then('I must the list of New Delhi with search cities in it.', function () {
  // Write code here that turns the phrase above into concrete actions
  // home_page.homepage.verify_cityfound_searchresults("New Delhi");
 // .then(callback);
});

When('I enter the Kolkata for which weather has to be checked', function () {
  // Write code here that turns the phrase above into concrete actions
   return home_page.homepage.entercity_mainsearch("Kolkata");
});

Then('I must the list of Kolkata with search cities in it.', function () {
  // Write code here that turns the phrase above into concrete actions
 // home_page.homepage.verify_cityfound_searchresults("Kolkata");
});

Then('I must see all the required elements in the header section.', function () {
        // Write code here that turns the phrase above into concrete actions
   return home_page.homepage.verifyIfElementsPresentHeader();
});

Then('Close the borwser', function () {
  // Write code here that turns the phrase above into concrete actions
  return home_page.homepage.endTest();
});