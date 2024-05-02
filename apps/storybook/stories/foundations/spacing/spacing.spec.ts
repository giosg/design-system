import { test, expect } from "@playwright/test";

test("Spacing", async ({ page }) => {
  await page.goto("iframe.html?args=&id=foundations-spacing--variants&viewMode=story");
  const spacing = page.getByTestId("spacing");
  await expect(spacing).toHaveScreenshot("spacing.png");
});
