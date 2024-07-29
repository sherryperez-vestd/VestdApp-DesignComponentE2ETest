import { test as baseTest } from "@playwright/test";
import loginPage from "../pages/login-page"
import baseAssertions from "../base/base-assertions"
import baseFunctions from "../base/base-functions"
import formNumberInput from "../pages/form-number-input"

const test = baseTest.extend<{
    assertions: baseAssertions;
    functions: baseFunctions;
    loginPage: loginPage;    
    formNumberInput: formNumberInput;
}>

    ({

        assertions: async ({ page }, use) => {
            await use(new baseAssertions(page));
        },

        functions: async ({ page }, use) => {
            await use(new baseFunctions(page));
        },

        loginPage: async ({ page }, use) => {
            await use(new loginPage(page));
        },

        formNumberInput: async ({ page }, use) => {
            await use(new formNumberInput(page));
        },

    })

export default test;
export const expect = test.expect;

