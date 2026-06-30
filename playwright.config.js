// @ts-check

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
  testDir: './tests',
  timeout: 30 * 1000, // 30 seconds
  expect: {
    timeout: 5 * 1000, // 5 seconds
  },
  reporter: 'html',
 
  use: {
    browserName: 'chromium',
    // Headed locally, headless in CI.
    headless: false,
    //screenshot: 'on',
 trace: 'on-first-retry',
  screenshot: 'only-on-failure',
  video: 'retain-on-failure',
  }
};


module.exports = config;
