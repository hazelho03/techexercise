import { test, expect } from "@playwright/test";

test("user can open the fitness challenge application", async ({ page }) => {
  await page.goto("/");

  await expect(
    page.getByText(/fitness challenge/i).first()
  ).toBeVisible();
});

test("application displays challenge content", async ({ page }) => {
  await page.goto("/");

  await expect(page.locator("body")).toContainText(/challenge/i);
});