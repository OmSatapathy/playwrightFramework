const {test,expect}  = require('@playwright/test')

test.describe.configure({ mode: 'parallel' });

test('file upload without input tag', async({page})=>{
    await page.goto("https://easyupload.io/")
    const fileChooserPromise = page.waitForEvent('filechooser');
    await page.locator("//button[@class='dz-button']").click()
    const fileChooser = await fileChooserPromise;
    await fileChooser.setFiles('/Users/om.satapthy/Documents/playWrightDemo/resources/images.jpeg')
    await page.waitForTimeout(6000)
})


test('open orahe hrm', async({page})=>{
   await  page.goto('https://medium.com/')
   await page.waitForTimeout(6000)
})

test('open maven repo url', async({page})=>{
    await  page.goto('https://mvnrepository.com/')
    await page.waitForTimeout(6000)
 })
