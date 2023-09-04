import { Page } from '@playwright/test';
import Menu from '../components/Menu';

const pageRoute = '/';

export default class HomePage {
	readonly page: Page;
	readonly menu: Menu;

	constructor(page: Page) {
		this.page = page;
		this.menu = new Menu(page);
	}

	navigate = async () => {
		await this.page.goto(pageRoute);
	}
}