import { Locator, Page , expect } from "@playwright/test";


export default class BaseAssertions {

    constructor(private page: Page) { }

    async verifyURLContains(strtitle: string) {
        const pageURL = this.page.url()
        await expect(pageURL).toContain(strtitle)
        
    }

    
    async verifyElementisVisible(var_locator : Locator) {
        const pageElementLocator = var_locator      
        await expect(pageElementLocator).toBeVisible();
    }

    async verifyElementisNotVisible(var_locator2 : Locator) {
        const pageElementLocator2 = var_locator2   
        await expect(pageElementLocator2).not.toBeVisible();
    }

    async verifyElementToHaveValue(var_locator3 : Locator, strText : string) {
        const pageElementLocator3 = var_locator3   
        await expect(pageElementLocator3).toHaveValue(strText)
    }
  
}

