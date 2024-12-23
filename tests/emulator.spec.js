import{test,expect} from '@playwright/test'

test.use({
    viewport: { width: 1200, height: 750 },
  });

  test.use({
    geolocation: { longitude: 41.890221, latitude: 12.492348 },
    permissions: ['geolocation'],
  });

  test('check google map', async ({page})=>{
    await page.goto('https://www.google.com/maps')
    const title= await page.title()
    console.log(title)
    await page.waitForTimeout(5000)
  })