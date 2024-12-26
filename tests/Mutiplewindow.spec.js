
import{test,expect} from '@playwright/test'

test('multiple window handing',async({browser})=>{
 const context = await browser.newContext();

    // Open the main page
    const page = await context.newPage();
    await page.goto('https://www.browserstack.com/'); // Replace with the actual home page URL

    // Listen for new pages (tabs/windows)
    const pages = [];
    context.on('page', newPage => {
        pages.push(newPage); // Add the new page to the array
    });

    // Click each button to open a new tab/window
    await page.locator("//span[@class='icon-linkedin']").click(),
    await page.locator("//span[@class='icon-facebook']").click(),
    await  page.locator("//span[@class='icon-instagram']").click(),


    // Wait for all new tabs to open
    await page.waitForTimeout(3000); // Adjust based on the time needed to open the tabs

    // Traverse each new tab, print its title, and close it
    for (const newPage of pages) {
        await newPage.waitForLoadState(); // Ensure the page is fully loaded
        const title = await newPage.title();
        console.log(`Title of the tab: ${title}`);
        await newPage.close(); // Close the tab
    }

    // Close the browser
    await browser.close();
})