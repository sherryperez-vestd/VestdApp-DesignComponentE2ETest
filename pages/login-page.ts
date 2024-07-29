import { Page, Locator } from "@playwright/test"
import BaseFunctions from "../base/base-functions"

export default class loginPage {
    private base: BaseFunctions

    readonly emailInput: Locator;
    readonly passwordInput: Locator;
    readonly loginBtn: Locator;
    
 
    constructor(private page: Page) {    
        this.base = new BaseFunctions(page)           
    
        this.emailInput = page.getByText('Email address')        
        this.passwordInput = page.getByText('Password', { exact: true })    
        this.loginBtn = page.getByRole('button', { name: 'Log in' })  
    }

    private Elements = {
        emailInput: "email",
        passwordInput: "password",
        loginBtn: "//button[@class='btn btn-primary']",
        errorMessage: "The email address or password entered is incorrect. Please try again or reset yo"
    }

    async navigateToLoginPage() {
        await this.base.goto("/login")
    }

      async enterEmailAddress(email: string) {
        await this.page.getByLabel(this.Elements.emailInput).fill(email)
    }

    async enterPassword(password: string) {
        await this.page.getByLabel(this.Elements.passwordInput).fill(password)
    }

    async clickLoginButton() {
        await this.base.waitAndClick(this.Elements.loginBtn)
    }

    getErrorMessage() {
        return this.page.getByText(this.Elements.errorMessage)
      }

    async loginUser(email: string, password: string) {
        await this.enterEmailAddress(email)
        await this.enterPassword(password)
        await this.clickLoginButton()
    }

  
}



