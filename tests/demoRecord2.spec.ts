import { chromium } from "@playwright/test";

const {test, expect } = require('@playwright/test');

test('test demo Record',(async ({page}) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('most afforrdab');
  await page.getByText('affordable cars in india').click();
  
  }))