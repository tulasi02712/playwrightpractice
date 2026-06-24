const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  await page.goto("https://eventhub.rahulshettyacademy.com");
  await page.locator("#email").fill("atulasi101299@gmail.com");
  await page.locator("#password").fill("Tulasi@12");
  await page.locator("#login-btn").click();

  await page.locator("#nav-events").click();
  await page.locator('a:has-text("Add New Event")').click();

  const dateInput = page.locator('[id="event-date-&-time"]');
  await dateInput.waitFor();

  const info = await dateInput.evaluate((el) => ({
    tag: el.tagName,
    type: el.getAttribute("type"),
    outerHTML: el.outerHTML,
  }));

  console.log(JSON.stringify(info, null, 2));
  await browser.close();
})().catch((e) => {
  console.error(e);
  process.exit(1);
});

