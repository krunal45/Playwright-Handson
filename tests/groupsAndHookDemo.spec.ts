import test, { Page } from "@playwright/test";

let page: Page;

test.describe('smoke', () => {

  test.beforeAll(async ({ browser }) => {
    page = await browser.newPage();
    await page.setViewportSize({
      width: 1784,
      height: 960,
    });
    const testUrl = 'https://opensource-demo.orangehrmlive.com/'
    const userName = page.locator('input[name="username"]')
    const password = page.locator('input[name="password"]')
    const loginBTN = page.locator('button[type="submit"]')
    await page.goto(testUrl)
    await userName.fill('Admin')
    await password.fill('admin123')
    await loginBTN.click()
    await page.waitForURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
  }
  )

  test.afterAll(async () => {
    await page.getByRole('menuitem', { name: 'Logout' }).click();
    await page.close();
  }
  )

  test('click Admin test', async () => {
    await page.locator('//*[@id="app"]/div[1]/div[1]/aside/nav/div[2]/ul/li[1]/a/span').click()
    await page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[1]/div/div[2]/input').fill('Admin')
    await page.locator('//*[@id="app"]/div[1]/div[2]/div[2]/div/div[1]/div[2]/form/div[1]/div/div[2]/div/div[2]/div/div').click()
    await page.getByRole('option', { name: 'Admin' }).getByText('Admin').click();
    await page.getByPlaceholder('Type for hints...').click();
    await page.getByPlaceholder('Type for hints...').fill('aulia rizqi');
    await page.getByRole('option', { name: 'aulia ima rizqi' }).getByText('aulia ima rizqi').click();
    await page.getByText('-- Select --').click();
    await page.getByRole('option', { name: 'Enabled' }).getByText('Enabled').click();
    await page.getByRole('button', { name: 'Search' }).click();
    await page.getByRole('paragraph').filter({ hasText: 'aulia ima rizqi' }).click();
  })
})