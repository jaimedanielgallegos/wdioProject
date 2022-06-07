Feature: register

  Scenario Outline: Successful register

    Given I am on the register page
    When I enter my information <Fname> <Lname> <username> <Email> <Password> <RPassword> <PhoneNumber> <Date> <CCard> <ExpDate> <CVV>
    Then I should see a success message <message>

    Examples:
      | Fname | Lname   | username     | Email           | Password  | RPassword | PhoneNumber  | Date     | CCard            | ExpDate | CVV | message                                 |   
      | Juan  | Pedro   | Juano5       | juan@gmail.com  | 12345678  | 12345678  | 8110897412   | 04/05/22 | 0123456789123456 | 10/22   | 132 | Juano5 was succesfully registered.      |

  Scenario Outline: register without any information

    Given I am on the register page
    When I click to register button
    Then I should not be registered


  Scenario Outline: register with a duplicate user

    Given I am on the register page
    When I enter my information <Fname> <Lname> <username> <Email> <Password> <RPassword> <PhoneNumber> <Date> <CCard> <ExpDate> <CVV>
    Then I should see a required alert <message>

    Examples:
      | Fname | Lname   | username    | Email           | Password  | RPassword | PhoneNumber  | Date     | CCard            | ExpDate | CVV | message                |
      | Juan  | Pedro   | Juan2       | juan@gmail.com  | 12345678  | 12345678  | 8110897412   | 04/05/22 | 0123456789123456 | 10/22   | 132 | Juan2 is already taken |



  Scenario Outline: register with different passwords

    Given I am on the register page
    When I enter my information <Fname> <Lname> <username> <Email> <Password> <RPassword> <PhoneNumber> <Date> <CCard> <ExpDate> <CVV>
    Then I should see a required alert <message>

    Examples:
      | Fname | Lname   | username    | Email           | Password  | RPassword | PhoneNumber  | Date     | CCard            | ExpDate | CVV | message                 |
      | Juan  | Pedro   | Joel2       | juan@gmail.com  | 12345678  | 87654321  | 8110897412   | 04/05/22 | 0123456789123456 | 10/22   | 132 | Passwords do not match. |