import { test } from "@playwright/test";


test("Handling dropdowns", async({page}) =>{

    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo")
 
    // 1. Single select
    await page.selectOption("#select-demo",{
        // label: "Wednesday"
        // value: "Friday"
        index: 2
    })

    // 2. Multi select

    const multiSelect = page.locator("#multi-select")
    await multiSelect.scrollIntoViewIfNeeded()

    await page.selectOption("#multi-select",[
    {
      label: "Texas"   
    },
    {
        index: 2
    },
    {
        value: "Washington"
    }
])

})

test("Bootstrap dropdown", async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/jquery-dropdown-search-demo")
    await selectCountry("India")
    await selectCountry("Denmark")

    
    async function selectCountry(countryName){
        await page.click("#country+span")
        await page.locator("ul#select2-country-results")
            .locator("li",{
                hasText: countryName
            }).click()
        
    }

})