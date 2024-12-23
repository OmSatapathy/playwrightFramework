import{test,expect} from '@playwright/test'


test.beforeEach('pre condition',async ({page})=>{
 await page.goto('https://www.saucedemo.com/v1/index.html')
})

test.describe('Login feature',()=>{
    test('login with valid credentials', async({page})=>{
         await page.locator("//input[@id='user-name']").fill('standard_user')
         await page.locator("//input[@id='password']").fill('secret_sauce')
         await page.locator("//input[@id='login-button']").click()
         const prodcutnames= await page.locator("//div[@class='product_label']").textContent()
       await expect(prodcutnames).toContain('Products')
    })

    test('login with glitch_user credentials', async({page})=>{
        await page.locator("//input[@id='user-name']").fill('performance_glitch_user')
        await page.locator("//input[@id='password']").fill('secret_sauce')
        await page.locator("//input[@id='login-button']").click()
        const prodcutnames= await page.locator("//div[@class='product_label']").textContent()
      await expect(prodcutnames).toContain('Products')
   })

   test('login with locked credentials', async({page})=>{
    await page.locator("//input[@id='user-name']").fill('locked_out_user')
    await page.locator("//input[@id='password']").fill('secret_sauce')
    await page.locator("//input[@id='login-button']").click()
    const prodcutnames= await page.locator("//*[@class='error-button']").innerText()
    await expect(prodcutnames).toContain('Sorry, this user has been locked out')
})

})