import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.locator('body').click();
  await page.goto('https://www.google.com/search?q=google&oq=google&aqs=chrome..69i57.9932j0j2&sourceid=chrome&ie=UTF-8');
  await page.getByText('GoogleGooglehttps://www.google.comGooglehttps://www.google.com').click();
  await page.getByRole('link', { name: 'Google Google https://www.google.com' }).click();
});