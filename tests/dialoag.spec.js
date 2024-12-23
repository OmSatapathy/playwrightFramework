// @ts-check
const { test, expect } = require('@playwright/test');

test.skip('check dialogbox presence', async({page})=>{
  await  page.goto("https://demo.automationtesting.in/Alerts.html")

  await page.on("dialog",async(a)=>{
    console.log(await a.message())
    a.accept()
  })
  await page.locator("//button[@class='btn btn-danger']").click()
  await page.waitForTimeout(6000)
})



test.skip('confirmation popop handle',async ({page})=>{

    await  page.goto("https://demo.automationtesting.in/Alerts.html")
    await page.on("dialog",async(b)=>{
      console.log(b.message())   
         b.dismiss()
    })

  await page.locator("(//a[@class='analystic'])[2]").click()
    await page.waitForTimeout(6000)
})


test('prompt popop handle',async ({page})=>{

    await  page.goto("https://demo.automationtesting.in/Alerts.html")
    await page.locator("(//a[@class='analystic'])[3]").click()
    await page.on("dialog",async(b)=>{
      console.log(b.message())   
         b.accept("i am prompting!")
    })

  await page.locator("//*[@class='btn btn-info']").click()
    await page.waitForTimeout(6000)
})