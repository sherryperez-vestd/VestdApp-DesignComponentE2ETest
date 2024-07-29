import { Page } from "@playwright/test";

export default class BaseFunctions {

    constructor(private page: Page) { }

    async waitAndClick(Locator: string) {
        const element = this.page.locator(Locator);
        await element.waitFor({
            state: "visible"
        });
        await element.click();
    }

    async navigateT0(link: string) {
        await Promise.all([          
            this.page.click(link)
        ])
    }

    async goto(baseURL) {
        await Promise.all([
            this.page.goto(baseURL)
        ])
    }







}



