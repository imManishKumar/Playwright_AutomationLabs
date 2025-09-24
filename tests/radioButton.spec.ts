import {test,expect} from '@playwright/test';

test.describe('Radio Buttons', () => {

    test.beforeEach( async ({page}) => {
        await page.goto('https://testing.qaautomationlabs.com/radio-button.php');
    });

    test('Radio Button Section Male', async ({page}) => {
        await page.getByRole('radio', { name: 'Male' }).first().check();
        await page.getByRole('button', { name: 'Show Selected Gender' }).click();
        await expect(page.getByText('You selected: Male')).toBeVisible();
    });

    test('Radio Button Section Female', async ({page}) => {
        await page.getByRole('radio', { name: 'Female' }).first().check();
        await page.getByRole('button', { name: 'Show Selected Gender' }).click();
        await expect(page.getByText('You selected: Female')).toBeVisible();
    });

     test('Radio Button without selecting gender', async ({page}) => {
        await page.getByRole('button', { name: 'Show Selected Gender' }).click();
        await expect(page.getByText('Please select a gender.')).toBeVisible();
    });
    
    test('-ve case Radio Button Section Male', async ({page}) => {
        await page.getByRole('radio', { name: 'Male' }).first().check();
        await page.getByRole('button', { name: 'Show Selected Gender' }).click();
        await expect.soft(page.getByText('You selected: Female')).toBeVisible();
    });
    
    test('-ve Radio Button Section Female', async ({page}) => {
        await page.getByRole('radio', { name: 'Female' }).first().check();
        await page.getByRole('button', { name: 'Show Selected Gender' }).click();
        await expect.soft(page.getByText('You selected: Male')).toBeVisible();
    });

    test('Enabled/Disabled Radio Buttons', async ({page}) => {
        const radioBtn1 = page.getByRole('radio', { name: 'Radio Button 1' });
        const radioBtn2 = page.getByRole('radio', { name: 'Radio Button 2' });
        const radioBtn3 = page.getByRole('radio', { name: 'Disabled Radio Button' });

        await expect(radioBtn1).toBeEnabled();
        await expect(radioBtn2).toBeEnabled();
        await expect(radioBtn3).toBeDisabled();
    });

    test('Multi radio button Gender & Age validation(Male < 18 years)', async ({page}) => {
        await page.getByRole('radio', { name: 'Male' }).nth(2).check();
        await page.getByRole('radio', { name: 'Under' }).check();
        await page.getByRole('button', { name: 'Show Selected Values' }).click();
        await expect(page.locator('#result3')).toHaveText('You selected: Gender = Male, Age Group =Under 18')
    });

    test('Multi radio button Gender & Age validation(Male 18-35 years)', async ({page}) => {
        await page.getByRole('radio', { name: 'Male' }).nth(2).check();
        await page.getByRole('radio', { name: '-35' }).check();
        await page.getByRole('button', { name: 'Show Selected Values' }).click();
        await expect(page.locator('#result3')).toHaveText('You selected: Gender = Male, Age Group =18-35')
    });

    test('Multi radio button Gender & Age validation(Male > 35 years)', async ({page}) => {
        await page.getByRole('radio', { name: 'Male' }).nth(2).check();
        await page.getByRole('radio', { name: '+' }).check();
        await page.getByRole('button', { name: 'Show Selected Values' }).click();
        await expect(page.locator('#result3')).toHaveText('You selected: Gender = Male, Age Group =35+')
    });

    test('Multi radio button Gender & Age validation(Female < 18 years)', async ({page}) => {
        await page.getByRole('radio', { name: 'Female' }).nth(1).check();
        await page.getByRole('radio', { name: 'Under' }).check();
        await page.getByRole('button', { name: 'Show Selected Values' }).click();
        await expect(page.locator('#result3')).toHaveText('You selected: Gender = Female, Age Group =Under 18')
    });

    test('Multi radio button Gender & Age validation(Female 18-35 years)', async ({page}) => {
        await page.getByRole('radio', { name: 'Female' }).nth(1).check();
        await page.getByRole('radio', { name: '-35' }).check();
        await page.getByRole('button', { name: 'Show Selected Values' }).click();
        await expect(page.locator('#result3')).toHaveText('You selected: Gender = Female, Age Group =18-35')
    });

    test('Multi radio button Gender & Age validation(Female > 35 years)', async ({page}) => {
        await page.getByRole('radio', { name: 'Female' }).nth(1).check();
        await page.getByRole('radio', { name: '+' }).check();
        await page.getByRole('button', { name: 'Show Selected Values' }).click();
        await expect(page.locator('#result3')).toHaveText('You selected: Gender = Female, Age Group =35+')
    });
});