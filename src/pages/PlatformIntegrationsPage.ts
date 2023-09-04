import { Page, Locator, expect } from '@playwright/test';

export const DROPDOWN_TITLES = {
	PARTNER_TYPE: 'Partner Type',
	INDUSTRY: 'Industry',
	LOCATION: 'Location'
};

export default class PlatformIntegrationsPage {
	readonly page: Page;
	readonly searchInput: Locator;
	readonly partnerListCards: Locator;

	constructor(page: Page) {
		this.page = page;
		this.searchInput = page.locator('.search-input').first();
		this.partnerListCards = page.locator('#partner-list .card');
	}

	getDropdown = async (title: string) => {
		return await this.page.locator(`.selectpicker[title="${title}"]`).first();
	}

	fillSearchField = async (value: string) => {
		await this.searchInput.fill(value);
	}

	selectOptions = async (dropdownTitle: string, options: string []) => {
		const selectedOptions = [];
		for (const option of options) {
			selectedOptions.push(option);
		}
		await (await this.getDropdown(dropdownTitle)).selectOption(selectedOptions);
	}

	clickPartnerCardByNumber = async (number: number) => {
		await this.partnerListCards.locator(`nth=${number-1}`).click();
	}

	clickPartnerCardByTitle = async (title: string) => {
		await this.partnerListCards.locator(`text=${title}`).click();
	}

	assertDropdownToBeVisible = async (title: string) => {
		await expect(await this.getDropdown(title)).toBeVisible();
	}

	assertAmountOfPartnersCard = async (amount: number) => {
		await expect(await this.partnerListCards.count()).toBe(amount);
	}
    
}