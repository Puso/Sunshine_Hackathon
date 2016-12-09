repo-2
@file-6
Scenario: User is able to log what Time they Arrived
Given I have accessed Users Timecard
When I tap the Arrival button
Then Users Timecard is timestamped with Current Time
And Card is moved to Users Folder

Scenario: User is able to Monkey with Timecard
Given I have accessed Users Timecard
When I monkey around with Arrival button
Then Users Timecard is timestamped with Proper Time
And Card is moved to Users Folder

Scenario: User is able to be Fired after Monkey Timecard
Given I have accessed Users Timecard
And I am logged in as a Boss User
When I View Monkey Timecard
And I find Monkey timestamp
Then I click Fire button
And User no longer has job
