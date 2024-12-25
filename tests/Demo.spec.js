const { chromium } = require('playwright');
import{test,expect} from '@playwright/test'

test('testing demo',(async () => {
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.goto('https://playwright.dev/docs/emulation#devices');
    await page.waitForTimeout(5000)
}))