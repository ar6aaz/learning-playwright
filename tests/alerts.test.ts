import { expect, test } from "@playwright/test";

test("Handling alerts", async({page}) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo")
    
    // 2. Alert that has text and 2 options - accept & dismiss
    // page.on("dialog", async (alert)=>{
    //     const alertText = alert.message()
    //     console.log("text is: "+alertText)
    //     alert.dismiss()
    // })

    // await page.locator("button:has-text('Click Me')").nth(1).click()
    // expect(page.locator("id=confirm-demo")).toContainText("Cancel")

    // 3. Alert that has option to type text into it and accept/dismiss
    page.on("dialog", async (alert)=>{
        const alertText = alert.defaultValue()
        console.log("text is: "+alertText)
        alert.accept("Hello")
    })  

    await page.locator("button:has-text('Click Me')").nth(2).click()
    expect(page.locator("id=prompt-demo")).toContainText("Hello")
})