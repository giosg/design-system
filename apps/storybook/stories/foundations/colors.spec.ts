import { test, expect, defineConfig } from "@playwright/test";

export default defineConfig({
	expect: {
		toHaveScreenshot: { threshold: 0.001 },
	},
});

test("Palette", async ({ page }) => {
	await page.goto("http://localhost:6006/iframe.html?args=&id=foundations-colors--palette&viewMode=story");
	const palette = page.getByTestId("palette");
	await expect(palette).toHaveScreenshot("palette.png");
});

test("Themes", async ({ page }) => {
	await page.goto("http://localhost:6006/iframe.html?args=&id=foundations-colors--themes&viewMode=story");
	const lightThemeContainer = page.getByTestId("light-theme");
	const darkThemeContainer = page.getByTestId("dark-theme");
	await expect(lightThemeContainer).toHaveScreenshot("light-theme.png");
	await expect(darkThemeContainer).toHaveScreenshot("dark-theme.png");
});
