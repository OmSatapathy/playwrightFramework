import{test,expect} from '@playwright/test'
const { Loginpage } = require ('../pages/login.spec')

test('verify orangeHRM login',async({page})=>{
    const loginObj = new Loginpage(page)
    await loginObj.launch()
    await  loginObj.providingDetails('Admin','admin123')

    await page.waitForTimeout(4000)
})