import { expect, test } from '@playwright/test';

test.describe('Iframe handling', () => { 
    test.beforeEach(async ({page}) => {
        page.goto('https://testing.qaautomationlabs.com/iframe.php');
    });
    
    test('Handling iframe 1', async ({page}) => {
        const frame1 = page.locator("//iframe[@name='iframe1']");
        await frame1.contentFrame().locator("//button[@type='submit']").click();
        const message = await page.locator('#message').textContent();
        console.log("Message = "+message);
        expect.soft(message).toContain('iframe 1'); 
    });

    test('Handling iframe 2', async ({page}) => {
        const frame1 = page.locator("//iframe[@name='iframe2']");
        await frame1.contentFrame().locator("//button[@type='submit']").click();
        const message = await page.locator('#message').textContent();
        console.log("Message = "+message);
        expect.soft(message).toContain('iframe 2'); 
    });

    test('-ve Handling iframe 1', async ({page}) => {
        const frame1 = page.locator("//iframe[@name='iframe2']");
        await frame1.contentFrame().locator("//button[@type='submit']").click();
        const message = await page.locator('#message').textContent();
        console.log("Message = "+message);
        expect.soft(message).toContain('iframe 1'); 
    });

    test('-ve Handling iframe 2', async ({page}) => {
        const frame1 = page.locator("//iframe[@name='iframe1']");
        await frame1.contentFrame().locator("//button[@type='submit']").click();
        const message = await page.locator('#message').textContent();
        console.log("Message = "+message);
        expect.soft(message).toContain('iframe 2'); 
    });
});