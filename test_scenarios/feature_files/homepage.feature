Feature: Validation & Verification of the Home Page for integrity & Correctness

  Scenario: Verification of the header part of the home page.
    Given I open the Weather Map web application in browser
    When I am on home page
    Then I must see all the required elements in the header section.

  Scenario Outline: Verification of search functionlaity
    Given I open the Weather Map web application in browser
    When I am on home page
    And I enter the <city> for which weather has to be checked
    And Click on the search button
    Then I must the list of <city> with search cities in it.
    And Close the borwser
    Examples:
      |city     |
      |New Delhi|
      |Kolkata  |
