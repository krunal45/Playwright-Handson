import {test, expect} from '@playwright/test'

test('webObject Find Test',async({page}) => {
    await page.goto('https://www.saucedemo.com/');
    
    // using Any property 
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('adam')
    await page.locator('[data-test="username"]').fill('standard_user')
    await page.locator('//*[@id="password"]').fill('secret_sauce')
    // await page.locator('//*[@id="login-button"]').click()

    // using CSS selector
    await page.locator('#user-name').click();
    await page.locator('#user-name').fill('test')

    
    // using xpath
    await page.locator('//*[@id="user-name"]').click();
    await page.locator('xpath=//*[@id="user-name"]').click();
    await page.locator('#user-name').fill('testXpath')

    await page.pause();
    // using text
    await page.locator('text=Login').click()
    await page.locator('input:has-text("Login")').click()
}
)