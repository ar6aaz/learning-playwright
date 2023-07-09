import { expect, test } from "@playwright/test";

test("Basic Interactions", async({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/simple-form-demo")
    const msgInput = page.locator("input#user-message")
    await msgInput.scrollIntoViewIfNeeded()
    console.log(await msgInput.getAttribute("placeholder"))
    expect(msgInput).toHaveAttribute("placeholder","Please enter your Message")
    
    console.log("Before typing: "+await msgInput.inputValue())
    await msgInput.type("Hello world")
    console.log("After typing: "+await msgInput.inputValue())
    
    const btnSum = page.locator("//button[text()='Get Sum']")
    const num1 = page.locator("//input[@id='sum1']")
    const num2 = page.locator("//input[@id='sum2']")
    const sumField = page.locator("//p[@id='addmessage']")
    await btnSum.scrollIntoViewIfNeeded()

    await num1.type("23")
    await num2.type("23")
    await btnSum.click()

    console.log("sum text: "+ await sumField.textContent())
    expect(sumField).toHaveText("46")
})