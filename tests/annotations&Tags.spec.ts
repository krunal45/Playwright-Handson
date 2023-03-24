import test from "@playwright/test";

test.skip('skip this tests',async () => {
    console.log('skip test')
})

test('not yet ready', async ({ page }) => {
    test.fail();
    // ...
  });

test('test to be fixed', async ({ page }) => {
    test.fixme();
    // ...
  }); 

test('skip test', async ({ page }) => {
    test.slow();
    await page.goto('https://opensource-demo.orangehrmlive.com/')
    await page.locator('input[name="username"]').fill('Admin')
    await page.locator('input[name="password"]').fill('admin123')
    await page.locator('button[type="submit"]').click()
    // ...
  });