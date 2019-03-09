Feature: Validation & Verification of the Home Page for integrity & Correctness

  @homepage
  Scenario: Verification of the header part of the home page.
    Given I open the Weather Map web application in browser
    When I am on home page
    Then I must see all the required elements in the header section.
    And I must the heading of the body
    And Also I must see all the navigation link on the header
    #And Close the borwser

  Scenario: To verify the temperature degree scale changed then all places degree scale change
    Given I am on home page
    When I click on the Ferhenhite icon on right top corner of home page
    Then I must see the temperature coming on screen is in ferhenhite

  @searchcityvalid
  Scenario Outline: Verification of search functionlaity for valid city
    Given I am on home page
    And I enter the <city> for which weather has to be checked
    And Click on the search button
    Then I must the list of <city> with search cities in it.
    And I go back to home page
    Examples:
      |city     |
      |New Delhi|
      |Kolkata  |

  @searchcityinvalid
  Scenario Outline: Verification of search functionlaity for invalid city
    #Given I re-open the browser
    #Given I open the Weather Map web application in browser
    Given I am on home page
    And I enter the invalid <city> for which weather has to be checked
    And Click on the search button
    Then I must see that I get No found message
    And I go back to home page
    Examples:
      |city     |
      |fdfadsfad|

