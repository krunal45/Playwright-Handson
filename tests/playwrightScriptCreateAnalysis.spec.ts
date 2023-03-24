import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByPlaceholder('Username').click();
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('textbox').nth(1).fill('Admin');
  await page.getByText('-- Select --').first().click();
  await page.getByRole('option', { name: 'Admin' }).getByText('Admin').click();
  await page.getByPlaceholder('Type for hints...').click();
  await page.getByPlaceholder('Type for hints...').fill('Paul');
  await page.getByRole('option', { name: 'Paul Collings' }).getByText('Paul Collings').click();
  await page.getByText('-- Select --').click();
  await page.getByRole('option', { name: 'Enabled' }).getByText('Enabled').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('paragraph').filter({ hasText: 'Paul Collings' }).click();
  await page.getByRole('menuitem', { name: 'Logout' }).click();
});