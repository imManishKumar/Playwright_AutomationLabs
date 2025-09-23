import { test, expect } from "@playwright/test";

test.describe('Checkboxes', () => {
    test.beforeEach(async ({page}) => {
        await page.goto('https://testing.qaautomationlabs.com/checkbox.php');
        })

    test('Single Checkbox', async ({ page }) => {
        await page.waitForSelector('#myCheckbox');
        await page.check('#myCheckbox');
        await expect(page.locator('div#message')).toBeVisible();
    });

    test('Disabled Checkbox', async ({ page }) => {
        const checkbox1 = page.locator('#chk1');
        const checkbox2 = page.locator('#chk2');
        const checkbox3 = page.locator('#chk3');
        const checkbox4 = page.locator('#chk4');
        await expect(checkbox1).toBeEnabled();
        await expect(checkbox2).toBeEnabled();
        await expect(checkbox3).toBeDisabled();
        await expect(checkbox4).toBeDisabled();
    });

    test('Multiple Checkbox', async ({ page }) => {
        const checkbox1 = page.locator('#multichk1');
        const checkbox2 = page.locator('#multichk2');
        const checkbox3 = page.locator('#multichk3');
        const checkbox4 = page.locator('#multichk4');
        await checkbox1.check();
        await checkbox3.check();
        await expect(checkbox1).toBeChecked();
        await expect(checkbox2).not.toBeChecked();
        await expect(checkbox3).toBeChecked();
        await expect(checkbox4).not.toBeChecked();
    });

    test('Negative case for Multiple Checkbox', async ({ page }) => {
        const checkbox1 = page.locator('#multichk1');
        const checkbox2 = page.locator('#multichk2');
        const checkbox3 = page.locator('#multichk3');
        const checkbox4 = page.locator('#multichk4');
        await checkbox1.check();
        await checkbox3.check();
        await expect(checkbox1).not.toBeChecked();
        await expect(checkbox2).toBeChecked();
        await expect(checkbox3).toBeChecked();
        await expect(checkbox4).not.toBeChecked();
    });

});