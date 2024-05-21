import { test, expect } from "@playwright/test";

test("switch", async ({ page }) => {
  await page.goto("iframe.html?args=hideNames:!true&id=switch-states--states&viewMode=story");

  const container = page.getByTestId("container");
  await expect(container).toHaveScreenshot("switch-states.png");
});

test("switch active states", async ({ page }) => {
  await page.goto("iframe.html?args=&id=switch-base--base&viewMode=story");

  const container = page.getByTestId("container");
  const component = page.getByTestId("component");

  await test.step("hover-focused-off", async () => {
    await component.hover();
    await component.focus();
    await expect(container).toHaveScreenshot("switch-off-hovered-focused.png");
  });

  await test.step("hover-focused-on", async () => {
    await component.click();
    await expect(container).toHaveScreenshot("switch-on-hovered-focused.png");
  });
});
