import { test, expect } from "@playwright/test";

test("icons-color", async ({ page }) => {
  await page.goto(
    "iframe.html?args=color:!hex(084461);width:0;height:0&globals=backgrounds.value:transparent&id=icons-list--list&viewMode=story",
  );
  const container = page.getByTestId("container");
  await expect(container).toHaveScreenshot("picture.png");
});

test("icons-size", async ({ page }) => {
  await page.goto(
    "iframe.html?args=showNames:!false;width:32;height:32&globals=backgrounds.value:transparent&id=icons-list--list&viewMode=story",
  );
  const container = page.getByTestId("container");
  await expect(container).toHaveScreenshot("picture.png");
});
