import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';

const output = 'docs/reviews/evidence/footer';
await mkdir(output, { recursive: true });

const browser = await chromium.launch({
  headless: true,
  executablePath: '/Users/jinchua/Library/Caches/ms-playwright/chromium_headless_shell-1228/chrome-headless-shell-mac-arm64/chrome-headless-shell',
});

const results = {};

const desktop = await browser.newPage({ viewport: { width: 1440, height: 600 }, deviceScaleFactor: 1 });
await desktop.goto('http://127.0.0.1:4173/', { waitUntil: 'networkidle' });
await desktop.locator('.site-footer').scrollIntoViewIfNeeded();
await desktop.locator('.site-footer').screenshot({ path: `${output}/01-desktop-light.png` });
await desktop.getByRole('button', { name: /switch to dark theme/i }).click();
await desktop.locator('.site-footer').screenshot({ path: `${output}/02-desktop-dark.png` });
await desktop.locator('.site-footer').getByRole('link', { name: /Nezha Systems home/i }).click();
await desktop.waitForTimeout(1200);
results.desktopBrandReturn = {
  hash: await desktop.evaluate(() => location.hash),
  scrollY: await desktop.evaluate(() => window.scrollY),
};

const tablet = await browser.newPage({ viewport: { width: 768, height: 900 }, deviceScaleFactor: 1 });
await tablet.goto('http://127.0.0.1:4173/', { waitUntil: 'networkidle' });
await tablet.locator('.site-footer').scrollIntoViewIfNeeded();
await tablet.locator('.site-footer').screenshot({ path: `${output}/03-tablet-light.png` });

const mobile = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 });
await mobile.goto('http://127.0.0.1:4173/', { waitUntil: 'networkidle' });
await mobile.locator('.site-footer').scrollIntoViewIfNeeded();
await mobile.locator('.site-footer').screenshot({ path: `${output}/04-mobile-light.png` });

results.links = await mobile.locator('.site-footer a').count();
console.log(JSON.stringify(results, null, 2));
await browser.close();
