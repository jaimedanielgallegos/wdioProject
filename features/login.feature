Feature: login

  @successfulLogin
  Scenario Outline: Successful login

    Given I am on the login page
    When I login with <username> and <password>
    Then I should see a welcome message

    Examples:
      | username | password |
      | Pedro    | Pedro    | 

  Scenario Outline: Login with wrong user

    Given I am on the login page
    When I login with <username> and <password>
    Then I should see an alert

    Examples:
      | username | password |
      | Pedro    | Pedro    |

  Scenario Outline: Login with wrong password

    Given I am on the login page
    When I login with <username> and <password>
    Then I should see an alert

    Examples:
      | username | password |
      | Pedro    | Pedross  |