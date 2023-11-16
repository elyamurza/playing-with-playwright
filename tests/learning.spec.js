// @ts-check
const { test, expect } = require('@playwright/test');

test('has tab info', async ({ page }) => {
  await page.goto('https://huntress.com/');

  // Expect tab to match text
  await expect(page).toHaveTitle("Managed Cybersecurity Platform for SMBs and IT Providers | Huntress");
})

test.describe('navigation', () => {
  test.beforeEach(async ({ page }) => {
    // Go to the home page
    await page.goto('https://huntress.com/');
  });

  test('platforms dropdown', async ({ page }) => {
    await page.locator('#pwr-js-burger__trigger-open').click();
    await page.locator('#pwr-js-burger').getByText('Platform', { exact: true }).click();
    await page.getByRole('link', { name: 'M365 - Navigation MDR for Microsoft 365 Microsoft 365 Threat Detection' }).click();
    await expect(page).toHaveURL('https://www.huntress.com/managed-detection-and-response-for-microsoft365');
  });

  test('who we serve dropdown', async ({ page }) => {
    await page.locator('#pwr-js-burger__trigger-open').click();
    await page.locator('#pwr-js-burger').getByText('Who We Serve', { exact: true }).click();
    await page.getByRole('link', { name: 'Businesses & IT Teams' }).click();
    await expect(page).toHaveURL('https://www.huntress.com/partners/businesses-it-teams');
    await expect(page).toHaveTitle('Managed Cybersecurity for Businesses & IT Teams | Huntress');
  })
});