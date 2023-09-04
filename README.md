# automation-assignment

### Pre-requisites

Need to have:
* **node** installled
* **npm** installed
* for allure reports: **java** installed (link [here](https://www.oracle.com/java/technologies/downloads/)) and set JAVA_HOME environment variable

### Setup

* install npm dependencies: ``npm install``
* to run tests:
    * in headless mode (default): ``npm test``
    * in headed mode: ``npm run test:headed``
* to check test reports:
    * default html report: ``npm run report-pw:open``
    * allure report: ``npm run report-allure:open``