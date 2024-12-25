import { test, expect } from "@playwright/test";

test("e2e", async ({ page }) => {
    await page.goto("http://localhost:5173/");
    await expect(page).toHaveTitle(/handbob.github.io/);
});
