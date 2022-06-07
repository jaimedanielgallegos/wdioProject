Feature: buy

  @SuccessfulBuy
  Scenario Outline: Successful buy

    Given I enter as <username> p <password>
    When I click buy page
    When I buy <symbol> stock <qty>
    Then I should see a success buy message

    Examples:
    | username | password | symbol | qty |
    | Pedro    | Pedro    | AMZN   | 1   | 

  @MissingMoney
  Scenario Outline: insufficient money

    Given I enter as <username> p <password>
    When I click buy page
    When I buy <symbol> stock <qty>
    Then I should see an alert 

    Examples:
    | username | password | symbol | qty   | 
    | Pedro    | Pedro    | AMZN   | 200   |
   
  @NegativeBuy
  Scenario Outline: insufficient money

    Given I enter as <username> p <password>
    When I click buy page
    When I buy <symbol> with negative stock <qty>
    Then I should see an alert 

    Examples:
    | username | password | symbol | qty   |
    | Pedro    | Pedro    | AMZN   | -1   | 
      