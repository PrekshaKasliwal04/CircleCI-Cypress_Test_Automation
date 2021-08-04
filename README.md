## Test.cypress-assignment

#QA Cypress Testing Assignment done by - Preksha Kasliwal

##Introduction:

This project covers cypress cucumber based testing framework to execute online tests following hybrid design pattern. 

##Approach: 

1. I have used combination of cypress with cucumber to make it readable, meaningful for all stakeholders. 
2. In place of describe and it blocks I used Given When Then format to have clear understanding of steps and user flow.
3. I introduced page structure to make framework more reliable and maintainable.
4. I placed step definitions in Support and Feature files in Integration.
6. Added pages folder to keep more used functions according to pages.
7. Covered tests in two feature files.

Alot said lets move ahead

##Installations: 

1. npm install
2. npm install cypress-cucumber-preprocessor
3. npm install cosmiconfig 
4. npm install cucumber-html-reporter
5. npm install circleci-cli
if required we may need to use below commands for force installtion

npm fund, npm audit fix --force

Now that we are done with our installation let's learn how to run the code:

##Steps to Run from IDE:

1. Clone the repo and open in IDE
2. goto terminal and run : npm run cypress:open
3. From cypress UI run integration tests.
4. After the execution see if any failure.

##Circle CI Implementation:
 1. To execute test from CI/CD piepine - https://app.circleci.com/pipelines/github/PrekshaKasliwal04?filter=mine
 Right now if builds whenever there is any commit on main branch.
 
##Future Upgrades
 1. For next step I can work on managing waits more precisely.
 2. Change xpath locator handling.
 3. HTML Report creation and email to stakeholdrs.
 4. Process to use npx cypress run --record --key 9f53fc23-43f8-4502-b307-7cbda932c63e

