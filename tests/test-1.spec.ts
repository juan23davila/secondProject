import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.mercadolibre.com.co/');
  await page.getByPlaceholder('Buscar productos, marcas y má').fill('Iphone');
  await page.getByRole('button', { name: 'Buscar' }).click();
});