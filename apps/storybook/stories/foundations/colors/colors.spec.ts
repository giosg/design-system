import { test, expect } from "@playwright/test";

test("Themes", async ({ page }) => {
  await page.goto("iframe.html?args=&id=foundations-colors--themes&viewMode=story");
  const lightThemeContainer = page.getByTestId("light-theme");
  const darkThemeContainer = page.getByTestId("dark-theme");
  await expect(lightThemeContainer).toHaveScreenshot("light-theme.png");
  await expect(darkThemeContainer).toHaveScreenshot("dark-theme.png");
});
