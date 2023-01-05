Feature: Login action

    As a user, I want to login into application

    Scenario: Login with valid credentials
        Given I visit login page
        When I fill the login form with valid credentials
        Then I should see the home page

    Scenario Outline: Login with invalid credentials
        Given I visit login page
        When I fill the login form with "<username>" and "<password>"
        Then item should not be visible
        Examples:
            | username   | password     |
            | fail-user1 | secret_sauce |
            | fail-user2 | secret_sauce |