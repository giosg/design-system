import { test, expect } from "@playwright/test";

test("Headings-colors", async ({ page }) => {
  await page.goto("iframe.html?args=&globals=&id=typography-heading--colors&viewMode=story");
  const container = page.getByTestId("container");
  await expect(container).toHaveScreenshot("picture.png");
});

test("Headings-sizes", async ({ page }) => {
  await page.goto("iframe.html?args=&globals=&id=typography-heading--size&viewMode=story");
  const container = page.getByTestId("container");
  await expect(container).toHaveScreenshot("picture.png");
});

test("Labels-colors", async ({ page }) => {
  await page.goto("iframe.html?args=&globals=&id=typography-label--colors&viewMode=story");
  const container = page.getByTestId("container");
  await expect(container).toHaveScreenshot("picture.png");
});

test("Labels-sizes", async ({ page }) => {
  await page.goto("iframe.html?args=&globals=&id=typography-label--size&viewMode=story");
  const container = page.getByTestId("container");
  await expect(container).toHaveScreenshot("picture.png");
});

test("Labels-flex", async ({ page }) => {
  await page.goto("iframe.html?args=&globals=&id=typography-label--flex&viewMode=story");
  const container = page.getByTestId("container");
  await expect(container).toHaveScreenshot("picture.png");
});

test("Text-colors", async ({ page }) => {
  await page.goto("iframe.html?args=&globals=&id=typography-text--colors&viewMode=story");
  const container = page.getByTestId("container");
  await expect(container).toHaveScreenshot("picture.png");
});

test("Text-sizes", async ({ page }) => {
  await page.goto("iframe.html?args=&globals=&id=typography-text--size&viewMode=story");
  const container = page.getByTestId("container");
  await expect(container).toHaveScreenshot("picture.png");
});

test("label-auto-disable", async ({ page }) => {
  await page.goto("iframe.html?args=&id=typography-label--auto-disabled&viewMode=story");
  const container = page.getByTestId("container");
  await expect(container).toHaveScreenshot("picture.png");
});
