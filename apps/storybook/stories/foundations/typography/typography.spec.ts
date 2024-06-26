import { test, expect } from "@playwright/test";

test("Headings", async ({ page }) => {
  await page.goto("iframe.html?args=&id=foundations-typography--headings&viewMode=story");
  const container = page.getByTestId("container");
  await expect(container).toHaveScreenshot("headings.png");
});

test("Body", async ({ page }) => {
  await page.goto("iframe.html?args=&id=foundations-typography--body&viewMode=story");
  const container = page.getByTestId("container");
  await expect(container).toHaveScreenshot("body.png");
});

test("Label", async ({ page }) => {
  await page.goto("iframe.html?args=&id=foundations-typography--label&viewMode=story");
  const container = page.getByTestId("container");
  await expect(container).toHaveScreenshot("label.png");
});
