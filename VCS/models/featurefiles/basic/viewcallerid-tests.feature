repo-1
@file-1
Scenario: View Caller Information
Given I have a Caller
And I view the Caller Information
When I click the Answer button
Then the Caller matches the Caller Information

Scenario: Able to Block Caller
Given I have a Caller
And the Caller is marked as Blocked
When I view the Caller Information
Then the Block title appears
And the ringtone is silent

Scenario: Able to Edit Caller Information
Given I have a Caller
And information is missing
When I click Edit Caller Information
Then the Edit Caller Information form displays
