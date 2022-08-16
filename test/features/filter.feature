Feature: Filtering and Comparison related test cases

  Background:
    Given I reset the webcontainer


#----------------------------------------------------------------------------------------------------------------------
# TEST CASE: As a Customer I can filter cryptocurrency prices compare content
#----------------------------------------------------------------------------------------------------------------------

  Scenario: Filter Cryptocurrency prices table
    Given I goto LANDING page
    And I remove any popup in homepage
    Then I can see cryptocurrency price in the table