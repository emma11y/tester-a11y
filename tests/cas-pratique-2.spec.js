// @ts-check
import { test, expect } from '@playwright/test';

test.describe('cas-pratique-2', () => {
  test('Est-ce que ce site est vocalisable dans la bonne langue ?', async ({
    page,
  }) => {
    await page.goto('./cas-pratique-2');

    const lang = await page.getAttribute('html', 'lang');

    await expect(lang).toBe('fr');
  });
});
