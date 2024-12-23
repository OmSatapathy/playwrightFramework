import{test,expect} from "@playwright/test"
import fs from 'fs'

 const testdatapath= 'testdata/saucedemoCred.json'
 const testdata = JSON.parse(fs.readFileSync(testdatapath,'utf8'))

 for(const users of testdata){
    test(`multiple user cred ${users.usernames}`,async({page})=>{
        await page.goto('https://www.saucedemo.com/v1/index.html')
         await page.locator("//input[@id='user-name']").fill(users.usernames)
         await page.locator("//input[@id='password']").fill(users.password)
         await page.locator("//input[@id='login-button']").click()
         await page.waitForTimeout(5000)
    })
 }