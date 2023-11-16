import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.huntress.com/');
  await page.locator('#pwr-js-burger__trigger-open').click();
  await page.locator('#pwr-js-burger').getByText('Platform', { exact: true }).click();
  await page.getByRole('link', { name: 'M365 - Navigation MDR for Microsoft 365 Microsoft 365 Threat Detection' }).click();
  await expect(page).toHaveURL('https://www.huntress.com/managed-detection-and-response-for-microsoft365')
});