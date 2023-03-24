import test, { Page } from "@playwright/test";
import { LoginPage } from "./LoginPage";

// let page: Page

// test.beforeAll(async ({ browser }) => {
//     page = await browser.newPage();
//     page.pause()
//     await page.setViewportSize({
//         width: 1784,
//         height: 960,
//     })

// })

test('loginPageTest', async ({ page }) => {
    const loginPage = new LoginPage(page)
    await loginPage.openApplication('/')
    await loginPage.enterUsername('admin')
    await loginPage.enterPassword('admin123')
    await loginPage.clickLoginBTN()
})