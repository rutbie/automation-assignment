import { Locator, Page } from '@playwright/test';

export default class Menu {
	readonly component: Page;
	readonly menuItems: Locator ;
	readonly submenuItems: Locator;

	constructor(component: Page) {
		this.component = component;
		this.menuItems = component.locator('.nav-link');
		this.submenuItems = component.locator('[id^="menu-item-"]');
	}

	clickMenuItem = async (title: string) => {
		await this.menuItems.locator(`text=${title}`).first().click();
	}

	clickSubmenuItem = async (title: string) => {
		await this.submenuItems.locator(`text=${title}`).first().click();
	}
}