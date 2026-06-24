const { test, expect } = require('@playwright/test');
//fake the request body

test('Security test request intercept', async ({ page }) => {

    //login and reach orders page
    await page.goto("https://rahulshettyacademy.com/client");
    await page.locator("#userEmail").fill("tulasi10121999@gmail.com");
    await page.locator("#userPassword").fill("Tulasi@12");
    await page.locator("[value='Login']").click();
    await page.waitForLoadState('networkidle');
    await page.locator(".card-body b").first().waitFor();

    await page.locator("button[routerlink*='myorders']").click();

    await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*",
        route => route.continue({ url: 'https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=621661f884b053f6765465b6' }))

    await page.locator("button:has-text('View')").first().click();
    await expect(page.locator('.blink_me')).toHaveText("You are not authorize to view this order");




})