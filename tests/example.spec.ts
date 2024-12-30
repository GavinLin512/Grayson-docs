import { test } from "@playwright/test";
import { argosScreenshot } from "@argos-ci/playwright";

const pages = [
    { name: "homepage", path: "/" },
    { name: "pricing", path: "/docs/vue/lifecycle_hooks" },
];

for (const { name, path } of pages) {
    test(`Run Argos screenshot on ${name} (${path})`, async ({ page }) => {
        await page.goto(`http://localhost:3000${path}`);
        await argosScreenshot(page, path);
    });
}