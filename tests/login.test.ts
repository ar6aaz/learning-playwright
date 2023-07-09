import { chromium, test } from "@playwright/test";


test("Login test",async () =>{
    const browser = await chromium.launch();
    const context = await browser.newContext()
    const page = await context.newPage()

    await page.goto("https://ecommerce-playground.lambdatest.io/")
    await page.hover("//a[@data-toggle]//span[contains(text(),'My account')]")
    await page.click("text=Login")
    // await page.click("'Login')
    
    await page.fill("//input[@id='input-email']","koushik350@gmail.com")
    await page.fill("//input[@id='input-password']","Pass123$")
    await page.click("//input[@value='Login']")
    await page.waitForTimeout(5000)

    // new page from same context share cookies
    const page2 = await context.newPage()
    await page2.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/account")

    // new context has fresh cookies, not shared
    const context2 = await browser.newContext()
    const page3 = await context2.newPage()
    await page3.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/account")
    

})
