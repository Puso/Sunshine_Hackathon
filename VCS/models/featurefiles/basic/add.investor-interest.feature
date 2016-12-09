@repo-2
@file-1
Scenario: Adding a new interest
Given I am an account manager
When I select an investor
And I add a new interest
Then the interest is saved

Scenario: Add a duplicate interest
Given I am an account manager
When I select an investor
And I add an existing interest
Then I see an error
And the interest is not saved

Scenario: Add interest to an investor I don't manager
Given I am an account manager
When I select an investor I don't manager
Then I see their interests
And there is no add interest button
And there is no edit interest button