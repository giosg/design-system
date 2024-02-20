import { test, expect } from "@playwright/test";

test("Border radius", async ({ page }) => {
	await page.goto("iframe.html?args=&id=foundations-border-radius--variants&viewMode=story");
	const palette = page.getByTestId("border-radius");
	await expect(palette).toHaveScreenshot("border-radius.png");
});
