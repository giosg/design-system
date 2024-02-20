import { test, expect } from "@playwright/test";

test("Box shadows", async ({ page }) => {
	await page.goto("iframe.html?args=&id=foundations-box-shadows--variants&viewMode=story");
	const palette = page.getByTestId("box-shadows");
	await expect(palette).toHaveScreenshot("box-shadows.png");
});
