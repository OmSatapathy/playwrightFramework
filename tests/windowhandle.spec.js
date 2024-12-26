import{test,expect} from '@playwright/test'

test('window handing',async({browser})=>{

     const context = await browser.newContext();
     const page= await context.newPage();
     page.goto('https://www.browserstack.com/')

     

    const [newPage]= await Promise.all([
                            context.waitForEvent("page"),
                            page.locator("//span[@class='icon-linkedin']").click(),
                        
                        ])
                       

        const title=  await  newPage.title()
        console.log(title)
})