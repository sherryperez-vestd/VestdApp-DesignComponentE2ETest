import { Browser, chromium, Page } from "@playwright/test";
import * as logindata from "../VestdApp-DesignComponentE2ETest/data/login-test-data.json";

async function globalSetup() {
    const browser: Browser = await chromium.launch({ headless: false, timeout: 10000 });
    const context = await browser.newContext();
    const page: Page = await context.newPage();   

    await page.goto('https://demo.app.vestd.com/login');
    await page.getByLabel('Email address').fill(logindata.vestdStaffEmail)
    await page.getByLabel('Password').fill(logindata.vestdStaffPassword)
    await page.getByRole('button', { name: 'Log in' }).click();    

    // Save the state of the webpage
    await page.context().storageState({ path: "./login-staff-auth.json" });
    await browser.close();
}

export default globalSetup;



