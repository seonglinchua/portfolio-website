import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';

const output = 'docs/reviews/evidence/navigation';
await mkdir(output, { recursive: true });

const browser = await chromium.launch({
  headless: true,
  executablePath: '/Users/jinchua/Library/Caches/ms-playwright/chromium_headless_shell-1228/chrome-headless-shell-mac-arm64/chrome-headless-shell',
});

const results = {};
const desktop = await browser.newPage({ viewport: { width: 1440, height: 360 }, deviceScaleFactor: 1 });
await desktop.goto('http://127.0.0.1:4173/', { waitUntil: 'networkidle' });
await desktop.locator('.site-header').screenshot({ path: `${output}/01-desktop-light.png` });
await desktop.getByRole('button', { name: /switch to dark theme/i }).click();
await desktop.waitForTimeout(250);
await desktop.locator('.site-header').screenshot({ path: `${output}/02-desktop-dark.png` });
await desktop.locator('.site-header').getByRole('link', { name: 'Knowledge', exact: true }).click();
await desktop.waitForTimeout(1200);
results.desktop = {
  knowledgeAriaCurrent: await desktop.locator('.site-header').getByRole('link', { name: 'Knowledge', exact: true }).getAttribute('aria-current'),
  hash: await desktop.evaluate(() => location.hash),
};
await desktop.locator('.site-header').getByRole('link', { name: /Nezha Systems home/i }).click();
await desktop.waitForTimeout(1200);
results.desktop.brandReturn = {
  hash: await desktop.evaluate(() => location.hash),
  scrollY: await desktop.evaluate(() => window.scrollY),
};

const tablet = await browser.newPage({ viewport: { width: 768, height: 900 }, deviceScaleFactor: 1 });
await tablet.goto('http://127.0.0.1:4173/', { waitUntil: 'networkidle' });
await tablet.locator('.site-header').screenshot({ path: `${output}/03-tablet-closed.png` });
results.tablet = {
  menuVisible: await tablet.getByRole('button', { name: /open navigation menu/i }).isVisible(),
  horizontalOverflow: await tablet.evaluate(() => document.body.scrollWidth > document.body.clientWidth),
};

const mobile = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 });
await mobile.goto('http://127.0.0.1:4173/', { waitUntil: 'networkidle' });
await mobile.locator('.site-header').screenshot({ path: `${output}/04-mobile-closed.png` });
const menuButton = mobile.getByRole('button', { name: /open navigation menu/i });
await menuButton.focus();
await menuButton.press('Enter');
await mobile.screenshot({ path: `${output}/05-mobile-open.png`, fullPage: false });
const overflowWhileOpen = await mobile.evaluate(() => document.body.style.overflow);
await mobile.locator('.nav-backdrop').click({ position: { x: 4, y: 400 } });
const expandedAfterOutsideClick = await menuButton.getAttribute('aria-expanded');
await menuButton.press('Enter');
await mobile.keyboard.press('Escape');
results.mobile = {
  overflowWhileOpen,
  expandedAfterOutsideClick,
  expandedAfterEscape: await menuButton.getAttribute('aria-expanded'),
  activeElementAfterEscape: await mobile.evaluate(() => document.activeElement?.getAttribute('aria-label') || document.activeElement?.textContent?.trim()),
};

console.log(JSON.stringify(results, null, 2));
await browser.close();
