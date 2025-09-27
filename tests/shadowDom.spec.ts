import {test,expect} from '@playwright/test';

test('Shadow DOM handling', async ({page}) => {
    await page.goto('https://testing.qaautomationlabs.com/shadow-dom.php');
    const outsideShadowDomMessage = await page.locator("//h3").textContent();
    console.log("outsideShadowDomMessage = "+outsideShadowDomMessage);
    expect(outsideShadowDomMessage).toContain('outside');

    //playwright automatically locates elements inside shadow DOM
    const insideShadowDomMessage = await page.locator("div.box").textContent();
    console.log("insideShadowDomMessage = "+insideShadowDomMessage);
    expect(insideShadowDomMessage).toContain('Hello from Shadow DOM!');
});