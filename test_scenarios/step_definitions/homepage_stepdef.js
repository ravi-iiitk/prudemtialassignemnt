
var {Given} = require('cucumber');
var {When} = require('cucumber');
var {Then} = require('cucumber');
var home_page =  require('../../page_objects/home_page.js');

Given('I open the Weather Map web application in browser', function () {
   // Write code here that turns the phrase above into concrete actions
  home_page.homepage.goToURL();
});

When('I am on home page', function () {
        // Write code here that turns the phrase above into concrete actions

});
Then('I must see all the required elements in the header section.', function () {
        // Write code here that turns the phrase above into concrete actions
  home_page.homepage.verifyIfElementsPresentHeader();
});