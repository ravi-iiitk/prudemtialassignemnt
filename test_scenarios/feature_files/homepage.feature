Feature: Validation & Verification of the Home Page for integrity & Correctness

  Scenario: Verification of the header part of the home page.
    Given I open the Weather Map web application in browser
    When I am on home page
    Then I must see all the required elements in the header section.
