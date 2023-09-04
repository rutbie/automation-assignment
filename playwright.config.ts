import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
	testDir: './src/tests',
	fullyParallel: true,
	retries: 0,
	workers: 1,
	reporter: [
		['html', { open: 'never', outputFolder: 'test-reports' }], 
		["allure-playwright"]
	],
	use: {
		baseURL: process.env.URL,
		headless: true,
		browserName: 'chromium',
		viewport: {
			width: 1366,
			height: 768,
		},
		ignoreHTTPSErrors: true,
		acceptDownloads: true,
		screenshot: 'only-on-failure',
		trace: 'retain-on-failure',
	},
	timeout: 45000,
	expect: {
		timeout: 15000,
	},
});
