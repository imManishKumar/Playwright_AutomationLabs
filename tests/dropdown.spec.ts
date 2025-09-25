import { expect, test} from "@playwright/test";

test.describe('Dropdown checks', () => {

    test.beforeEach( async ({page}) => {
        await page.goto('https://testing.qaautomationlabs.com/dropdown.php');
    });

    test('Single Select Option', async ({page}) => {
        await page.locator('#fruitDropdown').selectOption('Mango');
        const text = await page.locator('#result').textContent();
        expect.soft(text).toContain('Mango');
        console.log("text = "+text);
    });

    test('Multi Selction Option', async ({page}) => {
        await page.locator('#countryDropdown').selectOption('USA');
        await page.locator("//button[text()='First Selected']").click();
        await page.locator('#countryDropdown').selectOption('Australia');
        await page.locator("//button[text()='Last Selected']").click();
        const firstSelect = await page.locator('#outputFirst').textContent();
        expect.soft(firstSelect).toContain('India');
        const lastSelect = await page.locator('#outputLast').textContent();
        expect.soft(lastSelect).toContain('Australia');
        console.log("First Selected = "+firstSelect);
        console.log("Last Selected = "+lastSelect);
    });
});