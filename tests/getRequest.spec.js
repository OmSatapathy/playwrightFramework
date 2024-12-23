const { test, expect,request } = require('@playwright/test');

test('geting all list of iteams',async({request})=>{
   const responses = await request.get("https://api.restful-api.dev/objects")
   expect (responses.status()).toBe(200)

   console.log( await responses.json())

})


test('geting list of iteams by Id',async({request})=>{
    const responses = await request.get("https://api.restful-api.dev/objects?id=3&id=5&id=10")
    expect (responses.status()).toBe(200)
 
    console.log( await responses.json())
 
 })