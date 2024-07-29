import type { PlaywrightTestConfig } from '@playwright/test';
import { devices } from '@playwright/test';
const config: PlaywrightTestConfig = {

  globalSetup: "./global-setup.ts",
  testMatch: ["tests/form-number-input.test.ts"],
 
  timeout: 1 * 50 * 1000,
  expect: {
    timeout: 2000
  },
  fullyParallel: !false,
  // forbidOnly: !!process.env.CI,
  // retries: process.env.CI ? 1 : 0,
  // retries: 2,
  workers: process.env.CI ? 1 : 1,
  // // reporter: 'html',

  reporter: [["html", {
    open: "on-failure"

  }]],
  use: {
    headless: false,
    baseURL: 'https://demo.app.vestd.com/',
    //trace: "retain-on-failure",
    //video: "retain-on-failure",
    //screenshot: "only-on-failure",    
    storageState: "./login-staff-auth.json",
  },

  projects: [
    {
      name: 'chromium',
      // dependencies: ["setup"],
      use: {
        ...devices['Desktop Chrome'],
        viewport: { width: 1280, height: 585 }
      },
    },

  ]
};

export default config;

