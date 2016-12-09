@repo-6
@file-2
Scenario: Assign competitors
Given there is more than one player
When I click choose competitors
Then a list of competitors is displayed

Scenario: Add new members
Given I am an administrator
When I add a new members
Then a new profile is created



Scenario: Create league name
Given I am an administrator
When I create a new league
And I add a name
Then the name is saved

