import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  // testMatch: ["tests/basicIntercations.test.ts"],
  use: {
    headless: true,
    screenshot: "on",
    video:"retain-on-failure",
    launchOptions: {
      slowMo: 1000
    }
  },
  retries: 2,
  reporter: [["dot"],["json",{
    "outputFile":"jsonReports/jsonReport.json"
  }],["html", {
    open: "never"
  }]]
}

export default config;