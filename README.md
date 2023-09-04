# automation-assignment

### Pre-requisites

Need to have:
* **node** installled
* **npm** installed
* for allure reports: **java** installed (link [here](https://www.oracle.com/java/technologies/downloads/)) and set JAVA_HOME environment variable

### Setup & Run

Test are configed to be run on one browser (chrome) and one resolution (details can be found in ``playwright.config.ts file). Actions to run:
* install npm dependencies: ``npm install``
* to run tests:
    * in headless mode (default): ``npm test``
    * in headed mode: ``npm run test:headed``
* to check test reports:
    * default playwright html report: ``npm run report-pw:open``
    * allure report: ``npm run report-allure:open``
* in order to lint project files in one format, use ``npm run lint`` (for checking) and ``npm run lint:fix`` (for fixing) commands.