import { Page, Locator, expect } from '@playwright/test';

const pageRoute = '/partner/';

export default class PartnerPage {
	readonly page: Page;
    readonly title: Locator;

	constructor(page: Page) {
		this.page = page;
        this.title = page.locator('.entry-title').first();
	}

    assertMainTitleCorrect = async (title: string) => {
        await expect(this.title).toHaveText(title);
    }
    
}