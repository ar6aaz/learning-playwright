import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  // testMatch: ["tests/basicIntercations.test.ts"],
  use: {
    headless: true,
    screenshot: "only-on-failure",
    video:"retain-on-failure"
  },
  retries: 2,
  reporter: [["dot"],["json",{
    "outputFile":"jsonReports/jsonReport.json"
  }],["html", {
    open: "never"
  }]]
}

export default config;