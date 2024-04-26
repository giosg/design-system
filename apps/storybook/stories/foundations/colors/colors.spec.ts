import { test, expect } from "@playwright/test";

test("Emphasis", async ({ page }) => {
  await page.goto("iframe.html?args=&id=foundations-colors--emphasis&viewMode=story");
  const emphasis = page.getByTestId("emphasis");
  await expect(emphasis).toHaveScreenshot("emphasis.png");
});

test("Palette", async ({ page }) => {
  await page.goto("iframe.html?args=&id=foundations-colors--palette&viewMode=story");
  const palette = page.getByTestId("palette");
  await expect(palette).toHaveScreenshot("palette.png");
});

test("Themes", async ({ page }) => {
  await page.goto("iframe.html?args=&id=foundations-colors--themes&viewMode=story");
  const lightThemeContainer = page.getByTestId("light-theme");
  const darkThemeContainer = page.getByTestId("dark-theme");
  await expect(lightThemeContainer).toHaveScreenshot("light-theme.png");
  await expect(darkThemeContainer).toHaveScreenshot("dark-theme.png");
});
