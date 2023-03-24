exports.LoginPage = class LoginPage {

    constructor(page) {
        this.page = page
        this.userName = page.locator('input[name="username"]')
        this.password = page.locator('input[name="password"]')
        this.loginBTN = page.locator('button[type="submit"]')
    }
    async openApplication(url) {
        await this.page.goto(url)
    }

    async enterUsername(username) {
        await this.userName.fill(username)
    }

    async enterPassword(userpassword) {
        await this.password.fill(userpassword)
    }

    async clickLoginBTN() {
        await this.loginBTN.click()
    }
}