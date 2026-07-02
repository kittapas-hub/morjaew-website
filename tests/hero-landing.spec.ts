import { expect, test, type Page } from '@playwright/test';

async function isFullyInViewport(page: Page, selector: string) {
  return page.evaluate((sel) => {
    const el = document.querySelector(sel);
    if (!el) return false;
    const rect = el.getBoundingClientRect();
    return rect.top >= 0 && rect.left >= 0 && rect.bottom <= window.innerHeight && rect.right <= window.innerWidth;
  }, selector);
}

test.describe('hero landing view', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await page.waitForSelector('.home-hero-title', { state: 'visible' });
  });

  test('opens at top of page on hero', async ({ page }) => {
    const scrollY = await page.evaluate(() => window.scrollY);
    expect(scrollY).toBe(0);
  });

  test('shows hero headline, CTAs, helper text, and large dragon seal', async ({ page, viewport }) => {
    const isDesktop = (viewport?.width ?? 0) >= 981;

    await expect(page.locator('.home-hero-title')).toContainText('เรื่องที่คุณกำลังเผชิญ');
    await expect(page.getByRole('link', { name: 'เปิดดวงกับหมอแจว' })).toBeVisible();
    await expect(page.locator('.home-hero-helper')).toContainText('ดูดวงส่วนตัวทางโทรศัพท์');

    const sealWidth = await page.locator('.home-hero-seal').evaluate((el) => el.getBoundingClientRect().width);
    if (isDesktop) {
      expect(sealWidth).toBeGreaterThanOrEqual(340);
      expect(await isFullyInViewport(page, '.home-hero-title')).toBe(true);
      expect(await isFullyInViewport(page, '.home-hero-helper')).toBe(true);
      expect(await isFullyInViewport(page, '.home-hero-seal')).toBe(true);
    } else {
      expect(sealWidth).toBeGreaterThanOrEqual(180);
      await expect(page.locator('.home-hero-title')).toBeVisible();
      await expect(page.locator('.home-hero-seal')).toBeVisible();
    }
  });

  test('services section stays below the fold on desktop', async ({ page, viewport }) => {
    test.skip((viewport?.width ?? 0) < 981, 'desktop only');

    const servicesTop = await page.locator('#services').evaluate((el) => el.getBoundingClientRect().top);
    const viewportHeight = await page.evaluate(() => window.innerHeight);
    expect(servicesTop).toBeGreaterThanOrEqual(viewportHeight - 8);
  });
});
