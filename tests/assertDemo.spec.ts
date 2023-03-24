import {test, expect, firefox} from '@playwright/test'

test('isElementPresentTest',async({page}) => {
    await page.pause()
    await page.goto('https://kitchen.applitools.com/')
    const alertButton=page.locator('#__next > div > div > section > div > div > a:nth-child(1) > h3')
    const visible=await alertButton.isVisible()

    if(visible){
        alertButton.click()
        expect(page.url().match('https://kitchen.applitools.com/ingredients/alert'))
    }
})

test('isElementVisibleOrHidden',async({page}) => {
    await page.goto('https://opensource-demo.orangehrmlive.com/')
    // await page.locator('input[name="username"]').click()
    await page.locator('input[name="username"]').fill('Admin')
    // await page.locator('input[name="password"]').click()
    await page.locator('input[name="password"]').fill('admin123')
    await page.locator('button[type="submit"]').click()
    // const isUsernameClickable=await userName.isEnabled()
    // const ispwdClickable = await pwd.isEnabled()
    // const isloginBTNClickable = await loginBTN.isEnabled()
})

test('isElementEnabledOrDisabled',async({page}) => {
    await page.goto('https://kitchen.applitools.com/')
    await expect(page.locator('text=Alert')).toBeEnabled()
    await expect(page.locator('text=Kitchen')).toBeDisabled()
}
)

test('checkElementText',async({page}) => {
    await page.goto('https://kitchen.applitools.com/')
    await expect.soft(page.locator('text=Kitchen')).toContainText('The Kitchenss')
    await expect(page.locator('text=Kitchen')).not.toContainText('The Kitcddhen')
}
)

test.only('checkAttributeValue',async({}) => {
    const browser=await firefox.launch(
        {
            headless:false,
            slowMo:1000
        }
    )
    const context=await browser.newContext(
        {
            recordVideo: {
                  dir:'videos/',
                  size:{width:800,height:600}
            }
        })
    const page=await context.newPage()
    await page.goto('https://kitchen.applitools.com/')
    await expect(page.locator('//*[@id="__next"]/div/div/section/div/div/a[1]/h3')).toHaveAttribute('class','chakra-heading css-zey6tx')
    await expect(page.locator('//*[@id="__next"]/div/div/section/div/div/a[1]/h3')).toHaveClass('chakra-heading css-zey6tx')
    await page.locator('//*[@id="__next"]/div/div/section/div/div/a[1]/h3').click()
    await expect(page).toHaveURL('https://kitchen.applitools.com/ingredients/alert')
    await expect(page).toHaveTitle('Alert | The Kitchen')
    await expect(page).toHaveScreenshot()
})