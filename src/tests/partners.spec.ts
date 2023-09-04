import { test } from '@playwright/test';
import HomePage from '../pages/HomePage';
import PlatformIntegrationsPage, { DROPDOWN_TITLES } from '../pages/PlatformIntegrationsPage';
import PartnerPage from '../pages/PartnerPage';
import { setCookie } from '../utils/helpers';

test.beforeEach(async ( { context }) => {
	await context.addCookies([setCookie('OptanonAlertBoxClosed', Date.now().toString()) ] );
});

test('open partner page', async ({ page }) => {
	const homePage = new HomePage(page);
	await homePage.navigate();
	await homePage.menu.clickMenuItem('Solutions');
	await homePage.menu.clickSubmenuItem('Platform integrations');

	const platformIntegrationsPage = new PlatformIntegrationsPage(page);
	await platformIntegrationsPage.assertDropdownToBeVisible(DROPDOWN_TITLES.LOCATION);

	await platformIntegrationsPage.fillSearchField('Commerce');
	await platformIntegrationsPage.selectOptions(DROPDOWN_TITLES.PARTNER_TYPE, ['eCommerce platform']);
	await platformIntegrationsPage.selectOptions(DROPDOWN_TITLES.INDUSTRY, ['Digital goods']);
	await platformIntegrationsPage.selectOptions(DROPDOWN_TITLES.LOCATION, ['Canada', 'Great Britain']);
	await platformIntegrationsPage.assertAmountOfPartnersCard(4);
  
	await platformIntegrationsPage.clickPartnerCardByNumber(3);
	// Alternatively it could be clicked by title
	// await platformIntegrationsPage.clickPartnerCardByTitle('BigCommerce')

	const partnerPage = new PartnerPage(page);
	await partnerPage.assertMainTitleCorrect('BigCommerce');
});

