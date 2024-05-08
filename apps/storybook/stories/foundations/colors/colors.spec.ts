import { test, expect } from "@playwright/test";

test("Light Theme", async ({ page }) => {
  await page.goto("iframe.html?globals=&args=&id=foundations-colors--themes&viewMode=story");
  const lightThemeContainer = page.getByTestId("container");
  await expect(lightThemeContainer).toHaveScreenshot("palette.png");
});

test("Dark Theme", async ({ page }) => {
  await page.goto("iframe.html?globals=theme:dark&args=&id=foundations-colors--themes&viewMode=story");
  const darkThemeContainer = page.getByTestId("container");

  await expect(darkThemeContainer).toHaveScreenshot("palette.png");
});
