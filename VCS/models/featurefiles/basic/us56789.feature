repo-2
@file-3
Scenario: User is able to make Money by Clicking PunchMe button
Given I am logged into PunchMe
When I click the PunchMe button
And a Punch is completed
Then $100 is deposited into my Bank Account

Scenario: User is able to Block PunchMe
Given I am logged ito PunchMe
When I click the PunchMe button
And a Punch is completed
But the Punch is Blocked
Then $99 is subtracted from my Bank Account

Scenario: User is able to participate in Fight Club
Given I am logged into PunchMe
And I have Fight Club credentials
When talk about PunchMe
And I don't talk about Fight Club
Then I receive a Fight Club Acceptance Letter
