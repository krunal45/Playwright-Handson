// const {test, expect} = require('@playwright/test')
import {test, expect} from '@playwright/test'

test('title Check Test',async({page}) => {
    await page.goto('https://www.google.com')
    await expect(page).toHaveTitle('Google')
})

test('Search car test',async({page}) => {
 await page.goto('https://google.com')
 await page.click('//*[@id="input"]')
})