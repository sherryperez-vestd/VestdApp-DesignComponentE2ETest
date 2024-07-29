import { Page, Locator } from "@playwright/test";
import BaseFunctions from "../base/base-functions"

export default class formNumberInput {

    private base: BaseFunctions

    readonly allowDecimalValueInput: Locator;
    readonly FormatTheNumberInput: Locator;
    
    constructor(page: Page) {
        this.allowDecimalValueInput = page.getByLabel('Test4', { exact: true })
        this.FormatTheNumberInput = page.getByLabel('Test2', { exact: true })
        
    }

    async navigateToDesignPage() {
        await this.base.goto("/design/forms-number")
    }

    // async tab_allowDecimalNumberInput() {
    //     await this.allowDecimalValueInput.press('Tab');
    // }
   

}