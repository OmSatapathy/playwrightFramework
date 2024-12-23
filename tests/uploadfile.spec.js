// @ts-check
const { test, expect } = require('@playwright/test');


test('file upload behaviour',async({page})=>{
    await page.goto('https://demo.automationtesting.in/FileUpload.html')
    await page.locator("//input[@type='file']").setInputFiles('/Users/om.satapthy/Documents/playWrightDemo/resources/images.jpeg')
    await page.waitForTimeout(6000)
})

test('multiple file upload',async({page})=>{

    await page.goto('https://demo.automationtesting.in/FileUpload.html')
    await page.locator("//input[@type='file']").setInputFiles([
        '/Users/om.satapthy/Documents/playWrightDemo/resources/image (3).png',
        '/Users/om.satapthy/Documents/playWrightDemo/resources/images.jpeg',
        '/Users/om.satapthy/Documents/playWrightDemo/resources/image (4).png'])

        await page.waitForTimeout(6000)
})