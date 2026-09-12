import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';

const output = 'docs/reviews/evidence/current';
await mkdir(output, { recursive: true });

const browser = await chromium.launch({
  headless: true,
  executablePath: '/Users/jinchua/Library/Caches/ms-playwright/chromium_headless_shell-1228/chrome-headless-shell-mac-arm64/chrome-headless-shell',
});
const consoleErrors = [];

const desktop = await browser.newPage({ viewport: { width: 1440, height: 1024 }, deviceScaleFactor: 1 });
desktop.on('console', (message) => {
  if (message.type() === 'error') consoleErrors.push(message.text());
});
desktop.on('pageerror', (error) => consoleErrors.push(error.message));
await desktop.goto('http://127.0.0.1:4173/', { waitUntil: 'networkidle' });
await desktop.screenshot({ path: `${output}/01-desktop-home.png`, fullPage: true });

await desktop.getByRole('button', { name: /switch to dark theme/i }).click();
await desktop.screenshot({ path: `${output}/02-desktop-dark.png`, fullPage: false });

const mobile = await browser.newPage({ viewport: { width: 390, height: 844 }, deviceScaleFactor: 1 });
mobile.on('console', (message) => {
  if (message.type() === 'error') consoleErrors.push(message.text());
});
mobile.on('pageerror', (error) => consoleErrors.push(error.message));
await mobile.goto('http://127.0.0.1:4173/', { waitUntil: 'networkidle' });
for (const sectionId of ['#pillars', '#work', '#process', '#knowledge', '#lab', '#about', '#contact']) {
  await mobile.locator(sectionId).scrollIntoViewIfNeeded();
  await mobile.waitForTimeout(250);
}
await mobile.evaluate(() => window.scrollTo(0, 0));
await mobile.waitForTimeout(250);
await mobile.screenshot({ path: `${output}/03-mobile-home.png`, fullPage: true });
await mobile.screenshot({ path: `${output}/03a-mobile-hero.png`, fullPage: false });
await mobile.locator('#pillars').evaluate((element) => element.scrollIntoView({ block: 'start' }));
await mobile.waitForTimeout(150);
await mobile.screenshot({ path: `${output}/03b-mobile-pillars.png`, fullPage: false });
await mobile.locator('#work').evaluate((element) => element.scrollIntoView({ block: 'start' }));
await mobile.waitForTimeout(150);
await mobile.screenshot({ path: `${output}/03c-mobile-work.png`, fullPage: false });
await mobile.locator('#knowledge').evaluate((element) => element.scrollIntoView({ block: 'start' }));
await mobile.waitForTimeout(150);
await mobile.screenshot({ path: `${output}/03d-mobile-knowledge.png`, fullPage: false });
await mobile.evaluate(() => window.scrollTo(0, 0));
await mobile.waitForTimeout(150);
await mobile.getByRole('button', { name: /open navigation menu/i }).click();
await mobile.screenshot({ path: `${output}/04-mobile-menu.png`, fullPage: false });
await mobile.getByRole('link', { name: 'Build', exact: true }).click();
await mobile.waitForTimeout(400);
const buildVisible = await mobile.locator('#build').isVisible();

const results = {
  title: await desktop.title(),
  h1: await desktop.locator('h1').innerText(),
  desktopBodyWidth: await desktop.locator('body').evaluate((element) => ({ scrollWidth: element.scrollWidth, clientWidth: element.clientWidth })),
  mobileBodyWidth: await mobile.locator('body').evaluate((element) => ({ scrollWidth: element.scrollWidth, clientWidth: element.clientWidth })),
  menuExpandedAfterBuildClick: await mobile.getByRole('button', { name: /open navigation menu/i }).getAttribute('aria-expanded'),
  buildVisible,
  consoleErrors,
};

console.log(JSON.stringify(results, null, 2));
await browser.close();
