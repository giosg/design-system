import { test, expect } from "@playwright/test";

test("icons-default", async ({ page }) => {
  await page.goto("iframe.html?args=&id=icons-list--list&viewMode=story");
  const container = page.getByTestId("container");
  await expect(container).toHaveScreenshot("picture.png");
});

test("icons-colors-width-size-modified", async ({ page }) => {
  await page.goto(
    "iframe.html?args=showNames:!false;mainColor:!hex(084461);altColor:!hex(b6ffbc);accentColor:!hex(ff0bee);width:36;height:36&id=icons-list--list&viewMode=story",
  );
  const container = page.getByTestId("container");
  await expect(container).toHaveScreenshot("picture.png");
});

test("icons-dark-theme", async ({ page }) => {
  await page.goto("iframe.html?globals=theme:dark&args=showNames:!false&id=icons-list--list&viewMode=story");
  const container = page.getByTestId("container");
  await expect(container).toHaveScreenshot("picture.png");
});

test("icons-theme-colors", async ({ page }) => {
  await page.goto("iframe.html?args=&id=icons-color--color&viewMode=story");
  const container = page.getByTestId("container");
  await expect(container).toHaveScreenshot("picture.png");
});
