import { test, expect } from "@playwright/test";
import { threshold } from "./isMobileViewWidth";

test("returns true if screen width is equal to threshold", async ({ page }) => {
  await page.goto("/");
  await page.setViewportSize({ width: threshold, height: 1000 });

  await expect(
    page.getByText("Morrowind Character Creation Tool"),
  ).toBeVisible();
  await expect(page.getByText("mobile")).toBeVisible();
});

test("returns false if screen width is greater than threshold", async ({
  page,
}) => {
  await page.goto("/");
  await page.setViewportSize({ width: threshold + 1, height: 1000 });

  await expect(
    page.getByText("Morrowind Character Creation Tool"),
  ).toBeVisible();
  await expect(page.getByText("mobile")).toBeVisible();
});

test("returns false if screen width is less than threshold", async ({
  page,
}) => {
  await page.goto("/");
  await page.setViewportSize({ width: threshold - 1, height: 1000 });

  await expect(
    page.getByText("Morrowind Character Creation Tool"),
  ).toBeVisible();
  await expect(page.getByText("desktop")).toBeVisible();
});
