import { test, expect } from "@playwright/test";
import { getSoftComparatorOptionsOnArmArchitecture } from "../../../utils/testUtils";

test("Box shadows", async ({ page, browserName }) => {
  const softComparatorOptions = browserName === "firefox" ? getSoftComparatorOptionsOnArmArchitecture() : undefined;
  await page.goto("iframe.html?args=&id=foundations-box-shadows--variants&viewMode=story");
  const palette = page.getByTestId("box-shadows");
  await expect(palette).toHaveScreenshot("box-shadows.png", softComparatorOptions);
});
