import {test, expect} from '@playwright/test'

test('login Test',async({page}) => {
    await page.goto('https://demo.applitools.com/')
    // await page.pause()
    await page.locator('//*[@id="username"]').click()
    await page.locator('//*[@id="username"]').fill('test')
    await page.locator('//*[@id="password"]').click()
    await page.locator('//*[@id="password"]').fill('test')
    await page.locator('//*[@id="log-in"]').click()
    
})

test.only('login Test2',async({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/')
    await page.getByPlaceholder('Username').click();
    await page.getByPlaceholder('Username').fill('Admin');
    await page.getByPlaceholder('Password').click();
    await page.getByPlaceholder('Password').fill('admin123');
    await page.getByRole('button', { name: 'Login' }).click();
    await page.getByRole('banner').getByText('John Haralambie').click();
    await page.getByRole('menuitem', { name: 'Logout' }).click();
    await page.pause()
    }

)
