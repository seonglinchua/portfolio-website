import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';

const output = 'docs/reviews/evidence/current/sections';
await mkdir(output, { recursive: true });

const browser = await chromium.launch({
  headless: true,
  executablePath: '/Users/jinchua/Library/Caches/ms-playwright/chromium_headless_shell-1228/chrome-headless-shell-mac-arm64/chrome-headless-shell',
});

const targets = [
  ['hero', '.hero'],
  ['pillars', '#pillars'],
  ['featured-work', '#work'],
  ['process', '#process'],
  ['knowledge', '#knowledge'],
  ['lab', '#lab'],
  ['about', '#about'],
  ['contact', '#contact'],
  ['footer', '.site-footer'],
];

for (const [mode, viewport] of [
  ['desktop', { width: 1440, height: 1024 }],
  ['mobile', { width: 390, height: 844 }],
]) {
  const page = await browser.newPage({ viewport, deviceScaleFactor: 1 });
  await page.goto('http://127.0.0.1:4173/', { waitUntil: 'networkidle' });
  await page.evaluate(() => {
    document.documentElement.style.scrollBehavior = 'auto';
  });
  await page.addStyleTag({ content: '.site-header, .skip-link { display: none !important; }' });

  for (const [, selector] of targets) {
    await page.locator(selector).scrollIntoViewIfNeeded();
    await page.waitForTimeout(200);
  }

  for (const [name, selector] of targets) {
    const locator = page.locator(selector);
    await locator.scrollIntoViewIfNeeded();
    await page.waitForTimeout(100);
    await locator.screenshot({ path: `${output}/${mode}-${name}.png` });
  }

  await page.close();
}

await browser.close();
