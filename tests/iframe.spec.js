// @ts-check
const { test, expect } = require('@playwright/test');

test('handing iframes',async({page})=>{

    await page.goto("https://demo.automationtesting.in/Frames.html")
    const framearea =  await page.frame('singleframe')?.textContent
    console.log(framearea)
    await page.waitForTimeout(5000)
})