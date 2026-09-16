import { test, expect } from '@playwright/test';

test('Amazon search functionality', async ({ page }) => {

    await page.setViewportSize({
        width: 1920,
        height: 1080
    });

    await page.goto('https://www.amazon.com');

    await expect(page).toHaveURL('https://www.amazon.com/');

    await page.fill('#twotabsearchtextbox', 'laptop');

    await page.click('#nav-search-submit-button');

    const resultsLocator = page.locator('div.s-main-slot.s-result-list');

    await expect(resultsLocator).toBeVisible();
});