// playwright.config.js
import { test, expect } from '@playwright/test';

test('Open Google in Incognito Mode', async ({ browser }) => {
    // Create a new incognito browser context
    const context = await browser.newContext();

    // Open a new page in the incognito context
    const page = await context.newPage();

    // Navigate to Google
    await page.goto('https://www.google.com');

    // Assert the page title to verify navigation
    await expect(page).toHaveTitle(/Google/);

    // Close the context (optional, as Playwright Test Runner cleans up)
    await context.close();
});
